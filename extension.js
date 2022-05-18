const vscode = require('vscode');
const {writeFile} = require('./utils')
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let copyTemplate = vscode.commands.registerCommand('copyTemplate', async function (param) {
		// The code you place here will be executed every time your command is executed
		const folderPath = param && param.fsPath;
		const options = {
			prompt: "请输入模块名称: ",
			placeHolder: "请输入模块名称"
		};
		// 调出系统输入框获取组件名
    vscode.window.showInputBox(options).then(value => {
			if (!value) {return;}

				const fileName = value;
				const fullPath = folderPath;
				writeFile(fileName, fullPath)
				// prettier()
				
			});
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World from brooker-ex!');
	});
	context.subscriptions.push(copyTemplate)
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
