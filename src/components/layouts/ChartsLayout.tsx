import React from 'react'
import { Paper, Toolbar, Typography } from '@material-ui/core'

import useChartPageStyles from '@hooks/styles/useChartPageStyles'

interface IChartsLayoutProps {
  title: string
}

const ChartsLayout: React.FC<IChartsLayoutProps> = props => {
  const classes = useChartPageStyles()
  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography variant={'h5'}>{props.title}</Typography>
      </Toolbar>

      <Paper className={classes.content} elevation={6}>
        {props.children}
      </Paper>
    </div>
  )
}

ChartsLayout.displayName = 'ChartsLayout'

export default ChartsLayout
