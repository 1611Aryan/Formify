import { lazy, Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./Pages/home"
import Signup from "./Pages/Signup"

const User = lazy(() => import("./Pages/User"))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={fallback}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/dashboard" exact>
              <User />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App

const fallback = () => {
  return <div></div>
}
