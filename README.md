# Radio Party Desktop Application
![radioparty](https://github.com/mariuszkowal1992/radioparty-desktop/assets/64725802/2114152f-03ce-49ae-a0a7-3b7f182e5436)
# Requirements
Installed Node.js and NPM.
# Creating application for Windows
To create an application, you need to download and extract the ZIP archive. Then, in the Windows console, navigate to the extracted folder.
After navigating to the extracted folder in the console, you should run the command <code>npm install</code> to install the dependencies listed in the package.json file.
After installing the dependencies, use the <code>npm start</code> command to check the Electron application's functionality. If everything went smoothly, the application window should appear as shown in the above image.
To initiate the process of creating an exe file for the Windows system, while remaining in the unpacked folder, execute the command <code>npm run package-win32</code> for the 32-bit system or <code>npm run package-win64</code> for the 64-bit system in the console. The finished application will be located in the ***dist/win32*** or ***dist/win64*** folder, depending on the system.
