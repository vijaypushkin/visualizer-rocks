import React from 'react'
import {
  Badge,
  createStyles,
  IconButton,
  makeStyles,
  Paper,
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

  if (data === null) {
    return (
      <Paper className={classes.root}>
        <Typography variant={'caption'}>No Data</Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.root}>
      <TreeView
        className={classes.treeView}
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
      >
        {renderData(data, 0, '0', null)}
      </TreeView>
    </Paper>
  )
}

const renderData: TRenderNode = (data, level, id, label, shade = 'grey') => {
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return renderArray(data, level, id, label, shade)
    } else if (data !== null) {
      return renderObject(data, level, id, label, shade)
    }
  }

  const dataType = data === null ? 'null' : typeof data

  return (
    <TreeItem
      nodeId={id}
      label={
        <div className={'leaf-node'}>
          <Typography className={shade}>{label}:&nbsp;</Typography>
          <Typography variant={'body1'} className={dataType}>
            {dataType === 'string' ? `"${data}"` : `${data}`}
          </Typography>
          <div className={'icons-root'}>
            <IconButton aria-label={'copy'}>
              <FileCopy />
            </IconButton>
            <IconButton aria-label={'edit'}>
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
  label,
  shade = 'grey',
) => {
  return (
    <TreeItem
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
            <IconButton aria-label={'copy'}>
              <FileCopy />
            </IconButton>
            <IconButton aria-label={'edit'}>
              <Edit />
            </IconButton>
          </div>
        </div>
      }
    >
      {arrayData.map((datum, i) =>
        renderData(datum, level + 1, `${id}.${i}`, i, 'grey'),
      )}
    </TreeItem>
  )
}

const renderObject: TRenderNode = (
  objectData,
  level,
  id,
  label,
  shade = 'grey',
) => {
  return (
    <TreeItem
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
            <IconButton aria-label={'copy'}>
              <FileCopy />
            </IconButton>
            <IconButton aria-label={'edit'}>
              <Edit />
            </IconButton>
          </div>
        </div>
      }
    >
      {Object.entries(objectData).map(([key, value], i) =>
        renderData(value, level + 1, `${id}.${i}`, key, 'black'),
      )}
    </TreeItem>
  )
}

export default JSONViewerComp
