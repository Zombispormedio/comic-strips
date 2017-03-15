import {
  app,
  BrowserWindow
} from 'electron'

const path = require('path')
const url = require('url')


let mainWindow


function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})