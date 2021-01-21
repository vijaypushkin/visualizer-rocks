import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Link } from '@reach/router'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(1),
      flexWrap: 'wrap',
    },
    card: {
      margin: theme.spacing(1),
      width: 345,
      height: 140,
    },
    content: {
      width: '100%',
      height: '100%',
    },
  }),
)

const charts = [
  { title: 'Area Bump', path: '/charts/area-bump' },
  { title: 'Bar Charts', path: '/charts/bar-chart' },
  { title: 'Bubble Charts', path: '/charts/bubble-chart' },
  { title: 'Bump', path: '/charts/bump' },
  { title: 'Geo Map', path: '/charts/geo-map' },
  { title: 'Line Charts', path: '/charts/line-chart' },
]

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {charts.map(chart => (
        <Card className={classes.card} key={chart.path}>
          <Link to={chart.path}>
            <CardActionArea className={classes.content}>
              <CardContent>
                <Typography>{chart.title}</Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ))}
    </div>
  )
}
