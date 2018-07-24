import { createStore, combineReducers } from 'redux';

import listReducer from './reducers/list.reducer';

export default function () {

  const rootReducer = combineReducers({
    lists: listReducer
  })

  const store = createStore(
    rootReducer,
    { lists: [] },
    window.devToolsExtension && window.devToolsExtension()
  );

  return store;
}