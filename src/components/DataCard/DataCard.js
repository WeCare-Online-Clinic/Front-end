import React from 'react'
import { Card, makeStyles } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    width: '300px',
    border: '1px solid #bdc3cb',
  },
  cardHeader: {
    textAlign: 'center',
    color: '#df362d',
    borderBottom: '1px solid #000',
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ff4500',
    fontSize: '24px',
    fontWeight: 'bold',
  },
})

function DataCard(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {props.cardItems &&
        props.cardItems.map((card) => (
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
