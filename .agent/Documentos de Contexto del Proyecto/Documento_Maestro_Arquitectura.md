# DOCUMENTO MAESTRO DE ARQUITECTURA Y CONTEXTO DE CUSTOMERAGI

**Para:** Motor de Desarrollo Frontend/Backend (Google Antigravity AI)
**Estado:** CONFIRMADO Y PROCESADO

---

## 1. VISIÓN GENERAL DEL PROYECTO
CustomerAGI es una Plataforma SaaS Enterprise Multi-Tenant (B2B). 
Su objetivo principal es proveer un Panel de Control (Dashboard) web donde las empresas confguran "Agentes de IA" personalizados, los alimentan de conocimiento (RAG) subiendo PDFs, definen reglas, y conectan herramientas para que estos agentes interactúen con clientes finales a través de WhatsApp.

## 2. ARQUITECTURA DEL SISTEMA (Separación de Responsabilidades)

La arquitectura es de microservicios, rigurosamente dividida por seguridad y escalabilidad operativa:

*   **Frontend / Backend Web (MI RESPONSABILIDAD):**
    *   Manejo y renderizado de la UI (Dashboard).
    *   Autenticación multi-inquilino (sesión de empresas).
    *   Gestión de Base de Datos relacional propia de la web (vital para mapear el ID del documento con el Nombre real del archivo).
    *   Consumo estructurado e intermediación de las APIs del Orquestador (orquestando llamadas HTTP originadas desde un servidor NodeJS seguro, nunca desde el navegador).
*   **Orquestador IA (n8n Self-Hosted):**
    *   Motor "API Gateway" interno.
    *   Manejo de rutas hacia WhatsApp, flujos de vectorización y chunking de PDFs.
    *   Invocación a los modelos subyacentes LLM (Gemini 2.5 Flash / DeepSeek V3).
*   **Base de Datos Core (PostgreSQL + pgvector):**
    *   VM aislada. Guarda la configuración base (`tenants_agents`) y el vector de texto (`knowledge_base`).
    *   *Regla Estricta:* El código web NO se conecta aquí. Solo n8n se conecta acá. Todo el tráfico hacia esta tabla se hace invocando los Webhooks RESTful en n8n.

## 3. REGLA DE ORO: MAPEO DE NOMBRES (Knowledge Base)
**El Desafío:** n8n no conserva los nombres de archivo legibles (`ej: catalogo.pdf`), solo retiene los fragmentos vectorizados y un `document_id` (UUID).
**La Solución Obligatoria:** Mi Base de Datos web interna debe almacenar una tabla o relación de tres pilares:
`[tenant_id] + [document_id (UUID)] + [file_name]`.

Cuando el Frontend requiera mostrar la galería de archivos:
1. El Backend realiza un fetch a N8N: *"Dame los documentos del tenant_id = 1"*.
2. N8N contesta con un array de `document_id`.
3. El Backend cruza los IDs en su propia base de datos, extrae el `file_name` asignado, y se lo inyecta a la data que envía al Frontend (React).

## 4. CONTRATO DE APIS INTERNAS (Webhooks de n8n)

Se establece un muro de autenticación obligatorio: `X-Api-Key: [ADMIN_KEY]` (Solo se envía desde el backend).

| Flujo | Método | URL | Content-Type | Payload | Acción del Backend |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A. Subir Documento** | `POST` | `/webhook/subir-pdf-mvp` | `multipart/form-data` | `file`, `tenant_id`, `document_id` (Generado por mí), `notas_contexto` (String) | Guardar mapeo UUID <> file_name en DB web local antes/durante el proceso. |
| **B. Actualizar Notas** | `PUT` | `/webhook/actualizar-notas-pdf` | `application/json` | `document_id`, `tenant_id`, `notas_contexto` (String concatenado con `\n`) | Sin impacto en tabla local; afecta al vector de N8N. |
| **C. Borrar Documento** | `DELETE` | `/webhook/borrar-pdf-seguro` | `application/json` | `document_id`, `tenant_id` | Al recibir HTTP 200, proceder a borrar el mapeo UUID <> file_name de la base de datos interna web. |
| **D. Fetch Docs** | `POST` | `/webhook/fetch-documentos` | `application/json` | `tenant_id` | Cruce relacional: Cruzar respuesta de UUIDs con Nombres Locales de la DB antes de enviar a React. |

## 5. DIRECTRICES DE SEGURIDAD (Cyber-Sentinel Rules)
1.  **Frontend Totalmente "Tonto":** La UI en React jamás poseerá llaves API ni ejecutará Fetch directos hacia la red privada de n8n.
2.  **Capa Intermedia Backend Inteligente:** Se exige la construcción de una capa de servidor o funciones de API intermedias (`/api/...`) en el entorno de desarrollo que custodie el token `X-Api-Key` y orqueste la llamada final a n8n.
3.  **Validación de Propiedad Estricta:** Antes de que el servidor puente haga un `DELETE` en n8n, tiene que correr una query en su tabla de autenticación para comprobar que el `tenant_id` y su sesión tokenizada realmente coinciden, previniendo borrados maliciosos.
