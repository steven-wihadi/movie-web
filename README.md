# M cinema - web

### Description:
**M cinema** is a web to search a movies. There's a couple of features like:

- `Search a movies`: you can search a movie with search input that located in header, and the default value of search input is always 'army'. The search feature come with debounce function, that's allow execute search when you stop typing in search input for 1.5s.

- `Add to Favorite`: after you search a movie, you can hit a star icon to add the movie to 'My Favorite' page, and then you can also do unfavorite with hit the star icon in the same movie.

- `My Favorite`: you can see all favorite movie in this page, you can access it by clicked 'My Favorite' tab inside the header. In this page also you can do unfavorite with hit the star icon.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# FILE STRUCTURE (inside src)

```
├── @core
│    ├── entity         -> place of all business interface and type model
│    ├── interactor    	-> place of all usecase interactor
│    └── usecase       	-> place of all usecase abstract class for each page
├── screen              -> place of all view/page
├── services            -> place of all services, that relate directly to plugin file
├── plugins             -> place of all file that directly call trird-party library.
```

# Branching name

- `feat/<feature-name>`: use this format to commit new feature
- `fix/<feature-name>`: use this format if you're changes purpose to fix something 
- `revamp/<feature-name>`: use this format if you're changes contain major changes, like change whole of UI interface, data flow, etc.
