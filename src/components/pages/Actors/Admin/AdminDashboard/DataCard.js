import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: '340px',
    height: '80px',
    border: '1px solid #bdc3cb',
    display: 'flex',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#3f51b5',
    borderBottom: '1px solid #000',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgb(128, 128, 128,0.9)',
    fontSize: '24px',
    fontWeight: 'bold',
    flexGrow: 1,
  },
})

function DataCard(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {props.cardItems &&  props.cardItems.map((card) => (
          <CardItem name={card.name} value={card.value} />
        ))}
    </div>
  )
}

function CardItem(props) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title={props.name}
      ></CardHeader>
      <CardContent className={classes.cardContent}>{props.value}</CardContent>
    </Card>
  )
}

export default DataCard
