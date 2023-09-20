// when we map the teams array we use the outer Grid as container spacing and then them 'item' grid WITHIN the mapping - include the key

// import React, { useState, useEffect, useContext } from 'react'
import TeamCard from './TeamCard'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    padding: '20px 10px 10px 10px',
  },
})

const Teams = ({ teams }) => {
  const classes = useStyles()
  //
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
