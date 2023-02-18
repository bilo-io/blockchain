import { useAppTheme } from 'hooks/useAppTheme'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import routes, { type IRoute } from './pages/routes'
import './App.scss'
import Explore from './pages/Explore/Explore'
import Block from 'pages/Block/Block'
import { Home } from './pages/Home/Home'

import { Context } from 'store/context'

const App = (): React.ReactElement => {
  const theme = useAppTheme()

  return (
    <Context.Provider value={{ theme }}>
      <div className="App">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100vh'
        }}>
          <Router>
            <Routes>
              {/* {routes.map((route: IRoute) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))
          } */}
              <Route path={'/'} element={<Home />} />
              <Route path={'/explore'} element={<Explore />} />
              <Route path={'/blocks/:blockHash'} element={<Block />} />

            </Routes>
          </Router>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
