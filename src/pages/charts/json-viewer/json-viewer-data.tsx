import React from 'react'
import {
  createStyles,
  makeStyles,
  Slide,
  Theme,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import Typography from '@material-ui/core/Typography'
import { Close } from '@material-ui/icons'

interface IJSONViewerDataProps {
  dataOpen: boolean
  handleDataOpenClick: () => void
  handleDataCloseClick: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const JSONViewerData: React.FC<IJSONViewerDataProps> = props => {
  const classes = useStyles()

  return (
    <Dialog
      fullScreen
      open={props.dataOpen}
      TransitionComponent={Transition}
      onClose={props.handleDataCloseClick}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={props.handleDataCloseClick}
            edge="start"
            color="inherit"
            aria-label="close"
          >
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            JSON Viewer Data
          </Typography>
          <Button
            autoFocus
            color="inherit"
            onClick={props.handleDataCloseClick}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>
    </Dialog>
  )
}

export default JSONViewerData
