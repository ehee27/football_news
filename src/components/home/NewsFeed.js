import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import './home.css'
import NewsCard from './NewsCard'

const gamesAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/News?key=1f12ca4661284f288d5f6bbd9e7e503b'

const useStyles = makeStyles({
  container: {
    marginTop: '0px',
  },
})

const NewsFeed = () => {
  const classes = useStyles()
  //
  const [news, setNews] = useState([])
  //
  useEffect(() => {
    fetch(gamesAPI)
      .then(res => res.json())
      .then(result => {
        setNews(result)
      })
  }, [])
  return (
    <Grid className={classes.container}>
      {news.map(item => {
        return (
          <div key={item.NewsID}>
            <NewsCard news={item} />
          </div>
        )
      })}
    </Grid>
  )
}

export default NewsFeed
