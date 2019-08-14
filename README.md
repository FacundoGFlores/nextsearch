# Next Search

Simple app to search for github users using [Graphql Api v4](https://developer.github.com/v4/)

You can go to https://next-search.herokuapp.com/ and play with it.

![](movie.gif)

## About the code

Download the example [or clone the repo](https://github.com/FacundoGFlores/nextsearch):

```sh
git clone https://github.com/FacundoGFlores/nextsearch
cd nextsearch
```

Install it and run:

```sh
npm install
npm run dev
```

## Running tests

```sh
npm test
```

## E2E tests

```sh
npm run cy:run
```

## About bi-directional pagination

To solve bi-directional pagination I based the state management on [Bi-directional pagination using GraphQL & Relay](https://engineering.dubsmash.com/bi-directional-pagination-using-graphql-relay-b523c919c96). Indeed apollo has some performance improvements because of caching.
