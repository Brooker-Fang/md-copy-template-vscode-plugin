const vscode = require('vscode');
const path = require('path')
const fs = require('fs')

const runFormat = () => {
	let activeTerminal = vscode.window.activeTerminal
	if(!activeTerminal) {
		activeTerminal = vscode.window.createTerminal({name: "extension"})
		activeTerminal.show(true)
	}
	activeTerminal.sendText('npm run format')
}
const writeFile = (foldername, relativePath) => {
	const templatePath = path.join(__dirname, "./template");
	const files = fs.readdirSync(templatePath);
	const uppercasefoldername = foldername.slice(0, 1).toLocaleUpperCase() + foldername.slice(1).toLocaleLowerCase();

	const writeFileDir = relativePath;
	fs.stat(path.join(writeFileDir, foldername), (err, stats) => {
			if (!stats) {
				
					fs.mkdirSync(path.join(writeFileDir, foldername));
					loop(files, templatePath, path.join(writeFileDir, foldername));
			} else {
					vscode.window.showErrorMessage('current folder existed')
			}
	});

	function loop(files, currentPath, writeFileDir) {
			files.forEach(it => {
					const currentRead = path.join(currentPath, it);
					fs.stat(currentRead, (err, stats) => {
							if (stats.isDirectory()) {
									const subRootpath = path.join(currentPath, it);
									const subWritepath = path.join(writeFileDir, it);
									const subFiles = fs.readdirSync(subRootpath, "utf-8");
									fs.mkdirSync(path.join(writeFileDir, it));
									loop(subFiles, subRootpath, subWritepath);
									return;
							}

							fs.writeFile(
									path.join(writeFileDir, it),
									fs
											.readFileSync(path.join(currentPath, it), "utf8")
											.replace(/%uppercase name%/g, uppercasefoldername)
											.replace(/%lowercase name%/g, foldername),
									err => {
											
									}
							);
					});
			});
	}
	// const dirname = relativePath.split('\\src')[0]
	// console.log('dirname==', dirname)
	// const stateFile = path.join(dirname, "/src/type/state.ts");
	// fs.writeFileSync(
	// 		stateFile,
	// 		fs
	// 				.readFileSync(stateFile, "utf8")
	// 				.replace(/\/\*%importState%\*\//, `import {State as ${uppercasefoldername}State} from "page/${foldername}/management/type";/*%importState%*/`)
	// 				.replace(/\/\*%appState%\*\//, `;${foldername}: ${uppercasefoldername}State/*%appState%*/`)
	// );

	// const routeFile = path.join(__dirname, "/src/route/index.ts");
	// fs.writeFileSync(
	// 		routeFile,
	// 		fs
	// 				.readFileSync(routeFile, "utf8")
	// 				.replace(/\/\*%importRoute%\*\//, `import ${uppercasefoldername}Routes from "../page/${foldername}/route";/*%importRoute%*/`)
	// 				.replace(/\/\*%importRouteUnit%\*\//, `,${uppercasefoldername}Routes,/*%importRouteUnit%*/`)
	// );
  setTimeout(() => {
    runFormat()
  }, 1000)
	
};

module.exports = {
  writeFile
}