# System Extensions not activated

Date: August 23, 2023

### Symptoms

When the AllowedSystemExtensions is removed from a hosts MDM profile, this triggers the operating system to uninstall the system extension. The OS only removes the system extension from the installed extensions and does not remove any of the Falcon files. After the profile is re-added, the system extension needs to be re-installed. However, since /Applications/Falcon.app does not have user permissions to load system extensions, users are unable to load our system extension to trigger the re-installation.

### Applies To

MacOS hosts approving the Falcon system extension through MDM profiles.\
Sensor 6.52.16503 and earlier

### Resolution

* Upgrade to 6.53.16604 or later
* If a system has already been affected by this and is not on sensor version 6.53.16604 or later, you need to execute the following commands from the terminal:

1. sudo chflags -R nouchg /Applications/Falcon.app
2. sudo /Applications/Falcon.app/Contents/Resources/falconctl load

