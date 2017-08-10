# redux-async-dispatch

How to use:

example for some ./connector.js
```js
import { asyncConnect } from 'redux-connect';
import asyncLoader from 'redux-async-dispatch';

const mapAsyncActions = [{
  promise: ({ store: { dispatch, getState } }) =>
    asyncLoader(dispatch, getState(), [
      [getSomeState, loadSomething], // first array parameter function with @return boolean or boolean
      loadOther(), // load without check state by loaded data
    ]),
}];

const mapStateToProps = () => ({});

export default asyncConnect(mapAsyncActions, mapStateToProps)(Component);
```
