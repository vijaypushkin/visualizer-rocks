import React, { useState } from 'react'
import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import JSONViewerData from './json-viewer-data'
import JSONViewerComp from './json-viewer-comp'
import HtmlHead from '@components/HtmlHead'

const pageDetails = {
  title: 'Modern JSON Viewer',
  description:
    'Best JSON Viewer to view and manipulate your JSON in Modern Design',
  keywords:
    'json,viewer,editor,online,charts,best,modern,material,design,tools',
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',

      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      <HtmlHead {...pageDetails} />
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant={'h5'}>JSON Viewer</Typography>

          <Button color={'primary'} variant={'contained'}>
            Data
          </Button>
        </div>

        <JSONViewerData
          dataOpen={dataOpen}
          onAccordionChange={handleAccordionChange}
          onSave={handleDataSave}
        />

        <JSONViewerComp data={data} />
      </div>
    </>
  )
}
