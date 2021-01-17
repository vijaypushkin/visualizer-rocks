import React, { useState } from 'react'
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { Close, Edit } from '@material-ui/icons'

interface IJSONViewerDataProps {
  dataOpen: boolean
  onAccordionChange: () => void
  onSave: (data: unknown) => void
}

const useStyles = makeStyles({
  root: {
    '&::before': {
      top: 0,
      position: 'inherit',
    },

    '&.Mui-expanded': {
      margin: 0,
    },
  },
  textField: {
    width: '100%',
  },
})

const JSONViewerData: React.FC<IJSONViewerDataProps> = props => {
  const classes = useStyles()

  const [error, setError] = useState<string>('')
  const [data, setData] = useState<string>('')

  const sanitizeData = () => {
    try {
      const sanitizedData = JSON.parse(data, null)
      props.onSave(sanitizedData)
      props.onAccordionChange()
    } catch (err) {
      setError(`${err}`)
      console.log(err, data)
    }
  }

  return (
    <Accordion
      className={classes.root}
      expanded={props.dataOpen}
      onChange={props.onAccordionChange}
    >
      <AccordionSummary
        expandIcon={props.dataOpen ? <Close /> : <Edit />}
        aria-controls="set-data-content"
        id="set-data-header"
      >
        <Typography>Data</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          className={classes.textField}
          value={data}
          multiline={true}
          rows={8}
          variant={'outlined'}
          error={!!error}
          helperText={error}
          onChange={ev => setData(ev.currentTarget.value)}
          placeholder={JSON.stringify(
            {
              fruits: [{ name: 'apple', color: 'red' }],
            },
            null,
            2,
          )}
        />
      </AccordionDetails>

      <AccordionActions>
        <Button color={'primary'} variant={'contained'} onClick={sanitizeData}>
          Save
        </Button>
      </AccordionActions>
    </Accordion>
  )
}

export default JSONViewerData
