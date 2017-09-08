const asyncLoader = (dispatch, state, loaders) => {

  const promises = [];

  loaders.forEach((loader) => {

    if (loader instanceof Array) {

      const [get, load] = loader;

      if ((get instanceof Function && !get(state)) || !get) {

        if (load instanceof Promise) {

          promises.push(load);

        } else if (load instanceof Function) {

          promises.push(dispatch(load()));

        } else {

          promises.push(dispatch(load));

        }

      }

    } else if (loader instanceof Promise) {

      promises.push(loader);

    } else if (loader instanceof Function) {

      promises.push(dispatch(loader()));

    } else {

      promises.push(dispatch(loader));

    }

  });

  return Promise.all(promises.map(promise => promise.catch(e => e)));

};

export default asyncLoader;
