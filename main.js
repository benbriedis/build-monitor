const {app,Tray} = require('electron');
const chokidar = require('chokidar');
const {open} = require('fs/promises');

const iconDir =	'./';

const statusFilePath = process.argv[process.argv.length-1]; 


app.whenReady().then(() => {
	const tray = new Tray(iconDir+'/yellow.png');
	tray.setToolTip('Build is in progress (probably)');

	const watcher = chokidar.watch(statusFilePath, {});
	watcher.on('all', async (event,path) => {
		const file = await open(statusFilePath);

		const contents = await file.readFile({encoding:'UTF-8'});

		if (contents.startsWith('ok')) {

			tray.setImage(iconDir+'/green.png');
			tray.setToolTip('Build is OK');
		}
		else if (contents.startsWith('broken')) {
			tray.setImage(iconDir+'/red.png');
			tray.setToolTip('Build is broken');
		}
		else {
			tray.setImage(iconDir+'/yellow.png');
			tray.setToolTip('Build is in progress (probably)');
		}

		await file.close();
	}); 
})

