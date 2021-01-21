import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Paper, Typography } from '@material-ui/core'
import useChartPageStyles from '@hooks/styles/useChartPageStyles'

export default () => {
  const classes = useChartPageStyles()

  return (
    <div className={classes.root}>
      <div>
        <Typography variant={'h5'}>Bar Chart</Typography>
      </div>

      <Paper className={classes.content} elevation={6}>
        <ResponsiveBar
          data={data}
          keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id: 'lines',
            },
          ]}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Paper>
    </div>
  )
}

const data = [
  {
    country: 'AD',
    'hot dog': 160,
    'hot dogColor': 'hsl(354, 70%, 50%)',
    burger: 64,
    burgerColor: 'hsl(291, 70%, 50%)',
    sandwich: 50,
    sandwichColor: 'hsl(122, 70%, 50%)',
    kebab: 181,
    kebabColor: 'hsl(83, 70%, 50%)',
    fries: 191,
    friesColor: 'hsl(289, 70%, 50%)',
    donut: 64,
    donutColor: 'hsl(235, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 123,
    'hot dogColor': 'hsl(180, 70%, 50%)',
    burger: 93,
    burgerColor: 'hsl(346, 70%, 50%)',
    sandwich: 25,
    sandwichColor: 'hsl(289, 70%, 50%)',
    kebab: 199,
    kebabColor: 'hsl(30, 70%, 50%)',
    fries: 92,
    friesColor: 'hsl(336, 70%, 50%)',
    donut: 145,
    donutColor: 'hsl(60, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 70,
    'hot dogColor': 'hsl(40, 70%, 50%)',
    burger: 42,
    burgerColor: 'hsl(32, 70%, 50%)',
    sandwich: 175,
    sandwichColor: 'hsl(154, 70%, 50%)',
    kebab: 26,
    kebabColor: 'hsl(345, 70%, 50%)',
    fries: 189,
    friesColor: 'hsl(37, 70%, 50%)',
    donut: 196,
    donutColor: 'hsl(234, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 133,
    'hot dogColor': 'hsl(122, 70%, 50%)',
    burger: 44,
    burgerColor: 'hsl(300, 70%, 50%)',
    sandwich: 151,
    sandwichColor: 'hsl(261, 70%, 50%)',
    kebab: 33,
    kebabColor: 'hsl(224, 70%, 50%)',
    fries: 1,
    friesColor: 'hsl(348, 70%, 50%)',
    donut: 93,
    donutColor: 'hsl(266, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 38,
    'hot dogColor': 'hsl(284, 70%, 50%)',
    burger: 87,
    burgerColor: 'hsl(186, 70%, 50%)',
    sandwich: 97,
    sandwichColor: 'hsl(186, 70%, 50%)',
    kebab: 5,
    kebabColor: 'hsl(45, 70%, 50%)',
    fries: 168,
    friesColor: 'hsl(159, 70%, 50%)',
    donut: 161,
    donutColor: 'hsl(205, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 60,
    'hot dogColor': 'hsl(293, 70%, 50%)',
    burger: 112,
    burgerColor: 'hsl(185, 70%, 50%)',
    sandwich: 67,
    sandwichColor: 'hsl(332, 70%, 50%)',
    kebab: 26,
    kebabColor: 'hsl(157, 70%, 50%)',
    fries: 151,
    friesColor: 'hsl(266, 70%, 50%)',
    donut: 183,
    donutColor: 'hsl(156, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 84,
    'hot dogColor': 'hsl(351, 70%, 50%)',
    burger: 89,
    burgerColor: 'hsl(341, 70%, 50%)',
    sandwich: 113,
    sandwichColor: 'hsl(119, 70%, 50%)',
    kebab: 157,
    kebabColor: 'hsl(73, 70%, 50%)',
    fries: 81,
    friesColor: 'hsl(184, 70%, 50%)',
    donut: 130,
    donutColor: 'hsl(171, 70%, 50%)',
  },
]
