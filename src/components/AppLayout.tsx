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
  IconButton,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { Link } from '@reach/router'
import {
  Apps,
  Book,
  Home,
  Info,
  PieChart,
  Menu,
  DataUsage,
  CompareArrows,
} from '@material-ui/icons'
import { useLocation } from '@reach/router'

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
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      width: `calc(100vw - ${drawerWidth}px)`,
      [theme.breakpoints.down('sm')]: {
        width: `100vw`,
      },
    },

    fullContent: {
      width: `100vw`,
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
    name: 'Data',
    path: '/data',
    Icon: DataUsage,
  },
  {
    name: 'Tools',
    path: '/tools',
    Icon: CompareArrows,
  },
  {
    name: 'Charts',
    path: '/charts',
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
  const location = useLocation()

  const theme = useTheme()
  const isSmViewpoint = useMediaQuery<Theme>(theme.breakpoints.down('sm'))

  const [mobileDrawerOpen, toggleMobileDrawer] = useState(false)
  const [desktopDrawerOpen, toggleDesktopDrawer] = useState(true)

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
            <ListItem button={true} selected={location.pathname === item.path}>
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
    typeof window !== 'undefined' ? () => window.document.body : undefined

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position={'sticky'}>
        <Toolbar>
          <IconButton
            color={'inherit'}
            aria-label={'open drawer'}
            edge={'start'}
            onClick={() =>
              isSmViewpoint
                ? toggleMobileDrawer(true)
                : toggleDesktopDrawer(!desktopDrawerOpen)
            }
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant={'h6'}>Visualizer Rocks</Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.body}>
        {isSmViewpoint ? (
          <nav>
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
          </nav>
        ) : (
          <nav className={desktopDrawerOpen && classes.drawer}>
            <Drawer
              variant={'persistent'}
              open={desktopDrawerOpen}
              classes={{ paper: classes.drawerPaper }}
            >
              {drawer}
            </Drawer>
          </nav>
        )}

        <main
          className={
            isSmViewpoint || !desktopDrawerOpen
              ? classes.fullContent
              : classes.content
          }
        >
          {props.children}
        </main>
      </div>
    </div>
  )
}

export default AppLayout
