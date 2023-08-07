import React from 'react'
import { Typography, Grid, Button, makeStyles } from '@material-ui/core'
import './home.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  newsCard: {
    backgroundColor: 'white',
    padding: '10px 15px 20px 15px',
    border: '1pt solid rgb(237, 237,237)',
    borderRadius: '.25rem',
  },
  source: {
    fontSize: '9pt',
  },
  body: {
    fontSize: '10pt',
  },
  button: {
    width: '30%',
    height: '25px',
    fontSize: '8pt',
    marginTop: '10px',
    border: '2pt solid orange',
    color: 'white',
    '&:hover': {
      transition: '.2s ease',
      backgroundColor: 'rgba(255, 166, 0, 0.53)',
    },
  },
})

const NewsCard = ({ news }) => {
  //
  const classes = useStyles()
  return (
    <Grid className={classes.newsCard}>
      <Typography variant="h6">{news.Title}</Typography>
      <Grid>
        <Typography className={classes.source}>
          {news.OriginalSource}
        </Typography>

        <p className="time-ago">{news.TimeAgo}</p>
      </Grid>
      <Grid>
        <Typography className={classes.body} gutterBottom>
          {news.Content.substr(0, 127)}
        </Typography>
      </Grid>
      <Link to={news.OriginalSourceUrl} target="_blank">
        <Button className={classes.button} variant="contained">
          Source
        </Button>
      </Link>
    </Grid>
  )
}

export default NewsCard
