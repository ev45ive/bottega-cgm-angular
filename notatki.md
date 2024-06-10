
node -v 
v20.13.1

npm -v
10.5.2

git -v 
git version 2.40.1.windows.1


# Angular CLI 

ng version
npm i -g @angular/cli
npm i -g @angular/cli@latest

Angular CLI: 18.0.3

ng help
ng new --help


ng new cgm --directory  "." --standalone false 

# GIT
git clone https://github.com/ev45ive/bottega-cgm-angular.git
npm install
npm start



## Semver
https://semver.org/
https://semver.npmjs.com/

npm i // package.json + updates
npm ci // package-lock.json - exact!

# Extensions
https://angular.dev/tools/devtools

https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console

Angular Language Service
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

Angular 10 Snippets - Mikael Morlund
https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

Prettier
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Paste JSON as Code - quicktype
https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype


# UI Toolkits
https://material.angular.io/guide/schematics
https://ng.ant.design/docs/introduce/en
https://primeng.org/
https://tailwindcss.com/

ng add @angular/material
ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@18.0.2.
✔ Package information loaded.

The package @angular/material@18.0.2 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Cyan/Orange        
[Preview: https://material.angular.io?theme=cyan-orange]
? Set up global Angular Material typography styles? Yes
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1321 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.module.ts (825 bytes)
UPDATE angular.json (3342 bytes)
UPDATE src/index.html (623 bytes)
UPDATE src/styles.scss (182 bytes)

## Playlists 
ng g --help
ng g m --help

ng g m playlists -m app --route playlists  --routing 

ng g c playlists/containers/playlists-view

ng g c playlists/components/playlist-list
ng g c playlists/components/playlist-details
ng g c playlists/components/playlist-editor

