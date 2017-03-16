import {
    screen,
    BrowserWindow
} from 'electron'

import utils from './utils'


const installExtensions = async () => {
    if (utils.isProd()) return void 0
    const installer = require('electron-devtools-installer')
  
    const extensions = [
        'REACT_DEVELOPER_TOOLS',
        'REDUX_DEVTOOLS'
    ]

    return Promise.all(extensions.map(ext => installer.default(installer[ext])))
        .catch(console.log)
}

const create = async (url) => {
    await installExtensions()
    const mainScreen = screen.getPrimaryDisplay().bounds

    let mainWindow = new BrowserWindow({
        width: mainScreen.width,
        height: mainScreen.height
    })
    mainWindow.maximize()
    mainWindow.loadURL(url)

    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined')
        }
        mainWindow.show()
        mainWindow.focus()
    })


    if (utils.isDev()) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}


module.exports = {
    create
}