<p align="center">
  <img width="206" alt="tramalogo" src="https://cloud.githubusercontent.com/assets/3068563/20716002/0f94fa58-b638-11e6-82a5-59da606d14bf.png"><br><br>
  <a href="https://github.com/diegohaz/arc"><img src="https://img.shields.io/badge/generated%20with-arc-blue.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/tramaLabs/web"><img src="https://img.shields.io/travis/tramaLabs/web/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/tramaLabs/web/branch/master"><img src="https://img.shields.io/codecov/c/github/tramaLabs/web/master.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

## Download

```sh
$ git clone https://github.com/tramaLabs/web trama-web
$ cd trama-web
$ npm install # or yarn
```

## Usage

- [Run](#run)
- [Deploy](#deploy)
- [Source code](#source-code)
- [Components](#components)
- [Containers](#containers)
- [Store](#store)
- [Universal](#universal)

### Run

Once you have installed the dependencies, you can use `npm run dev` to run a development server.

### Deploy

Use `npm run build` to transpile the code into the `dist` folder. Then, you can deploy it everywhere.

Example on [Heroku](https://heroku.com/) using [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line):

```sh
# start a new local git repository
git init

# create a new heroku app
heroku apps:create my-new-app

# add heroku remote reference to the local repository
heroku git:remote --app my-new-app

# commit and push the files
git add -A
git commit -m "Initial commit"
git push heroku master

# open the deployed app in the browser
heroku open
```

The second time you deploy, you just need to:

```sh
git add -A
git commit -m "Update code"
git push heroku master
```

### Source code

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

### Components

This project leverages the Atomic Design methodology to create a scalable and easy to maintain component folder structure. See [why](https://github.com/diegohaz/arc#why).

If you are creating a component and you don't know if it is an atom, a molecule or an organism, don't worry so much. It will be easy to move it later.

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/). Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.

### Containers

This project uses a very straight approach of Redux: all components should be as [pure](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ly1b33jnz) as possible and should be placed in the `components` folder.

If, for some reason, you need to connect a component to the store, just create a container with the same name, import the pure component and connect it. Thus having a nice separation of concerns. **Do not add any extra styles or another presentational logic on containers**.

You can refer to [this thread](https://twitter.com/dan_abramov/status/668585589609005056) on Twitter:
<p align="center"><img alt="Dan Abramov Tweet" src="https://cloud.githubusercontent.com/assets/3068563/19958100/77ca1b68-a183-11e6-887e-a491dc783f43.png"></p>

Example:

**src/components/organisms/PostList**
```js
// just presentational logic
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Post } from 'components'

const PostList = ({ list, loading, ...props }) => {
  return (
    <div {...props}>
      {loading && <div>Loading</div>}
      {list.map((post, i) => <Post key={i} {...post} />)}
    </div>
  )
}

PostList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default PostList
```

**src/containers/PostList**
```js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postList, fromPost, fromStatus, POST_LIST } from 'store'

import { PostList } from 'components'

class PostListContainer extends Component {
  componentDidMount () {
    this.props.request()
  }

  render () {
    const { list, loading } = this.props
    return <PostList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromPost.getList(state),
  loading: fromStatus.isLoading(state, POST_LIST)
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(postList.request(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
```

**src/components/elsewhere**
```js
import { PostList } from 'containers'

<PostList limit={15} />
```

This approach makes it easier to transform any pure component into a container at any time.

### Store

Here lives all the state management of the app.

- `actions` are the messages dispatched throughout the application to perform state changes. [Learn more](http://redux.js.org/docs/basics/Actions.html);
- `reducer` listens to the actions and translates the state changes to the store. [Learn more](http://redux.js.org/docs/basics/Reducers.html);
- `selectors` are used by the application to get parts of the current state. [Learn more](http://redux.js.org/docs/recipes/ComputingDerivedData.html);
- `sagas` listen to the actions and are responsible for performing side effects, like data fetching, caching etc. [Learn more](https://github.com/yelouafi/redux-saga).

To add a new store, just create a new folder with a reducer and change the `store/index.js` file:
```js
import post from './post/reducer'
import status from './status/reducer'

const reducers = {
  routing,
  form,
  post,
  status
}
```

### Universal
```js
component &&
component[method] &&
promises.push(component[method]({ req, res, params, location, store }))
```

This code is present in `src/server.js` and it will call `Component.method()` for the requested Page container, where `method` is the name of the HTTP method used in the request (`get`, `post` etc.).

```js
import React, { Component } from 'react'
import submit from 'redux-form-submit'
import { postList } from 'store'

import { SamplePage } from 'components'
import { config } from './PostForm'

class SamplePageContainer extends Component {
  // called when POST /sampla-page
  static post ({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  // called when GET /sample-page
  static get ({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postList.request(15, resolve, reject))
    })
  }

  render () {
    return <SamplePage />
  }
}

export default SamplePageContainer
```

In order to make the forms work on the server side, this is combined with [redux-form](https://github.com/erikras/redux-form) and [redux-form-submit](https://github.com/diegohaz/redux-form-submit).

## License

The MIT License (MIT)

Copyright (c) 2016 [Trama](https://github.com/tramaLabs)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
