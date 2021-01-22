import { createStyles, makeStyles } from '@material-ui/core'

const useChartPageStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1),
    },
    content: {
      margin: theme.spacing(1),
      height: `calc(100vh - ${theme.spacing(20)}px)`,
    },
  }),
)

export default useChartPageStyles
