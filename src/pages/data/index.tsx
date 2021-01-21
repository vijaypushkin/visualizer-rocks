import React, { useState } from 'react'
import { createStyles, makeStyles, Paper } from '@material-ui/core'
import Spreadsheet, { createEmptyMatrix } from 'react-spreadsheet'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      maxHeight: `calc(100vh - ${theme.spacing(10)}px)`,
      overflow: 'auto',

      // [theme.breakpoints.down('sm')]: {
      //   maxHeight: `calc(100vh - ${theme.spacing(9)}px)`,
      // },
    },
  }),
)

const initialData = createEmptyMatrix(50, 50)

export default () => {
  const classes = useStyles(initialData)
  const [data, setData] = useState(initialData)

  return (
    <Paper className={classes.root}>
      <Spreadsheet
        data={data}
        onChange={newData => setData(newData)}
        onActivate={ev => console.log(ev)}
        onSelect={ev => console.log(ev)}
      />
    </Paper>
  )
}
