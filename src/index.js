import React from 'react'
import redux from 'redux-export'
import createHashHistory from 'history/createHashHistory'
import {Provider} from 'react-redux'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import Routes from './routes'

const App = () => {
  const history = createHashHistory()
  const flowRouter = {reducer: routerReducer, middleware: routerMiddleware(history)}
  const store = redux([flowRouter])

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
