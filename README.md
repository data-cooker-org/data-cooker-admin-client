# Data-Cooker Admin Client

## Setup  development environment from boilerplate

```sh
# clone repository
git clone https://github.com/data-cooker-org/data-cooker-admin-client.git admin-client

# cd into project root
cd admin-client

# install dependencies
yarn

# start application
yarn start
```

## Setup development environment from scratch

yarn create react-app admin-client
cd admin-client/
yarn add react-admin
touch README.md

package.json

```
{
  "name": "data-cooker-admin-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "graphql": "^15.4.0",
    "jwt-decode": "^3.0.0",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-admin": "^3.10.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.0",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```


git init
yarn start
