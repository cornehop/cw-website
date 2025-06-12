# Website for Carlos Wessels
> A simple website for Carlos Wessels, who works for Operation Mobilisation in Moldova.

> The site is no longer in use and this repo has been archived!

## Why React?

I could have made the website with Wordpress. That would be the easy way.
But I wanted to build an application using React from scratch. This project gave me that oppertunity. 

This is a React app using:
- Webpack
- react-router-dom
- react-helmet
- react-bootstrap
- react-icons
- i18next & react-i18next

## Run and publish the site
To run the project on your local machine just use the following command:
```bash
npm start
```
To build and publish the website you should build the webpack distribution
```bash
npx webpack -p
```
Then build the production code
```bash
npm run build -p
```
After we done this, there will be a build folder in the project folder.
The contents of this folder can be transfered to the server using (S)FTP.
