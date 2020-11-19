import * as vscode from 'vscode'

export function activate (context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'masuperextension.helloWorld',
    () => {
      const backspace = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        1000
      )
      const cmd_z = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        1000
      )

      function handleChange (event: any) {
        backspace.text =
          'Retour arrière : ' + event.textEditor._documentData._lines[0]
        cmd_z.text = 'CMD + Z : ' + event.textEditor._documentData._lines[0]
        backspace.show()
        cmd_z.show()
      }
      vscode.window.onDidChangeTextEditorSelection(handleChange)
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate () {}
