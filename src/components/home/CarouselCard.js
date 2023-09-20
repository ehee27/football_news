import React from 'react'
import './home.css'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    width: '99%',
    height: '35vh',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // paddingBottom: '25px',
  },
  cardMedia: {
    height: '60%',
  },
  cardContent: {},
})

const CarouselCard = ({ item }) => {
  //
  const classes = useStyles()
  return (
    <Card className={classes.container}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        alt={item.altText}
        image={item.imageURL}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {item.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CarouselCard
