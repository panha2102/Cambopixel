const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

function gameHtmlPath() {
  return path.join(__dirname, '..', 'game', 'index.html');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 960,
    minHeight: 540,
    backgroundColor: '#0a0a12',
    autoHideMenuBar: true,
    title: 'Angkor Vanguard: Kulen Chronicle',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  Menu.setApplicationMenu(null);
  win.loadFile(gameHtmlPath());

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  if (isDev && process.env.ELECTRON_OPEN_DEVTOOLS === '1') {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.webContents.on('before-input-event', (_event, input) => {
    if (input.key === 'F11' && input.type === 'keyDown') {
      win.setFullScreen(!win.isFullScreen());
    }
    if (input.key === 'Escape' && input.type === 'keyDown' && win.isFullScreen()) {
      win.setFullScreen(false);
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});