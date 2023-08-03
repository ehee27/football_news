import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import './home.css'
import NewsCard from './NewsCard'

const gamesAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/News?key=4f26331b9d48493c8ccbbe65530002fa'

const useStyles = makeStyles({
  container: {
    marginTop: '10px',
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
        // console.log('This is the news----', result)
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
