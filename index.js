const electron = require('electron');

var app = electron.app;
console.log(electron);
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

// app.on('window-all-closed', function() {
//   if (process.platform != 'darwin') {
//     app.quit();
//   }
// });
app.on('window-all-closed', () => {
  console.log("app window-all-closed");
  //if (process.platform !== 'darwin') {
    app.quit()
  //}
})

app.on('ready', function() {

  mainWindow = new BrowserWindow({ width: 900, height: 600, 'min-width': 900, 'min-height': 600, frame: false });

  mainWindow.loadURL('file://' + __dirname + '/assets/html/index.html');
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

