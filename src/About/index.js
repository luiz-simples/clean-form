import React from 'react'
import {asyncComponent} from 'react-async-component'

const AsyncAboutPage = asyncComponent({
  resolve: () => System.import('./src/AboutPage'),
  LoadingComponent: () => <div>Loading</div>,
  ErrorComponent: () => <div>Error</div>
})

export default AsyncAboutPage
