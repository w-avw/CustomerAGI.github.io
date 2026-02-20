# Troubleshooting Localhost:3000 Startup Issues

If you are unable to start your website on `localhost:3000`, it is likely due to one of the following reasons. This guide provides a step-by-step solution for the most common cause found in your environment.

## 1. The Problem: PowerShell Execution Policy
In Windows, PowerShell often has a security feature called an **Execution Policy** that prevents scripts (like the ones `npm` uses) from running.

**Symptoms:**
- You run `npm run dev`.
- You see an error like: `npm : No se puede cargar el archivo ... npm.ps1 porque la ejecución de scripts está deshabilitada`.

---

## 2. Step-by-Step Solution

### Option A: The Quick Workaround (No Admin rights needed)
Instead of using the default command, tell Windows to use the Command Prompt version of npm:
1. Open your terminal in the project folder.
2. Run:
   ```powershell
   npm.cmd run dev
   ```

### Option B: The Permanent Fix (Requires Admin rights)
This allows your system to run local scripts while still protecting against unsigned scripts from the internet.
1. Click the **Start** button.
2. Type `PowerShell`, right-click it, and select **Run as Administrator**.
3. Type the following command and press Enter:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
4. Type `Y` and press Enter when prompted for confirmation.
5. Close the window. Now `npm run dev` should work in any terminal.

---

## 3. Other Potential Issues

### Port 3000 is already in use
If another process is already using port 3000, Vite will usually try to use 3001 or fail.
- **Solution:** Close other terminal windows that might be running a server, or change the port in `vite.config.ts`.

### Missing Dependencies
If you recently downloaded the project, you might be missing the `node_modules` folder.
- **Solution:** Run `npm install` (or `npm.cmd install`) before starting the dev server.
