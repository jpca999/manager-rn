import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    var config = {
        apiKey: "AIzaSyCtg_E7mrkRJv-_UslRv7i-bYT021twedc",
        authDomain: "auth-a0248.firebaseapp.com",
        databaseURL: "https://auth-a0248.firebaseio.com",
        projectId: "auth-a0248",
        storageBucket: "auth-a0248.appspot.com",
        messagingSenderId: "547783113798"
      };
      firebase.initializeApp(config);
  }


  render(){
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}
}

export default App;
