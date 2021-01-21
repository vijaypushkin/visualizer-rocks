import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { ResponsiveChoropleth } from '@nivo/geo'
import useChartPageStyles from '../useChartPageStyles'

export default () => {
  const classes = useChartPageStyles()

  return (
    <div className={classes.root}>
      <div>
        <Typography variant={'h5'}>Line Chart</Typography>
      </div>

      <Paper className={classes.content} elevation={6}>
        <ResponsiveChoropleth
          data={data}
          features={[]}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
        />
      </Paper>
    </div>
  )
}

const data = [
  {
    id: 'AFG',
    value: 320624,
  },
  {
    id: 'AGO',
    value: 927583,
  },
  {
    id: 'ALB',
    value: 246382,
  },
  {
    id: 'ARE',
    value: 523545,
  },
  {
    id: 'ARG',
    value: 719989,
  },
  {
    id: 'ARM',
    value: 686646,
  },
  {
    id: 'ATA',
    value: 430424,
  },
  {
    id: 'ATF',
    value: 981416,
  },
  {
    id: 'AUT',
    value: 565479,
  },
  {
    id: 'AZE',
    value: 55194,
  },
  {
    id: 'BDI',
    value: 724009,
  },
  {
    id: 'BEL',
    value: 598807,
  },
  {
    id: 'BEN',
    value: 884883,
  },
  {
    id: 'BFA',
    value: 547899,
  },
  {
    id: 'BGD',
    value: 23862,
  },
  {
    id: 'BGR',
    value: 923894,
  },
  {
    id: 'BHS',
    value: 182409,
  },
  {
    id: 'BIH',
    value: 589552,
  },
  {
    id: 'BLR',
    value: 13116,
  },
  {
    id: 'BLZ',
    value: 779781,
  },
  {
    id: 'BOL',
    value: 182728,
  },
  {
    id: 'BRN',
    value: 618947,
  },
  {
    id: 'BTN',
    value: 873081,
  },
  {
    id: 'BWA',
    value: 846875,
  },
  {
    id: 'CAF',
    value: 699091,
  },
  {
    id: 'CAN',
    value: 66701,
  },
  {
    id: 'CHE',
    value: 761536,
  },
  {
    id: 'CHL',
    value: 565106,
  },
  {
    id: 'CHN',
    value: 177652,
  },
  {
    id: 'CIV',
    value: 992325,
  },
  {
    id: 'CMR',
    value: 39487,
  },
  {
    id: 'COG',
    value: 382803,
  },
  {
    id: 'COL',
    value: 320307,
  },
  {
    id: 'CRI',
    value: 83984,
  },
  {
    id: 'CUB',
    value: 702132,
  },
  {
    id: '-99',
    value: 625763,
  },
  {
    id: 'CYP',
    value: 389904,
  },
  {
    id: 'CZE',
    value: 604136,
  },
  {
    id: 'DEU',
    value: 473581,
  },
  {
    id: 'DJI',
    value: 654457,
  },
  {
    id: 'DNK',
    value: 667045,
  },
  {
    id: 'DOM',
    value: 864552,
  },
  {
    id: 'DZA',
    value: 204275,
  },
  {
    id: 'ECU',
    value: 359332,
  },
  {
    id: 'EGY',
    value: 525507,
  },
  {
    id: 'ERI',
    value: 112990,
  },
  {
    id: 'ESP',
    value: 507704,
  },
  {
    id: 'EST',
    value: 784453,
  },
  {
    id: 'ETH',
    value: 180584,
  },
  {
    id: 'FIN',
    value: 279506,
  },
  {
    id: 'FJI',
    value: 134110,
  },
  {
    id: 'FLK',
    value: 803854,
  },
  {
    id: 'FRA',
    value: 633474,
  },
  {
    id: 'GAB',
    value: 618927,
  },
  {
    id: 'GBR',
    value: 111137,
  },
  {
    id: 'GEO',
    value: 805499,
  },
  {
    id: 'GHA',
    value: 326880,
  },
  {
    id: 'GIN',
    value: 979136,
  },
  {
    id: 'GMB',
    value: 751084,
  },
  {
    id: 'GNB',
    value: 376654,
  },
  {
    id: 'GNQ',
    value: 227340,
  },
  {
    id: 'GRC',
    value: 799134,
  },
  {
    id: 'GTM',
    value: 303640,
  },
  {
    id: 'GUY',
    value: 698176,
  },
  {
    id: 'HND',
    value: 30363,
  },
  {
    id: 'HRV',
    value: 719559,
  },
  {
    id: 'HTI',
    value: 904199,
  },
  {
    id: 'HUN',
    value: 513627,
  },
  {
    id: 'IDN',
    value: 136604,
  },
  {
    id: 'IND',
    value: 648217,
  },
  {
    id: 'IRL',
    value: 574954,
  },
  {
    id: 'IRN',
    value: 170874,
  },
  {
    id: 'IRQ',
    value: 267368,
  },
  {
    id: 'ISL',
    value: 130827,
  },
  {
    id: 'ISR',
    value: 903040,
  },
  {
    id: 'ITA',
    value: 387468,
  },
  {
    id: 'JAM',
    value: 664084,
  },
  {
    id: 'JOR',
    value: 994047,
  },
  {
    id: 'JPN',
    value: 863561,
  },
  {
    id: 'KAZ',
    value: 331115,
  },
  {
    id: 'KEN',
    value: 975915,
  },
  {
    id: 'KGZ',
    value: 538565,
  },
  {
    id: 'KHM',
    value: 106205,
  },
  {
    id: 'OSA',
    value: 248279,
  },
  {
    id: 'KWT',
    value: 758262,
  },
  {
    id: 'LAO',
    value: 958670,
  },
  {
    id: 'LBN',
    value: 664172,
  },
  {
    id: 'LBR',
    value: 666897,
  },
  {
    id: 'LBY',
    value: 196961,
  },
  {
    id: 'LKA',
    value: 912346,
  },
  {
    id: 'LSO',
    value: 997652,
  },
  {
    id: 'LTU',
    value: 339488,
  },
  {
    id: 'LUX',
    value: 242470,
  },
  {
    id: 'LVA',
    value: 282904,
  },
  {
    id: 'MAR',
    value: 310469,
  },
  {
    id: 'MDA',
    value: 803360,
  },
  {
    id: 'MDG',
    value: 730238,
  },
  {
    id: 'MEX',
    value: 985529,
  },
  {
    id: 'MKD',
    value: 514060,
  },
  {
    id: 'MLI',
    value: 282478,
  },
  {
    id: 'MMR',
    value: 7061,
  },
  {
    id: 'MNE',
    value: 391687,
  },
  {
    id: 'MNG',
    value: 555738,
  },
  {
    id: 'MOZ',
    value: 142196,
  },
  {
    id: 'MRT',
    value: 681549,
  },
  {
    id: 'MWI',
    value: 933942,
  },
  {
    id: 'MYS',
    value: 836907,
  },
  {
    id: 'NAM',
    value: 811367,
  },
  {
    id: 'NCL',
    value: 516950,
  },
  {
    id: 'NER',
    value: 333008,
  },
  {
    id: 'NGA',
    value: 778071,
  },
  {
    id: 'NIC',
    value: 354492,
  },
  {
    id: 'NLD',
    value: 799512,
  },
  {
    id: 'NOR',
    value: 374690,
  },
  {
    id: 'NPL',
    value: 524675,
  },
  {
    id: 'NZL',
    value: 252986,
  },
  {
    id: 'OMN',
    value: 856112,
  },
  {
    id: 'PAK',
    value: 769068,
  },
  {
    id: 'PAN',
    value: 148286,
  },
  {
    id: 'PER',
    value: 546254,
  },
  {
    id: 'PHL',
    value: 503028,
  },
  {
    id: 'PNG',
    value: 686001,
  },
  {
    id: 'POL',
    value: 220259,
  },
  {
    id: 'PRI',
    value: 199767,
  },
  {
    id: 'PRT',
    value: 837348,
  },
  {
    id: 'PRY',
    value: 128219,
  },
  {
    id: 'QAT',
    value: 620006,
  },
  {
    id: 'ROU',
    value: 970432,
  },
  {
    id: 'RUS',
    value: 32474,
  },
  {
    id: 'RWA',
    value: 606392,
  },
  {
    id: 'ESH',
    value: 495066,
  },
  {
    id: 'SAU',
    value: 427361,
  },
  {
    id: 'SDN',
    value: 699656,
  },
  {
    id: 'SDS',
    value: 90824,
  },
  {
    id: 'SEN',
    value: 118140,
  },
  {
    id: 'SLB',
    value: 993263,
  },
  {
    id: 'SLE',
    value: 865989,
  },
  {
    id: 'SLV',
    value: 60622,
  },
  {
    id: 'ABV',
    value: 345489,
  },
  {
    id: 'SOM',
    value: 677575,
  },
  {
    id: 'SRB',
    value: 713791,
  },
  {
    id: 'SUR',
    value: 600534,
  },
  {
    id: 'SVK',
    value: 133057,
  },
  {
    id: 'SVN',
    value: 823463,
  },
  {
    id: 'SWZ',
    value: 843341,
  },
  {
    id: 'SYR',
    value: 177586,
  },
  {
    id: 'TCD',
    value: 45010,
  },
  {
    id: 'TGO',
    value: 113218,
  },
  {
    id: 'THA',
    value: 921606,
  },
  {
    id: 'TJK',
    value: 43433,
  },
  {
    id: 'TKM',
    value: 762153,
  },
  {
    id: 'TLS',
    value: 34898,
  },
  {
    id: 'TTO',
    value: 34969,
  },
  {
    id: 'TUN',
    value: 880423,
  },
  {
    id: 'TUR',
    value: 515061,
  },
  {
    id: 'TWN',
    value: 69417,
  },
  {
    id: 'TZA',
    value: 761032,
  },
  {
    id: 'UGA',
    value: 174688,
  },
  {
    id: 'UKR',
    value: 463165,
  },
  {
    id: 'URY',
    value: 717029,
  },
  {
    id: 'USA',
    value: 36904,
  },
  {
    id: 'UZB',
    value: 946157,
  },
  {
    id: 'VEN',
    value: 370083,
  },
  {
    id: 'VNM',
    value: 805971,
  },
  {
    id: 'VUT',
    value: 169868,
  },
  {
    id: 'PSE',
    value: 662823,
  },
  {
    id: 'YEM',
    value: 257738,
  },
  {
    id: 'ZAF',
    value: 384648,
  },
  {
    id: 'ZMB',
    value: 270634,
  },
  {
    id: 'ZWE',
    value: 633463,
  },
  {
    id: 'KOR',
    value: 174028,
  },
]
