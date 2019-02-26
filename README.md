# Haluka Application ♾️
> A lightweight batteries included Express.js Wrapper.

[![Node Version][node-image]][npm-url]
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]
[![Dependencies][dependencies]][david-dm]
[![License: MIT][license-image]][license-link]

[Haluka](https://haluka.jsaxe.com/) is a lightweight express.js setup for directly diving into project development.

<img src="https://i.imgur.com/oUzUUsC.png" width="250px" align="right" hspace="30px" vspace="100px">

## Getting Started

Getting started with Haluka is easy by using Haluka CLI tool. You can install Haluka CLI using:
```bash
$ npm install haluka-cli -g
```
Now, `haluka create` command can be used to scaffold a new project:
```bash
$ haluka create myproject
```
Then, install the dependencies:
```bash
$ cd myproject
$ npm install
```
Now, run the following command to fire up the server:
```bash
$ haluka serve
```
or,
```bash
$ npm run start
```

For the list of available scripts, run `npm run`.

## Routing and Controllers
By default, `app/routes.js` file is used for registering route pointers in Haluka setup. This file is documented so take your time to go through the documentation. Here, we move forward to adding new route pointer.
Following code can be used to add new route pointer:
```js
Route.point('/path', to('controller_file'))
```
Now, we need to create a new controller for this pointed route. By defautlt, `app/Controllers` directory is used for storing controller files.
Here, create a new file with the same name which was used while pointing in `app/routes.js` file.
Or,
You can use Haluka CLI to create a basic route controller by using following command:

```bash
$ haluka make:controller <controller_name>
```
Following is the basic structure of a route controller:
```js
/**
 * @name FooController
 */
'use strict'
const router = use('Router')

/**
 * GET /path/
 */
router.get('/', (req, res) => {
	res.send('Hello!')
})

module.exports = router
```
Yes, here it is, the actual route wrapping from express.js This may seem familier to you if you have worked with express.js before. So, from here on out, is all express.js. Visit [express.js docs on creating and routing with express router](https://expressjs.com/en/guide/routing.html)

You can start working on your application logic here. You can make use of `use` and `app` function for using the service providers in your applications. For more on service providers, see the list of available providers below. The global `use` and `app` function can even be used inside view files.
>   By default, it is assumed that active view engine used is `pug`. Use of `use` and `app` hasn't been tested on any other view engine.
## Digging Deeper

Since Haluka makes use of [Boxa](https://npmjs.com/package/boxa) IoC container, all the providers are registered into the container and can be used at anytime using `Haluka.use` or `Haluka.resolve` method.
If you are at a place where there is no access to Haluka instance, Haluka provide you with `use` and `app` global methods for accessing Haluka instance and service providers.
```js
var haluka = app() // returns active Haluka instance
var provider = app('provider_name') // returns service provider
var provider = use('provider_name') // returns service provider
```

### Available Providers
1. `Env` (provides environment service provider)
2. `Config` (provides config service provider)
3. `Session/SessionStore`  (provides session store function)
4. `Session/Middleware/StartSession` (provides session middleware function)
5. `Database` (provides database service provider)
6. `Auth` (provides auth service provider)
7. `Route` (provides route manager service provider)
8. `Router` (provides new instance of `express.Router()` instance)

For API documentation on all these service providers, check out Haluka docs on [Haluka Website](https://haluka.robinpanta.com/api/providers).

## Directory Structure
It may feel overwhelming at first glance, but trust me, it's just a plain express.js app with some delicious toppings in it.
### .env
Haluka provides you with environment configuration based on `dotenv` package. You can add or changes environment values in this file and this value can be accessed using `Env` provider by code:
```js
const env = use('Env')
env.get('KEY', 'FALLBACK_VALUE')
```

### hooks.js
This files allows you to hook in middleware or perform any other operation on express instance. Code in this file gets executed just after bootstrapping express and before firing up the server. This is the best place to put any global express middlewares that you need to use.
>   For Route based middlewares, you can use `router.use(middleware)` on controller file.
#### Apps
`apps` folder in the root directory is the folder that houses all of your application logic. `Controllers` folder houses all your route controllers and, `Model` folder houses your application models. You may create and use other folders as per your requirements.

#### Config
`config` folder contains all the pre-configured config files that are used by the application. You can freely change the config files as per your application's requirements. All the config files and their values are properly documented in their respective files so take your time to check that out.
Config values can be accessed using `Config` provider.
```js
const Config = use(`Env`)
Config.get('filename.key.subkey', 'fallback_value')
```

#### Public
`public` folder is used for the static route handling by express.js. Any file in this directory can be directly accessed by entering the url: `http://hostname/path`

#### Resources
`resources` folder contains your application's resources like static assets, views and other similar files. Inside this directory, contains `views` folder which is used as default views directory.

#### Storage
`storage` folder is like a warehouse for the application. You may use this folder as you see fit or may not even use it. Usually, it is a good idea to store logs, session files and other intermediate files in this folder.

## Author

Robin Panta (Hacktivistic) 😎  &nbsp; [GitHub](https://github.com/hacktivistic) | [Blog](https://robinpanta.com)

[node-image]: https://img.shields.io/node/v/haluka.svg?style=flat-square
[npm-image]: https://img.shields.io/npm/v/haluka.svg?style=flat-square
[npm-url]: https://npmjs.org/package/haluka
[travis-image]: https://travis-ci.org/jsaxe/haluka.svg?branch=master
[travis-url]: https://travis-ci.org/jsaxe/haluka
[coveralls-image]: https://coveralls.io/repos/github/jsaxe/haluka/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/jsaxe/haluka?branch=master
[dependencies]: https://david-dm.org/jsaxe/haluka/status.svg
[dev-dependencies]: https://david-dm.org/jsaxe/haluka/dev-status.svg
[david-dm]: https://david-dm.org/jsaxe/haluka
[david-dm-dev]: https://david-dm.org/jsaxe/haluka?type=dev
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-link]: https://opensource.org/licenses/MIT
