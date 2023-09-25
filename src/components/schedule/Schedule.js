import React, { useState, useEffect } from 'react'
import { Container, makeStyles, Grid } from '@material-ui/core'
import AMAZON from '../../img/AMAZON.png'
import FOX from '../../img/FOX.png'
import CBS from '../../img/CBS.png'
import NBC from '../../img/NBC.png'

const useStyles = makeStyles({
  container: {
    padding: '0px 10px 10px 0px',
    // border: '3pt solid pink',
  },
  box: {
    backgroundColor: 'rgb(238, 238, 238)',
    display: 'flex',
    justifyContent: 'space-around',

    borderRadius: '.25rem',
    padding: '2px',
    marginBottom: '3px',
  },

  gameBox: {
    backgroundColor: 'rgb(238, 238, 238)',
    display: 'flex',
    // justifyContent: 'space-between',
    border: '1pt solid white',
    borderRadius: '.25rem',
    marginBottom: '5px',
    padding: '5px',
    width: '100%',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'orange',
    fontSize: '10pt',
    width: '10%',
    // border: '1pt solid red',
  },

  tvData: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'black',
    fontSize: '10pt',
    width: '20%',
    // border: '1pt solid red',
  },

  matchup: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'green',
  },
  moneyLine: {
    backgroundColor: 'rgb(145, 145, 145)',
    borderRadius: '.5rem',
    color: 'white',
    fontSize: '10pt',
    fontWeight: '900',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '35%',
  },
  moneyLineOdds: {
    marginLeft: '10px',
    color: 'greenyellow',
  },
})

const upcomingWeekAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/UpcomingWeek?key=1f12ca4661284f288d5f6bbd9e7e503b'

const TVSchedule = () => {
  const classes = useStyles()
  const [week, setWeek] = useState(0)
  const [schedule, setSchedule] = useState([])
  //
  useEffect(() => {
    fetch(upcomingWeekAPI)
      .then(res => res.json())
      .then(response => setWeek(response))
  }, [])
  useEffect(() => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2023/${week}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(response => setSchedule(response))
  }, [week])

  //
  return (
    <Container className={classes.container}>
      {schedule?.map(item => {
        return (
          <div key={item.GameKey}>
            <div className={classes.box}>
              <div className={classes.date}>{item.DateTime.slice(5, 10)}</div>
              {/* ------------- */}
              <div className={classes.matchup}>
                {item.AwayTeam} - {item.HomeTeam}
              </div>

              <div className={classes.tvData}>
                {item.Channel}

                {item.Channel === 'AMAZON' ? (
                  <img
                    src={AMAZON}
                    alt="tv-logo"
                    height="30px"
                    width="40px"
                  ></img>
                ) : item.Channel === 'FOX' ? (
                  <img src={FOX} alt="tv-logo" height="30px" width="40px"></img>
                ) : item.Channel === 'CBS' ? (
                  <img src={CBS} alt="tv-logo" height="30px" width="40px"></img>
                ) : item.Channel === 'NBC' ? (
                  <img src={NBC} alt="tv-logo" height="30px" width="40px"></img>
                ) : (
                  <span></span>
                )}
              </div>
              <Grid className={classes.moneyLine} container spacing={0}>
                MoneyLine:{' '}
                <div style={{ color: 'lime' }}>
                  {item.HomeTeamMoneyLine} - {item.AwayTeamMoneyLine}
                </div>
              </Grid>
            </div>
          </div>
        )
      })}
    </Container>
  )
}

export default TVSchedule
