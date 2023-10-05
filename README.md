# Getting Started

## Environment

Project uses Node version 16.16.0.\
You can check your node version by running following command.

### `node -v`

## Installing Dependencies

In the project directory, you can run:

### `npm i`

After installing dependencies, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner.\
Tests are not available for now, you need to add one as you want.\
Jest or Enzyme will be welcomed.

### `npm run build`

Builds the app for production to the `build` folder.\

## Mockup Backend

[OMDb API](https://www.omdbapi.com/) is used to mock movie data APIs.

# Architecture

## Design pattern

The project follows Layered Architecture, which separates service and implementation layer.\
It is widely used to separate concerns, increase modifiability and code reusability.

## Pitfalls

The OMDb endpoint response is not consistent, sometimes returning string data instead of object.\
Thus, some sanitization methods used for some cases.

## Further implementation

There are some ToDos here:

- Test should be added
- Mobile version UI design should be provided for better view!
- Css methodology not used, it would be beneficial for future development
- Regarding SEO and OG compatability, we can easily convert this into NextJS
