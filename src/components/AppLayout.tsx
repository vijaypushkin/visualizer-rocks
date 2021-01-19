import React, { useState } from 'react'
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
  ListItemIcon,
  Hidden,
  IconButton,
} from '@material-ui/core'
import { Link } from '@reach/router'
import { Apps, Book, Home, Info, PieChart, Menu } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    body: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      padding: theme.spacing(3),
      width: `calc(100vw - ${drawerWidth}px)`,
    },
  }),
)

const MENU_ITEMS = [
  {
    name: 'Home',
    path: '/',
    Icon: Home,
  },
  {
    name: 'Blog',
    path: '/blog',
    Icon: Book,
  },
  {
    name: 'App',
    path: '/app',
    Icon: Apps,
  },
  {
    name: 'Tools',
    path: '/tools',
    Icon: PieChart,
  },
  {
    name: 'About',
    path: '/about',
    Icon: Info,
  },
]

const AppLayout: React.FC = props => {
  const classes = useStyles()
  const [mobileDrawerOpen, toggleMobileDrawer] = useState(false)

  const drawer = (
    <>
      <Toolbar>
        {mobileDrawerOpen && (
          <ListItem>
            <ListItemText
              primary={<Typography variant={'h6'}>Visualizer Rocks</Typography>}
            />
          </ListItem>
        )}
      </Toolbar>
      <div className={classes.drawerContainer}>
        {MENU_ITEMS.map(({ Icon, ...item }) => (
          <Link key={item.path} to={item.path}>
            <ListItem button={true}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    </>
  )

  const container =
    window !== undefined ? () => window.document.body : undefined

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={'sticky'}>
        <Toolbar>
          <IconButton
            color={'inherit'}
            aria-label={'open drawer'}
            edge={'start'}
            onClick={() => toggleMobileDrawer(true)}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant={'h6'}>Visualizer Rocks</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.body}>
        <nav className={classes.drawer}>
          <Hidden smUp={true} implementation={'css'}>
            <Drawer
              variant={'temporary'}
              open={mobileDrawerOpen}
              container={container}
              onClose={() => toggleMobileDrawer(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

          <Hidden xsDown={true} implementation={'css'}>
            <Drawer
              variant={'permanent'}
              open={true}
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>{props.children}</main>
      </div>
    </div>
  )
}

export default AppLayout
