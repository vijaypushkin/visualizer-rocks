import React, { useCallback, useState } from 'react'
import {
  Badge,
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { TreeItem, TreeView } from '@material-ui/lab'
import { ChevronRight, Edit, ExpandMore, FileCopy } from '@material-ui/icons'
import { blue, cyan, green, grey, red } from '@material-ui/core/colors'

type TRenderNode<D = unknown> = (
  data: D,
  level: number,
  id: string,
  handleEditClick: (data: unknown, path: string) => void,
  label?: string | number,
  shade?: 'black' | 'grey',
) => React.ReactChild

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    treeView: {
      '& .MuiTreeItem-root': {
        margin: theme.spacing(0.5, 0),
      },

      '& .MuiTreeItem-group': {
        borderLeft: `1px dotted ${grey['400']}`,
        marginLeft: theme.spacing(0.75),
        paddingLeft: theme.spacing(1.5),
      },

      '& .MuiBadge-badge': {
        top: theme.spacing(1.5),
        right: theme.spacing(-1.5),
        color: theme.palette.grey[50],
        background: theme.palette.grey[900],
      },

      '& .leaf-node': {
        display: 'flex',

        '& .icons-root': {
          display: 'flex',
          marginLeft: theme.spacing(1),
          opacity: 0,
          transition: 'opacity 100ms ease-in 100ms',
        },
        '&:hover .icons-root': {
          opacity: 1,
        },

        '& .MuiTypography-body1': {
          fontFamily: 'monospace',
        },
      },

      '& .MuiIconButton-root': {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },

      '& .MuiSvgIcon-root': {
        width: theme.spacing(2),
        height: theme.spacing(2),
      },

      '& .MuiTypography-root.string': {
        color: green[800],
      },

      '& .MuiTypography-root.boolean': {
        color: red[800],
      },

      '& .MuiTypography-root.number': {
        color: blue[800],
      },

      '& .MuiTypography-root.null': {
        color: cyan[800],
        fontWeight: theme.typography.fontWeightBold,
      },

      '& .MuiTypography-root.black': {
        color: grey[900],
      },

      '& .MuiTypography-root.grey': {
        color: grey[600],
      },
    },
  }),
)

