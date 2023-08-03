import React from 'react'
import './standings.css'
import { Link } from 'react-router-dom'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
// import DivisionStandings from './DivisionStandings'

const useStyles = makeStyles({
  container: {
    padding: '5px 15px 5px 15px',
    boxShadow: 'inset 2pt 2pt 4pt grey',
    // backgroundColor: 'white',
    backgroundColor: 'white',
    borderRadius: '.25rem',
    marginTop: '10px',
    color: 'white',
  },
  box: {
    display: 'flex',
    borderLeft: '2pt solid transparent',
    '&:hover': {
      transition: '.2s ease',
      cursor: 'pointer',
    },
  },
  name: {
    marginRight: '10px',
    marginBottom: '3px',
    padding: '1px 3px 1px 3px',
    '&:hover': {
      transition: '.2s ease',
      color: 'white',
      backgroundImage: 'linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0))',
      borderRadius: '.25rem',
    },
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Russo One',
    fontSize: '10pt',
    color: 'rgb(54, 54, 54)',
    // padding: '5px',
    '&:hover': {
      transition: '.2s ease',
      color: 'white',
    },
  },
  record: {
    fontFamily: 'Russo One',
    fontSize: '10pt',
    // padding: '5px',
    color: 'orange',
  },
})

const StandingsBoard = ({ standings, div, con }) => {
  const classes = useStyles()
  // breakdown conference with standings div and con props
  let conference
  if (standings) {
    conference = standings?.filter(
      (item) => item.Conference === div && item.Division === con
    )
  }
  return (
    <Container className={classes.container}>
      <Typography variant="h6">{con}</Typography>
      {conference.map((team) => {
        return (
          <Grid className={classes.box}>
            <Grid className={classes.name}>
              <Link className={classes.link} to={`/teams/${team.TeamID}`}>
                {team.Name}
              </Link>
            </Grid>
            <Grid className={classes.record}>
              {team.Wins} - {team.Losses}
            </Grid>
          </Grid>
        )
      })}
    </Container>
  )
}

export default StandingsBoard
