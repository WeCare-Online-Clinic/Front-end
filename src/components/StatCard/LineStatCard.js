import React from 'react'
import { Chart } from 'react-google-charts'
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  cardHeader: {
    textAlign: 'center',
    color: '#145da0',
    backgroundColor: '#ebf5f7',
    borderBottom: '1px solid #000',
  },
})

function LineStatCard() {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={'Online Users'} />
      <CardContent>
        <div>
          <Chart
            style={{ minWidth: 'inherit', height: '500px' }}
            chartType='LineChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'Online Users'],
              [8, 76],
              [9, 167],
              [10, 236],
              [11, 175],
              [12, 189],
              [13, 91],
              [14, 31],
              [15, 27],
              [16, 33],
              [17, 40],
              [18, 32],
              [19, 35],
            ]}
            options={{
              hAxis: {
                title: 'Time',
              },
              vAxis: {
                title: 'Online Users',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default LineStatCard
