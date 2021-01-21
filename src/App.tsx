import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from '@containers/Dynamic'
import './app.css'
import { CssBaseline } from '@material-ui/core'
import AppLayout from '@components/AppLayout'

// Any routes that start with 'app' will be treated as non-static routes
addPrefetchExcludes(['app'])

function App() {
  return (
    <Root>
      <CssBaseline />
      <AppLayout>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="app" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </AppLayout>
    </Root>
  )
}

export default App
