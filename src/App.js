import React from 'react';
import './styles.css';
import MissionForm from './components/MissionForm';
import { createStore, applyMiddleware } from 'redux';
import { missionsReducer as reducer } from './reducers/missionsReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MissionsList from './components/MissionsList';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Space Missions</h1>
        <MissionForm />
        <MissionsList />
      </div>
    </Provider>
  );
}
