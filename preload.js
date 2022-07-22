/* eslint-disable no-undef */
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  send: (channel) => {
    const validChannels = ["close", "minimize", "maximize", "restore"];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel);
    }
    if (channel == "app-version") {
      return ipcRenderer.sendSync(channel);
    }
    if (channel == "electron-version") {
      return process.versions["electron"];
    }
  },
  receive: (channel, func) => {
    const validChannels = ["maximize-status"];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
