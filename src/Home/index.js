import React from 'react'
import {asyncComponent} from 'react-async-component'

const AsyncHomePage = asyncComponent({
  resolve: () => System.import('./src/HomePage'),
  LoadingComponent: () => <div>Loading</div>,
  ErrorComponent: () => <div>Error</div>
})

export default AsyncHomePage
