import React, { useState, useEffect, useContext } from 'react'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import { format } from 'date-fns'

const useStyles = makeStyles({
  container: {
    padding: '0px 10px 10px 0px',
    // border: '3pt solid pink',
  },
  gameBox: {
    backgroundColor: 'rgb(238, 238, 238)',
    display: 'flex',
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'orange',
    fontSize: '10pt',
    width: '20%',
  },
  matchup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2pt solid rgb(212, 212, 212)',
    marginLeft: '10px',
    width: '20%',
  },
  matchupTeams: {
    // color: 'green',
  },
  moneyLine: {
    backgroundColor: 'rgb(145, 145, 145)',
    borderRadius: '.5rem',
    color: 'white',
    fontSize: '10pt',
    fontWeight: '900',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
  },
  moneyLineOdds: {
    marginLeft: '10px',
    color: 'greenyellow',
  },
})

const TVSchedule = ({ schedule }) => {
  const classes = useStyles()
  //
  // console.log('This is the schedule', schedule)
  //
  let date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'full',
  }).format(new Date())
  console.log('This is the date format----', date)

  //
  return (
    <Container className={classes.container}>
      <Grid>
        {schedule?.map((item, i) => {
          return (
            <Grid className={classes.gameBox} key={i}>
              <Typography className={classes.date}>{item.Date}</Typography>

              <Grid className={classes.broadcast}>{item.Channel}</Grid>

              <Grid className={classes.matchup}>
                <Typography className={classes.matchupTeams}>
                  {item.AwayTeam} vs {item.HomeTeam}
                </Typography>
              </Grid>
              <Grid className={classes.moneyLine}>
                MoneyLine:
                <Typography className={classes.moneyLineOdds}>
                  Home: {item.HomeTeamMoneyLine}
                </Typography>
                <Typography className={classes.moneyLineOdds}>
                  Away: {item.AwayTeamMoneyLine}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default TVSchedule
