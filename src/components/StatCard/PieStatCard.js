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

function PieStatCard(props) {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader className={classes.cardHeader} title={props.title} />
      <CardContent>
        <div>
          <Chart
            width={'inherit'}
            height={'300px'}
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['Diagnosis', 'Patients'],
              ['Diag A', 111],
              ['Daig B', 22],
              ['Daig B', 42],
              ['Other', 27],
            ]}
            options={{
              is3D: false,
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default PieStatCard
