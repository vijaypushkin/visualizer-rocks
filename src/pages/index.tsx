import React from 'react'
import HtmlHead from '@components/HtmlHead'
import { Button } from '@material-ui/core'
import { navigate } from '@reach/router'

const pageDetails = {
  title: 'Visualizer Rocks',
  description: 'Most powerful tools at your disposal to visualize your data',
  keywords: 'data,free,online,chart,charts,best,json,tools',
}

export default () => (
  <>
    <HtmlHead {...pageDetails} />
    <div style={{ textAlign: 'center' }}>
      <h1>
        Welcome <br /> to <br /> Visualizer Rocks
      </h1>

      <Button
        variant={'contained'}
        color={'primary'}
        onClick={() => navigate('/tools/json-viewer')}
      >
        JSON Viewer
      </Button>
    </div>
  </>
)
