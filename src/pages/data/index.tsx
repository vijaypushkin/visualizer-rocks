import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
  }),
)

export default () => {
  const classes = useStyles()
  return <div className={classes.root}>SpreadSheet</div>
}
