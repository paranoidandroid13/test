import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Root from 'pages/Root.jsx'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Root} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
