import {
  app
} from 'electron'

import path from 'path'
import url from 'url'

import WindowHelper from './browser/window'

const RENDERER_URI = url.format({
  pathname: path.join(__dirname, '/renderer/index.html'),
  protocol: 'file:',
  slashes: true
})

console.log(`Render: ${RENDERER_URI}`)

const createWindow = () => {
  console.log("App Ready")
  WindowHelper.create(RENDERER_URI)
}

app.on('ready', createWindow)


app.on('window-all-closed',  () =>{
    console.log("App Closed")
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})