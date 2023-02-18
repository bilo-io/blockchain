import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import routes, { type IRoute } from './pages/routes'
import './App.css'
import Explore from './pages/Explore/Explore'
import { Home } from './pages/Home/Home'

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* {routes.map((route: IRoute) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))
          } */}
          <Route path={'/'} element={<Home />} />
          <Route path={'/explore'} element={<Explore />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
