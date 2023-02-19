import { useAppTheme } from 'hooks/useAppTheme'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home/Home'
import BlockDetails from 'pages/BlockDetails/BlockDetails'

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
              <Route path={'/'} element={<Home />} />
              <Route path={'/:blockChain/blocks/:blockHash'} element={<BlockDetails />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
