# Amazon Clone React application

This project is a React application that will connect to an Elixir/Phoenix API in Absinthe GraphQL https://github.com/hudsonbay/commerce-platform-api

See it in production: https://amazon-clone-react-rust.vercel.app/

It uses JWT authentication.

Global state is managed using the Context API from React.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start our React app for development
`docker-compose -f docker-compose.dev.yml up`

## Build production image
`docker-compose -f docker-compose.prod.yml build`

Make sure to have `nginx` installed, since it nginx us much more performance and control.

Some `nginx.conf` can look like this:
```
server {
  listen 80;

  location / {
    root /usr/share/nginx/html/;
    include /etc/nginx/mime.types;
    try_files $uri $uri/ /index.html;
  }
}
```

### Optimizing static assets
You can also add the following inside the `location` block to introduce caching for our static assets and javascript bundle.

You can refer this [guide](https://gist.github.com/philipstanislaus/654adafad91efb6de230845b5bdeae61) to dive deep into optimizing

```
# Cache static assets
location ~* \.(?:jpg|jpeg|gif|png|ico|svg)$ {
  expires 7d;
  add_header Cache-Control "public";
}

# Cache css and js bundle
location ~* \.(?:css|js)$ {
  add_header Cache-Control "no-cache, public, must-revalidate, proxy-revalidate";
}
```


## Start our production container on port 80 with the name `amazon-clone-react-app`
`docker run -p 80:80 --name amazon-clone-react-app amazone-clone-prod`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
