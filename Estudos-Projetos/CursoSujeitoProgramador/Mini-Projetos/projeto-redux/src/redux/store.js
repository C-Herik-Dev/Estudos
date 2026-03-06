import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
// redux saga
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from "./sagas";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDeaultMiddleware) => getDeaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)