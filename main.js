const {app, BrowserWindow} = require('electron');

let win;

//create the window
function createWindow(){
    // create browser window
    win = new BrowserWindow({
        Width: 800,
        Height: 600
    })

    // load the index file
    win.loadFile('index.html');

    //open deve tools
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    })
}


app.on('ready', createWindow)

// quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    //mac os re-create window
    if(win === null){
        createWindow()
    }
})



