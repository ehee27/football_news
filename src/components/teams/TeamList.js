// when we map the teams array we use the outer Grid as container spacing and then them 'item' grid WITHIN the mapping - include the key

// import React, { useState, useEffect, useContext } from 'react'
//
import TeamCard from './TeamCard'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'

const useStyles = makeStyles({
  container: {
    padding: '20px 10px 10px 10px',
  },
})

// const seasonAPI =
//   'https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=1f12ca4661284f288d5f6bbd9e7e503b'

const gamesAPI = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=1f12ca4661284f288d5f6bbd9e7e503b`

const Teams = ({ teams }) => {
  const classes = useStyles()
  // const [season, setSeason] = useState(0)
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(gamesAPI)
      .then(res => res.json())
      .then(result => {
        setGames(result)
      })
  }, [])

  //
  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        {/* {games
          ?.filter(
            item => item.Conference === 'AFC' && item.Division === 'East'
          )
          .map(item => {
            return <div key={item.Name}>{item.Name}</div>
          })} */}
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
