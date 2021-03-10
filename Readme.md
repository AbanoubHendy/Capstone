# Travel App
This is a simple Readme that shown the dependencies and refrences that i used in my project and also the important files and how i run my modes.
This App is used to add your trip where yo want to go and the date you want to travel in and you can save and delete the trip 

## Dependencies & Refrences
[using body-parser , cors , express packages] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/89eef1c0-7d30-4fbb-8000-503c343f2a87/modules/d5759801-4827-41f3-bd0e-b4d0e38743a0/lessons/67f93c1e-ba0e-4049-80c8-9e548fccace0/concepts/408bb8b4-53af-4fc1-86b7-2fb30ad7040a)

[installing webpack to work with server] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/3ad904a6-8fbd-462f-a28b-ca68d9d920c3/concepts/43bcc04f-eb88-43a3-ae60-01ae78245820)

### Webpack Loaders
[using babel to convert ECMAScript 2015+ code into compatible version of JavaScript] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/3ad904a6-8fbd-462f-a28b-ca68d9d920c3/concepts/33381d06-a9ba-4500-baac-a5733fb8beaa)

[using style-loader node-sass css-loader sass-loader packages to turn our sass into css] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/5db6cd7a-6227-461e-9978-78bf2238ce78/concepts/5abdefd1-f7f8-4d0c-9567-8620b7a1aad1)

### Webpack Plugins
[using html-webpack-plugin package to adding assets to an html file automatically] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/3ad904a6-8fbd-462f-a28b-ca68d9d920c3/concepts/36a42add-5cc5-41d0-9877-b9388ffb360d)

[using clean-webpack-plugin package to remove all files inside webpack's output.path directory] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/3ad904a6-8fbd-462f-a28b-ca68d9d920c3/concepts/e8f28af5-3770-49be-93e5-c79f969ca13e)

[using mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin packages to optimize our css files to reduce their sizes] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/825ed806-cc5c-4d33-8d6f-2ed7782ee61c/concepts/161185d3-812b-4950-b990-f4de56702181)

[using workbox-webpack-plugin package to allow offline access] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/825ed806-cc5c-4d33-8d6f-2ed7782ee61c/concepts/dda219fc-dc2d-4238-9501-2142f3dca765)

#### Dotenv
[installing dotenv package to create unshown .env file] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/43f97600-ed06-4c78-8eac-92ce00a79b97/concepts/5675966c-1a35-4d58-8715-e279d2303167)

#### Jest FrameWork
[using jest as a Unit Testing For javascript functions] (https://classroom.udacity.com/nanodegrees/nd0011-ent/parts/d7df5719-29e6-423f-94b1-f974518fb358/modules/f02a1ec4-bc41-4275-b259-7ce1e829bf5e/lessons/43f97600-ed06-4c78-8eac-92ce00a79b97/concepts/5675966c-1a35-4d58-8715-e279d2303167)

### Important Files In The Project 
1. .env file that have all the unshown Api Keys of the project.
2. package.json that have scripts , dependencies and devDependences.
3. webpack.dev.js that for the development environment to run the server on localhost. 
4. webpack.prod.js that for the production environment which is our code on a server.
5. all files in the dist folder as the server will read only those files.
6. server.js the important file in the project that make the code running on the server.
7. index.js as this file import all our styles , javascript functions and images which is the entry for webpack.dev.js and webpack.prod.js 

##### Run The Code In Development Mode Using npm run build-dev
##### Run The Code In Production Mode Using npm run build-prod

