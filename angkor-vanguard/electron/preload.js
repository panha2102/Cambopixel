const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('angkorDesktop', {
  platform: process.platform,
  version: '1.0.0'
});