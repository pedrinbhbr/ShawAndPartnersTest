# ShawAndPartnersTest
Backend and Frontend code for Shaw and Partners test

# It was developed using NodeJS v10.16.2 (https://nodejs.org/dist/v10.16.2/) This link will lead to a page where you can choose a file to install this version of node.
# It does works with newer NodeJS version, but it's better using NodeJS v10.16.2 to make sure dependencies won't get any failure.

# Instalation of dependencies may take a while.

# Ports used are 8000 and 3001 by default, you can change it following steps below. 

To execute the backend, open a terminal and go inside the directory. Example: "cd C:\ShawAndPartnersTest\Backend". After that, type "npm install" to install all dependencies needed. Then execute it with "npm start" and the backend server should be running and showing what port it is using. 
It is important to check and configure which port to use for backend server. Default port is 3001. It cannot be the same as Frontend port.

At '/ShawAndPartnersTest/Backend/server.js' you will need to set a localhost ip or just let 'localhost'. Port can also be changed, but it is by default 3001.

![Port Backend](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/portbackend.PNG)

To execute the frontend, open a terminal and go inside the directory. Example: "cd C:\ShawAndPartnersTest\Frontend". After that, type "npm install" to install all dependencies needed. Then execute it with "npm start" and the frontend app should be running. 
It is important to check and configure which port to use for frontend application. Default port is 8000. It cannot be the same as Backend port.

At '/ShawAndPartnersTest/Frontend/package.json' you need to set script 'start' to a desired port. This is the port used by Frontend app.
![Port Frontend](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/port.PNG)

At '/Frontend/src/App.js' you need to set the port you want. I'm using backend on localhost and port 3001. 
![Frontend call](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/localhost.PNG)

App usage:

![First Screen](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/firstscreen.png)

![Search User](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/modalscreen.png)

![User Details](https://github.com/pedrinbhbr/ShawAndPartnersTest/blob/main/Frontend/public/userdetails.png)
