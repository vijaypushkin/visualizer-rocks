import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { ResponsiveBubble } from '@nivo/circle-packing'
import useChartPageStyles from '../useChartPageStyles'

export default () => {
  const classes = useChartPageStyles()
  return (
    <div className={classes.root}>
      <div>
        <Typography variant={'h5'}>Line Chart</Typography>
      </div>

      <Paper className={classes.content} elevation={6}>
        <ResponsiveBubble
          root={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          identity="name"
          value="loc"
          colors={{ scheme: 'nivo' }}
          padding={6}
          labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
          borderWidth={2}
          borderColor={{ from: 'color' }}
          defs={[
            {
              id: 'lines',
              type: 'patternLines',
              background: 'none',
              color: 'inherit',
              rotation: -45,
              lineWidth: 5,
              spacing: 8,
            },
          ]}
          fill={[{ match: { depth: 1 }, id: 'lines' }]}
          animate={true}
          motionStiffness={90}
          motionDamping={12}
        />
      </Paper>
    </div>
  )
}

const data = {
  name: 'nivo',
  color: 'hsl(142, 70%, 50%)',
  children: [
    {
      name: 'viz',
      color: 'hsl(212, 70%, 50%)',
      children: [
        {
          name: 'stack',
          color: 'hsl(211, 70%, 50%)',
          children: [
            {
              name: 'cchart',
              color: 'hsl(67, 70%, 50%)',
              loc: 193633,
            },
            {
              name: 'xAxis',
              color: 'hsl(89, 70%, 50%)',
              loc: 84988,
            },
            {
              name: 'yAxis',
              color: 'hsl(345, 70%, 50%)',
              loc: 106103,
            },
            {
              name: 'layers',
              color: 'hsl(135, 70%, 50%)',
              loc: 3251,
            },
          ],
        },
        {
          name: 'ppie',
          color: 'hsl(113, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(258, 70%, 50%)',
              children: [
                {
                  name: 'pie',
                  color: 'hsl(257, 70%, 50%)',
                  children: [
                    {
                      name: 'outline',
                      color: 'hsl(320, 70%, 50%)',
                      loc: 140610,
                    },
                    {
                      name: 'slices',
                      color: 'hsl(81, 70%, 50%)',
                      loc: 55154,
                    },
                    {
                      name: 'bbox',
                      color: 'hsl(73, 70%, 50%)',
                      loc: 20231,
                    },
                  ],
                },
                {
                  name: 'donut',
                  color: 'hsl(137, 70%, 50%)',
                  loc: 163961,
                },
                {
                  name: 'gauge',
                  color: 'hsl(233, 70%, 50%)',
                  loc: 15456,
                },
              ],
            },
            {
              name: 'legends',
              color: 'hsl(279, 70%, 50%)',
              loc: 105598,
            },
          ],
        },
      ],
    },
    {
      name: 'colors',
      color: 'hsl(33, 70%, 50%)',
      children: [
        {
          name: 'rgb',
          color: 'hsl(37, 70%, 50%)',
          loc: 160268,
        },
        {
          name: 'hsl',
          color: 'hsl(303, 70%, 50%)',
          loc: 23054,
        },
      ],
    },
    {
      name: 'utils',
      color: 'hsl(52, 70%, 50%)',
      children: [
        {
          name: 'randomize',
          color: 'hsl(27, 70%, 50%)',
          loc: 188445,
        },
        {
          name: 'resetClock',
          color: 'hsl(310, 70%, 50%)',
          loc: 106323,
        },
        {
          name: 'noop',
          color: 'hsl(176, 70%, 50%)',
          loc: 182495,
        },
        {
          name: 'tick',
          color: 'hsl(327, 70%, 50%)',
          loc: 196086,
        },
        {
          name: 'forceGC',
          color: 'hsl(289, 70%, 50%)',
          loc: 40884,
        },
        {
          name: 'stackTrace',
          color: 'hsl(68, 70%, 50%)',
          loc: 6117,
        },
        {
          name: 'dbg',
          color: 'hsl(350, 70%, 50%)',
          loc: 51129,
        },
      ],
    },
    {
      name: 'generators',
      color: 'hsl(36, 70%, 50%)',
      children: [
        {
          name: 'address',
          color: 'hsl(76, 70%, 50%)',
          loc: 36261,
        },
        {
          name: 'city',
          color: 'hsl(220, 70%, 50%)',
          loc: 43902,
        },
        {
          name: 'animal',
          color: 'hsl(177, 70%, 50%)',
          loc: 162704,
        },
        {
          name: 'movie',
          color: 'hsl(232, 70%, 50%)',
          loc: 128853,
        },
        {
          name: 'user',
          color: 'hsl(86, 70%, 50%)',
          loc: 18253,
        },
      ],
    },
    {
      name: 'set',
      color: 'hsl(258, 70%, 50%)',
      children: [
        {
          name: 'clone',
          color: 'hsl(180, 70%, 50%)',
          loc: 96830,
        },
        {
          name: 'intersect',
          color: 'hsl(292, 70%, 50%)',
          loc: 158889,
        },
        {
          name: 'merge',
          color: 'hsl(158, 70%, 50%)',
          loc: 25183,
        },
        {
          name: 'reverse',
          color: 'hsl(222, 70%, 50%)',
          loc: 122507,
        },
        {
          name: 'toArray',
          color: 'hsl(359, 70%, 50%)',
          loc: 45445,
        },
        {
          name: 'toObject',
          color: 'hsl(84, 70%, 50%)',
          loc: 52230,
        },
        {
          name: 'fromCSV',
          color: 'hsl(348, 70%, 50%)',
          loc: 135722,
        },
        {
          name: 'slice',
          color: 'hsl(302, 70%, 50%)',
          loc: 70950,
        },
        {
          name: 'append',
          color: 'hsl(189, 70%, 50%)',
          loc: 164347,
        },
        {
          name: 'prepend',
          color: 'hsl(315, 70%, 50%)',
          loc: 115581,
        },
        {
          name: 'shuffle',
          color: 'hsl(250, 70%, 50%)',
          loc: 172794,
        },
        {
          name: 'pick',
          color: 'hsl(83, 70%, 50%)',
          loc: 143457,
        },
        {
          name: 'plouc',
          color: 'hsl(231, 70%, 50%)',
          loc: 122105,
        },
      ],
    },
    {
      name: 'text',
      color: 'hsl(139, 70%, 50%)',
      children: [
        {
          name: 'trim',
          color: 'hsl(4, 70%, 50%)',
          loc: 13831,
        },
        {
          name: 'slugify',
          color: 'hsl(299, 70%, 50%)',
          loc: 62709,
        },
        {
          name: 'snakeCase',
          color: 'hsl(266, 70%, 50%)',
          loc: 2967,
        },
        {
          name: 'camelCase',
          color: 'hsl(200, 70%, 50%)',
          loc: 75973,
        },
        {
          name: 'repeat',
          color: 'hsl(7, 70%, 50%)',
          loc: 148842,
        },
        {
          name: 'padLeft',
          color: 'hsl(119, 70%, 50%)',
          loc: 167765,
        },
        {
          name: 'padRight',
          color: 'hsl(352, 70%, 50%)',
          loc: 178972,
        },
        {
          name: 'sanitize',
          color: 'hsl(107, 70%, 50%)',
          loc: 79272,
        },
        {
          name: 'ploucify',
          color: 'hsl(354, 70%, 50%)',
          loc: 22071,
        },
      ],
    },
    {
      name: 'misc',
      color: 'hsl(195, 70%, 50%)',
      children: [
        {
          name: 'greetings',
          color: 'hsl(76, 70%, 50%)',
          children: [
            {
              name: 'hey',
              color: 'hsl(227, 70%, 50%)',
              loc: 101842,
            },
            {
              name: 'HOWDY',
              color: 'hsl(332, 70%, 50%)',
              loc: 166375,
            },
            {
              name: 'aloha',
              color: 'hsl(313, 70%, 50%)',
              loc: 119612,
            },
            {
              name: 'AHOY',
              color: 'hsl(31, 70%, 50%)',
              loc: 111019,
            },
          ],
        },
        {
          name: 'other',
          color: 'hsl(104, 70%, 50%)',
          loc: 169921,
        },
        {
          name: 'path',
          color: 'hsl(108, 70%, 50%)',
          children: [
            {
              name: 'pathA',
              color: 'hsl(126, 70%, 50%)',
              loc: 7763,
            },
            {
              name: 'pathB',
              color: 'hsl(356, 70%, 50%)',
              children: [
                {
                  name: 'pathB1',
                  color: 'hsl(273, 70%, 50%)',
                  loc: 95853,
                },
                {
                  name: 'pathB2',
                  color: 'hsl(190, 70%, 50%)',
                  loc: 187713,
                },
                {
                  name: 'pathB3',
                  color: 'hsl(297, 70%, 50%)',
                  loc: 92705,
                },
                {
                  name: 'pathB4',
                  color: 'hsl(324, 70%, 50%)',
                  loc: 142764,
                },
              ],
            },
            {
              name: 'pathC',
              color: 'hsl(243, 70%, 50%)',
              children: [
                {
                  name: 'pathC1',
                  color: 'hsl(214, 70%, 50%)',
                  loc: 65805,
                },
                {
                  name: 'pathC2',
                  color: 'hsl(269, 70%, 50%)',
                  loc: 151865,
                },
                {
                  name: 'pathC3',
                  color: 'hsl(333, 70%, 50%)',
                  loc: 139318,
                },
                {
                  name: 'pathC4',
                  color: 'hsl(285, 70%, 50%)',
                  loc: 70948,
                },
                {
                  name: 'pathC5',
                  color: 'hsl(184, 70%, 50%)',
                  loc: 32170,
                },
                {
                  name: 'pathC6',
                  color: 'hsl(176, 70%, 50%)',
                  loc: 74679,
                },
                {
                  name: 'pathC7',
                  color: 'hsl(120, 70%, 50%)',
                  loc: 151466,
                },
                {
                  name: 'pathC8',
                  color: 'hsl(167, 70%, 50%)',
                  loc: 88624,
                },
                {
                  name: 'pathC9',
                  color: 'hsl(223, 70%, 50%)',
                  loc: 97375,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
