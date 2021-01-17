import React, { useState } from 'react'
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import JSONViewerData from './json-viewer-data'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
    },
    textField: {
      width: '100%',
    },
  }),
)

export default () => {
  const classes = useStyles()
  const [dataOpen, setDataOpen] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)

  const handleAccordionChange = () => {
    setDataOpen(prev => !prev)
  }

  const handleDataSave = (data: unknown) => {
    setData(data)
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant={'h5'}>JSON Viewer</Typography>

          <Button color={'primary'} variant={'contained'}>
            Data
          </Button>
        </div>
      </div>

      <JSONViewerData
        dataOpen={dataOpen}
        onAccordionChange={handleAccordionChange}
        onSave={handleDataSave}
      />

      <p>{JSON.stringify(data)}</p>
    </>
  )
}
