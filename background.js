/* eslint-disable no-undef */
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 620,
    height: 750,
    frame: false,
    backgroundColor: "#21242c",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");

  win.webContents.openDevTools();

  win.on("maximize", () => {
    win.webContents.send("maximize-status", "maximize");
  });

  win.on("unmaximize", () => {
    win.webContents.send("maximize-status", "unmaximize");
  });

  ipcMain.on("close", () => {
    win.close();
  });

  ipcMain.on("minimize", () => {
    win.minimize();
  });

  ipcMain.on("maximize", () => {
    win.maximize();
  });

  ipcMain.on("restore", () => {
    win.restore();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("app-version", (event) => {
  event.returnValue = app.getVersion().slice(0, 3);
});
