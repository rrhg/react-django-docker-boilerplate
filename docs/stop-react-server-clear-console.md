Form some reason discuss [here](https://github.com/facebook/create-react-app/issues/2495) create-react-app will not change this behavior of clearing the console when the development server start.

That behavior creates a problem in this boilerplate because if Django development server throws an error when starting, it could be cleared & make it harder to debbug problems.

This hack suggested in https://github.com/facebook/create-react-app/pull/6102/files, appears to work, at least for now.

sed -i 's+clearConsole();+\/\/clearConsole();+g' /frontend/node_modules/react-dev-utils/WebpackDevServerUtils.js
sed -i 's+clearConsole();+\/\/clearConsole();+g' /frontend/node_modules/react-scripts/scripts/start.js

It's done(for now) on react-django-docker-boilerplate/dev utility for 2 reasons:

  1- npm install is also run there (as oppose to Dockerfile) because we want node_modules folder to also be in the Bind Mount volumen mapping the host /frontend/ folder to the container /frontend/ folder. In development it can be helpful to install new dependencies without rebuilding the image everytime.

  2- Now we can edit the files in /node_module/ to stop react development server from clearing the console

For production, this is not required.  