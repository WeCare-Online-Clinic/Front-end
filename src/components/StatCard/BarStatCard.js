import React from 'react'
import { Chart } from 'react-google-charts'
import { Card, CardHeader, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  cardHeader: {
    textAlign: 'center',
    color: '#145da0',
    backgroundColor: '#ebf5f7',
    borderBottom: '1px solid #000',
    height: '50px',
  },
})

function BarStatCard(props) {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={props.title} />
      <CardContent>
        <div>
          <Chart
            width={'inherit'}
            height={'250px'}
            chartType='Bar'
            loader={<div>Loading Chart</div>}
            data={[
              ['Age', 'Patients'],
              ['38', 21],
              ['39', 12],
              ['40', 13],
              ['41', 12],
              ['42', 32],
              ['43', 62],
              ['44', 72],
              ['45', 32],
              ['46', 92],
              ['47', 52],
              ['48', 72],
            ]}
            options={
              {
                // Material design options
              }
            }
            // For tests
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default BarStatCard