const JSONViewerComp: React.FC<{ data: unknown }> = ({ data }) => {
  const classes = useStyles()
  const [edit, toggleEdit] = useState(false)
  const [editData, setEditData] = useState<any>('')
  const [editPath, setEditPath] = useState<string>('')

  const handleEditClick = useCallback((data: unknown, path: string) => {
    console.log(data, path)
    toggleEdit(true)

    let jsonStr = JSON.stringify(data, null, 2)
    if (/^".*"$/.test(jsonStr)) {
      jsonStr = jsonStr.slice(1, -1)
    }
    setEditData(jsonStr)
    setEditPath(path)
  }, [])

  const handleCancelClick = useCallback(() => {
    setEditData('')
    setEditPath('')
    toggleEdit(false)
  }, [editData, editPath])

  const handleSaveClick = useCallback(() => {
    console.log(editData, editPath)
    handleCancelClick()
  }, [editData, editPath])

  if (data === null) {
    return (
      <Paper className={classes.root}>
        <Typography variant={'caption'}>No Data</Typography>
      </Paper>
    )
  }

  return (
    <>
      <Paper className={classes.root}>
        <TreeView
          className={classes.treeView}
          defaultCollapseIcon={<ExpandMore />}
          defaultExpandIcon={<ChevronRight />}
        >
          {renderData(data, 0, '0', handleEditClick, null, 'grey')}
        </TreeView>
      </Paper>
      {edit && (
        <Dialog
          open={edit}
          onClose={() => toggleEdit(false)}
          fullWidth={true}
          maxWidth={'lg'}
        >
          <DialogTitle title={'Edit'} />
          <DialogContent>
            {editPath}
            <TextField
              autoFocus
              margin={'dense'}
              id={'name'}
              type={'text'}
              variant={'outlined'}
              multiline={true}
              rows={6}
              value={editData}
              onChange={ev => setEditData(ev.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelClick}>Cancel</Button>
            <Button
              color={'primary'}
              variant={'contained'}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

const renderData: TRenderNode = (
  data,
  level,
  id,
  handleEditClick,
  label,
  shade = 'grey',
) => {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return renderArray(
        data,
        level,
        id,

        handleEditClick,
        label,
        shade,
      )
    } else if (data !== null) {
      return renderObject(
        data,
        level,
        id,

        handleEditClick,
        label,
        shade,
      )
    }
  }

  const dataType = data === null ? 'null' : typeof data

  return (
    <TreeItem
      key={id}
      nodeId={id}
      label={
        <div className={'leaf-node'}>
          <Typography className={shade}>{label}:&nbsp;</Typography>
          <Typography variant={'body1'} className={dataType}>
            {dataType === 'string' ? `"${data}"` : `${data}`}
          </Typography>
          <div className={'icons-root'}>
            <IconButton
              aria-label={'copy'}
              onClick={ev => {
                ev.preventDefault()
                copyToClipboard(data)
              }}
            >
              <FileCopy />
            </IconButton>
            <IconButton
              aria-label={'edit'}
              onClick={ev => {
                ev.preventDefault()
                handleEditClick(data, id)
              }}
            >
              <Edit />
            </IconButton>
          </div>
        </div>
      }
    />
  )
}

const renderArray: TRenderNode<unknown[]> = (
  arrayData,
  level,
  id,

  handleEditClick,
  label,
  shade = 'grey',
) => {
  return (
    <TreeItem
      key={id}
      nodeId={id}
      className={'array-object-tree'}
      label={
        <div className={'leaf-node'}>
          <Typography className={shade}>{label ?? 'array'}:</Typography>
          &nbsp;
          <Badge badgeContent={arrayData.length}>
            <strong>{'[ ]'}</strong>
          </Badge>
          &emsp; &ensp;
          <div className={'icons-root'}>
            <IconButton
              aria-label={'copy'}
              onClick={ev => {
                ev.preventDefault()
                copyToClipboard(arrayData)
              }}
            >
              <FileCopy />
            </IconButton>
            <IconButton
              aria-label={'edit'}
              onClick={ev => {
                ev.preventDefault()
                handleEditClick(arrayData, id)
              }}
            >
              <Edit />
            </IconButton>
          </div>
        </div>
      }
    >
      {arrayData.map((datum, i) =>
        renderData(datum, level + 1, `${id}.${i}`, handleEditClick, i, 'grey'),
      )}
    </TreeItem>
  )
}

const renderObject: TRenderNode = (
  objectData,
  level,
  id,
  handleEditClick,
  label,
  shade = 'grey',
) => {
  return (
    <TreeItem
      key={id}
      nodeId={id}
      className={'array-object-tree'}
      label={
        <div className={'leaf-node'}>
          <Typography className={shade}>{label ?? 'object'}:</Typography>
          &nbsp;
          <Badge badgeContent={Object.keys(objectData).length}>
            <strong>{'{ }'}</strong>
          </Badge>
          &emsp; &ensp;
          <div className={'icons-root'}>
            <IconButton
              aria-label={'copy'}
              onClick={ev => {
                ev.preventDefault()
                copyToClipboard(objectData)
              }}
            >
              <FileCopy />
            </IconButton>
            <IconButton
              aria-label={'edit'}
              onClick={ev => {
                ev.preventDefault()
                handleEditClick(objectData, id)
              }}
            >
              <Edit />
            </IconButton>
          </div>
        </div>
      }
    >
      {Object.entries(objectData).map(([key, value], i) =>
        renderData(
          value,
          level + 1,
          `${id}.${i}`,
          handleEditClick,
          key,
          'black',
        ),
      )}
    </TreeItem>
  )
}

const copyToClipboard = (data: unknown) => {
  const container = document.createElement('textarea')
  container.innerHTML = JSON.stringify(data, null, 2)

  document.body.appendChild(container)
  container.select()
  document.execCommand('copy')

  document.body.removeChild(container)
}

export default JSONViewerComp
