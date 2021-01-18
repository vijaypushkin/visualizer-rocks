import React from 'react'
import {
  Badge,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { TreeItem, TreeView } from '@material-ui/lab'
import { ChevronRight, ExpandMore } from '@material-ui/icons'
import CustomTextIcon from '@components/icons/object'
import { blue, green, grey, red } from '@material-ui/core/colors'

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

      '& .MuiBadge-badge': {
        top: 13,
        right: -3,
        color: theme.palette.grey[100],
        background: theme.palette.grey[500],
      },

      '& .leaf-node': {
        display: 'flex',
      },

      '& .MuiTypography-root.string': {
        color: green[600],
      },

      '& .MuiTypography-root.boolean': {
        color: red[600],
      },

      '& .MuiTypography-root.number': {
        color: blue[600],
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
    }

    return renderObject(data, level, id, label, shade)
  }

  return (
    <TreeItem
      nodeId={id}
      label={
        <div className={'leaf-node'}>
          <Typography className={shade}>{label}:&nbsp;</Typography>
          <Typography variant={'body1'} className={typeof data}>
            {`${data}`}
          </Typography>
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
            <CustomTextIcon text={'[]'} />
          </Badge>
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
            <CustomTextIcon text={'{}'} fontSize={'small'} />
          </Badge>
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
