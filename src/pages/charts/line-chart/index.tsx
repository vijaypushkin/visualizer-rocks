import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { ResponsiveLine } from '@nivo/line'
import useChartPageStyles from '../useChartPageStyles'

export default () => {
  const classes = useChartPageStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography variant={'h5'}>Line Chart</Typography>
      </div>

      <Paper className={classes.content} elevation={6}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="monotoneX"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          colors={{ scheme: 'category10' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Paper>
    </div>
  )
}

const data = [
  {
    id: 'japan',
    color: 'hsl(335, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 283,
      },
      {
        x: 'helicopter',
        y: 214,
      },
      {
        x: 'boat',
        y: 284,
      },
      {
        x: 'train',
        y: 85,
      },
      {
        x: 'subway',
        y: 181,
      },
      {
        x: 'bus',
        y: 218,
      },
      {
        x: 'car',
        y: 63,
      },
      {
        x: 'moto',
        y: 258,
      },
      {
        x: 'bicycle',
        y: 289,
      },
      {
        x: 'horse',
        y: 21,
      },
      {
        x: 'skateboard',
        y: 159,
      },
      {
        x: 'others',
        y: 216,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(232, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 136,
      },
      {
        x: 'helicopter',
        y: 201,
      },
      {
        x: 'boat',
        y: 174,
      },
      {
        x: 'train',
        y: 257,
      },
      {
        x: 'subway',
        y: 15,
      },
      {
        x: 'bus',
        y: 186,
      },
      {
        x: 'car',
        y: 207,
      },
      {
        x: 'moto',
        y: 294,
      },
      {
        x: 'bicycle',
        y: 270,
      },
      {
        x: 'horse',
        y: 147,
      },
      {
        x: 'skateboard',
        y: 86,
      },
      {
        x: 'others',
        y: 213,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(77, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 205,
      },
      {
        x: 'helicopter',
        y: 77,
      },
      {
        x: 'boat',
        y: 280,
      },
      {
        x: 'train',
        y: 281,
      },
      {
        x: 'subway',
        y: 72,
      },
      {
        x: 'bus',
        y: 180,
      },
      {
        x: 'car',
        y: 30,
      },
      {
        x: 'moto',
        y: 145,
      },
      {
        x: 'bicycle',
        y: 187,
      },
      {
        x: 'horse',
        y: 291,
      },
      {
        x: 'skateboard',
        y: 192,
      },
      {
        x: 'others',
        y: 265,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(139, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 194,
      },
      {
        x: 'helicopter',
        y: 182,
      },
      {
        x: 'boat',
        y: 211,
      },
      {
        x: 'train',
        y: 9,
      },
      {
        x: 'subway',
        y: 163,
      },
      {
        x: 'bus',
        y: 153,
      },
      {
        x: 'car',
        y: 166,
      },
      {
        x: 'moto',
        y: 20,
      },
      {
        x: 'bicycle',
        y: 244,
      },
      {
        x: 'horse',
        y: 242,
      },
      {
        x: 'skateboard',
        y: 92,
      },
      {
        x: 'others',
        y: 287,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(33, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 21,
      },
      {
        x: 'helicopter',
        y: 153,
      },
      {
        x: 'boat',
        y: 159,
      },
      {
        x: 'train',
        y: 265,
      },
      {
        x: 'subway',
        y: 167,
      },
      {
        x: 'bus',
        y: 67,
      },
      {
        x: 'car',
        y: 117,
      },
      {
        x: 'moto',
        y: 103,
      },
      {
        x: 'bicycle',
        y: 175,
      },
      {
        x: 'horse',
        y: 37,
      },
      {
        x: 'skateboard',
        y: 227,
      },
      {
        x: 'others',
        y: 147,
      },
    ],
  },
]
