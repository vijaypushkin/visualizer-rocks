import React from 'react'
import JSONViewerData from './json-viewer-data'
import { createStyles, makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
)

export default () => {
  const classes = useStyles()
  const [dataOpen, setDataOpen] = React.useState(false)

  const handleDataOpenClick = () => {
    setDataOpen(true)
  }
  const handleDataCloseClick = () => {
    setDataOpen(false)
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant={'h5'}>JSON Viewer</Typography>

          <Button
            color={'primary'}
            variant={'contained'}
            onClick={handleDataOpenClick}
          >
            Data
          </Button>
        </div>
      </div>

      <JSONViewerData
        dataOpen={dataOpen}
        handleDataOpenClick={handleDataOpenClick}
        handleDataCloseClick={handleDataCloseClick}
      />
    </>
  )
}
