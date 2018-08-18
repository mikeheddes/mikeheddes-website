import firebase from 'firebase/app';
// Load the Firebase database module.
// Here you should load all modules of Firebase that you need.
import 'firebase/database';
import { API_REQUEST } from 'actions/api';

// const baseURL = process.env.API_URL || '/api/v2/';

const config = {
  apiKey: 'AIzaSyB7n7blpVvHfWMyFINbmkVOmknMYGpo4eQ',
  authDomain: 'project-1236391238174251673.firebaseapp.com',
  databaseURL: 'https://project-1236391238174251673.firebaseio.com',
  projectId: 'project-1236391238174251673',
  storageBucket: 'project-1236391238174251673.appspot.com',
  messagingSenderId: '1046978075137',
};
firebase.initializeApp(config);

export default ({ dispatch }) => next => action => {
  if (action.type === API_REQUEST) {
    const {
      contentType,
      // method,
      id,
      // query,
      onSuccess,
      onError,
      // ...settings
    } = action.meta;
    // const body = action.payload;

    let url = `/${contentType}`;
    url += id ? `/${id}` : '';
    // if (query && typeof query === 'object') {
    //   Object.keys(query).forEach(key => {
    //     url += `${key}=${query[key]}&`;
    //   });
    // }

    firebase
      .database()
      .ref(url)
      .once('value')
      .then(data => dispatch({ type: onSuccess, payload: data.val() }))
      .catch(error => dispatch({ type: onError, payload: { ...error, id } }));
  }
  return next(action);
};
