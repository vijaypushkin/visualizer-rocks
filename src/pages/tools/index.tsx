import React from 'react'
import {
  makeStyles,
  Card,
  CardContent,
  createStyles,
  CardActionArea,
  Typography,
} from '@material-ui/core'
import { navigate } from '@reach/router'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      width: 300,
    },
    card: {
      width: 345,
      height: 140,
    },
    content: {
      width: '100%',
      height: '100%',
    },
  }),
)

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea
          className={classes.content}
          onClick={() => navigate('/tools/json-viewer')}
        >
          <CardContent>
            <Typography>JSON Viewer</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
