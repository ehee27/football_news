// when we map the teams array we use the outer Grid as container spacing and then them 'item' grid WITHIN the mapping - include the key

import React, { useState, useEffect, useContext } from 'react'
// import './teams.css'
import TeamCard from './TeamCard'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
// import { TeamsContext } from '../context/teamsContext'

const useStyles = makeStyles({
  container: {
    padding: '20px 10px 10px 10px',
  },
})

const API_TEAMS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=4f26331b9d48493c8ccbbe65530002fa'

const Teams = ({ teams }) => {
  const classes = useStyles()
  //
  useEffect(() => {
    fetch(API_TEAMS)
      .then(res => res.json())
      .then(result => {
        console.log('This is the result data', result)
      })
  }, [])
  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {teams?.map(team => {
          return (
            <Grid item key={team.TeamID} xs={12} sm={12} md={4}>
              <TeamCard team={team} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Teams
