import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './usersReducer';
import usersWatcher from './usersSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(usersWatcher); // saga চালু করা

export default store;