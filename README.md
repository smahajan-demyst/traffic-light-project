# How to run traffic-light app locally:

* Clone the repo locally into your PC either using SSH or HTTPS
* Navigate to the directory where the project is cloned and run the following terminal commands to install the required dependencies.

## Terminal commands:

In the project directory, you can run:

### `npm install -g yarn`

The command installs Yarn globally on your system using npm (optional if yarn is already not installed).

### `yarn install`

It will save all installed packages as dependencies by default. It will create a node modules folder containing all the third-party libraries and dependencies.

### `yarn add @testing-library/dom`

Installs specific dependencies for running unit tests.

### `yarn start`

This command will help to run the react app locally. It starts the app main process.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
