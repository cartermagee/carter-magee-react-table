# Carter's React Table
## Exercise in sorting and searching table data using ReactJs with hooks and styled-components

### Instructions:
download or clone repo
navigate to root of  project in your terminal 
install dependencies: 
### yarn
start and run the app in development mode 
### yarn start
and then `yarn build` `cd build` and then `serve -s build` to serve if you want 
### OR
visit the hosted app on Zeit NOW [https://mersive-table.now.sh](https://mersive-table.now.sh)

## tech used: 
create-react-app
styled-components
ReactJs using functional components and hooks 


## Approach
Without a ton of time to work on this project (3 days, before and after work) I really had to manage my time well and plan accordingly. Day 1: plan out process, create wireframe for UI, establish directory archetecture, and create basic layout using styled components. Day 2: dynamically populate table based on whether the data comes from localstorage/external API, or data provided, implement sort functionality and add/adjust styles. Day 3: implement search functionality and display propmt for no search results, implement edit inline functionality, mega cleanup of styles and unused props and variables. 

## TODOS
1. Persist changed data in localstorage or firebase (didn't get to that but quick implementation).  
2. (Nice to have) implement mark.js or similar to highlight search criteria in real time. 
3. In case the app is tested with a massive dataset with differently shaped data, fix gotcha below and implement quicksort or merge-sort sorting algorithm for sort and search functionality.

### Gotchas
If you get the data for the table from and external API the shape of the data MUST be an array of objects where each object's keys must contain an `id` and all the values must be strings. If one of the values is some type of object the app will break.

# Enjoy!

**********************************************************************************************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
