import React from 'react'
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Drawer,
  ListItem,
  ListItemText,
  Theme,
  createStyles,
} from '@material-ui/core'
import { navigate } from '@reach/router'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: `${drawerWidth}px auto`,
      gridTemplateRows: `${theme.spacing(8)}px auto`,
      gridTemplateAreas: `
        "appBar appBar"
        "sideBar content"
      `,
    },
    appBar: {
      gridArea: 'appBar',
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      gridArea: 'sideBar',
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      gridArea: 'content',
      padding: theme.spacing(3),
    },
  }),
)

const AppLayout: React.FC = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={'sticky'}>
        <Toolbar>
          <Typography variant={'h6'}>Visualizer Rocks</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={'permanent'}
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <ListItem button={true} onClick={() => navigate('/')}>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button={true} onClick={() => navigate('/blog')}>
            <ListItemText primary={'Blog'} />
          </ListItem>
          <ListItem button={true} onClick={() => navigate('/app')}>
            <ListItemText primary={'App'} />
          </ListItem>
          <ListItem button={true} onClick={() => navigate('/about')}>
            <ListItemText primary={'About'} />
          </ListItem>
        </div>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  )
}

export default AppLayout
