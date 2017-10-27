'use strict'

import { app, BrowserWindow, ipcMain, dialog,Menu } from 'electron'
const path = require('path')
const shortid = require('shortid')


if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}


let mainWindow // 主窗口
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@')
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9081/`
  : `file://${__dirname}/index.html`

const backURL = winURL + `#background`
function createMainWindow () {
  const win = new BrowserWindow({
    height: 671,
    width: 969,
    minWidth: 969,
    minHeight: 671,
    backgroundColor: '#f5f5f5',
    show: false
  })

  win.setMenuBarVisibility(false)
  win.webContents.openDevTools(true)
  win.loadURL(winURL)
  win.on('close',(event)=>{
      mainWindow = null
      // 在Mac中完全退出程序，而不会留在dock中
      app.quit()
  })
  win.on('ready-to-show', () => {
    win.show()
    win.focus()
  })
  return win
}


app.on('ready', () => {
  mainWindow = createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})