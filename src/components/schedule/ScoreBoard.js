import React, { useState, useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import './schedule.css'

//
const useStyles = makeStyles({
  scheduleBox: {
    display: 'flex',
  },
  boxLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  boxRight: {
    display: 'flex',
    padding: '3px 0px 0px 10px',
    overflowX: 'scroll',
    scrollBehavior: 'smooth',
  },
  boxScores: {
    display: 'flex',
    overflowX: 'scroll',
    // justifyContent: 'space-between',
    // border: '2pt solid gold',
  },
  boxScore: {
    background: 'white',
    border: '2pt solid green',
    padding: '3px',
    fontSize: '9pt',
    color: 'black',
    margin: '1px',
    width: '80px',
  },
  awayTeam: {
    // color: 'white',
  },
  homeTeam: {
    // color: 'white',
  },

  select: { width: '100%' },
})

const currentSeasonAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=1f12ca4661284f288d5f6bbd9e7e503b'

const lastWeekAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/LastCompletedWeek?key=1f12ca4661284f288d5f6bbd9e7e503b'

const ScoreBoard = () => {
  const classes = useStyles()
  const [season, setSeason] = useState(0)
  const [lastWeek, setLastWeek] = useState(0)
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(currentSeasonAPI)
      .then(res => res.json())
      .then(result => {
        setSeason(result)
      })
  }, [])
  useEffect(() => {
    fetch(lastWeekAPI)
      .then(res => res.json())
      .then(result => {
        setLastWeek(result)
      })
  }, [])
  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${lastWeek}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setGames(result)
      })
  }, [lastWeek, season])

  const fetchGames = weekParam => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/${season}/${weekParam}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(response => setGames(response))
  }

  const handleWeek = e => {
    fetchGames(parseInt(e.target.value))
  }

  return (
    <Grid className={classes.scheduleBox} container spacing={0}>
      <Grid className={classes.scoreForm} item xs={12} sm={12} md={1}>
        <form>
          <select className={classes.select} onChange={handleWeek}>
            <option value="value" defaultValue={lastWeek}>
              week {lastWeek}
            </option>
            <option value={1}>week 1</option>
            <option value={2}>week 2</option>
            <option value={3}>week 3</option>
            <option value={4}>week 4</option>
            <option value={5}>week 5</option>
            <option value={6}>week 6</option>
            <option value={7}>week 7</option>
            <option value={8}>week 8</option>
            <option value={9}>week 9</option>
            <option value={10}>week 10</option>
            <option value={11}>week 11</option>
            <option value={12}>week 12</option>
            <option value={13}>week 13</option>
            <option value={14}>week 14</option>
            <option value={15}>week 15</option>
            <option value={16}>week 16</option>
            <option value={17}>week 17</option>
            <option value={18}>week 18</option>
          </select>
        </form>
      </Grid>
      <Grid className={classes.boxScores} item xs={12} sm={12} md={11}>
        {games?.map(item => {
          return (
            <div key={item.GameKey}>
              <div className={classes.boxScore}>
                <div style={{ fontSize: '7pt' }}>{item.Date.slice(5, 10)}</div>

                <div className={classes.awayTeam}>
                  {item.AwayTeam} - {item.AwayScore}
                </div>
                <div className={classes.homeTeam}>
                  {item.HomeTeam} - {item.HomeScore}
                </div>
              </div>
            </div>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default ScoreBoard
