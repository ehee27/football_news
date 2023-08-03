import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import './schedule.css'
import BoxScore from './BoxScore'
import WeekToggleForm from './WeekToggleForm'
//
const useStyles = makeStyles({
  scheduleBox: {
    display: 'flex',
  },
  scheduleLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  scheduleRight: {
    display: 'flex',
    padding: '3px 0px 0px 10px',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
  },
})
const ScoreBoard = () => {
  //
  const classes = useStyles()
  // set my state
  const [games, setGames] = useState([])
  // const [year, setYear] = useState(2022)
  const [week, setWeek] = useState(1)

  // use effect will fetch the newest (2021, week 1) data upon mount
  useEffect(() => {
    // setYear(year)
    setWeek(week)
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresBasic/2022/1?key=4f26331b9d48493c8ccbbe65530002fa`
    )
      .then((res) => res.json())
      .then((result) => {
        setGames(result)
        // console.log(result)
      })
  }, [])

  // fetchGames is called on submit and re-fetches the selected year and week
  const fetchGames = (week) => {
    console.log('This is the fetch games', week)
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresBasic/2022/${week}?key=4f26331b9d48493c8ccbbe65530002fa`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setGames(result)
      })
  }
  const handleWeek = (e) => {
    setWeek(e.target.value)
    console.log('WEEK')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchGames(week)
  }
  return (
    // <Container className={classes.container}>
    <Grid className={classes.scheduleBox} container spacing={0}>
      <Grid item className={classes.scheduleLeft} xs={12} sm={2} md={2}>
        <WeekToggleForm handleWeek={handleWeek} handleSubmit={handleSubmit} />
      </Grid>
      <Grid item className={classes.scheduleRight} xs={12} sm={10} md={10}>
        {games.length ? (
          <>
            {games.map((game) => {
              return <BoxScore key={game.ScoreID} game={game} />
            })}
          </>
        ) : (
          <span>No games to render</span>
        )}
      </Grid>
    </Grid>
    // </Container>
  )
}

export default ScoreBoard
