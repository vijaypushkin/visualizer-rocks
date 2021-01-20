import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from '@containers/Dynamic'
import './app.css'

// * Lazy Loading
const AppLayout = React.lazy(() => import('@components/AppLayout'))
const CssBaseline = React.lazy(() => import('@material-ui/core/CssBaseline'))

// Any routes that start with 'app' will be treated as non-static routes
addPrefetchExcludes(['app'])

function App() {
  const content = (
    <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
        <Dynamic path="app" />
        <Routes path="*" />
      </Router>
    </React.Suspense>
  )

  return (
    <Root>
      <React.Suspense fallback={content}>
        <CssBaseline />
        <AppLayout>{content}</AppLayout>
      </React.Suspense>
    </Root>
  )
}

export default App
