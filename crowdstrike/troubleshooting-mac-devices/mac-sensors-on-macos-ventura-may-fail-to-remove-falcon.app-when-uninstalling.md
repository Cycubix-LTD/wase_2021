# Mac sensors on macOS Ventura may fail to remove Falcon.app when uninstalling

### Issue

While trying to delete the Falcon sensor using the "falconctl uninstall" command, you might notice that Falcon.app isn't removed from your Applications folder. Also, you could receive an error in the Terminal stating that you don't have the needed permissions to change the contents of the Applications folder.

### Relevant For

* Mac users with Falcon sensor version 6.45 or later
* Those using macOS Ventura, starting from version 13.0

### How to Fix

To fully get rid of Falcon, you'll need to add Terminal to a specific list of authorized apps. Here's how:

1. On your Mac running Ventura, go into Settings.
2. Click on Privacy & Security options.
3. Head over to App Management.
4. Hit the '+' icon to locate the Applications folder, then the Utilities subfolder, and select Terminal.
5. A prompt might appear asking you to authenticate, and you may need to restart Terminal to apply the changes.

This should allow Terminal to successfully eliminate Falcon.app from your system.

### Underlying Reason

The obstacle originates from a security update in macOS Ventura version 13, which allows only verified apps to make changes to installed software.

### Extra Details

* Apps with unrestricted access to the entire disk don't require listing under App Management.
* Should Terminal be missing from the App Management list, Apple will offer guidance through on-screen prompts.
* Even if an unlisted application tries to uninstall Falcon, the core Falcon system will be deactivated, essentially removing it from the system.
