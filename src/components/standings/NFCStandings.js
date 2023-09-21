import { useEffect, useState } from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    padding: '20px 10px 10px 10px',
  },
  teamRow: {
    display: 'flex',
    padding: '5px',
    background: 'white',
    marginBottom: '5px',
    boxShadow: '2px 2px 5px grey',
    borderRadius: '.3rem',
    width: '90%',
  },
  name: {},
  winLoss: {
    marginLeft: '5px',
    color: 'orange',
  },
  conferenceBox: {
    display: 'flex',
    fontSize: '10pt',
    fontWeight: 'bold',
  },
  divisionBox: {},
})

const gamesAPI = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=1f12ca4661284f288d5f6bbd9e7e503b`

const NFCStandings = () => {
  const classes = useStyles()
  const [games, setGames] = useState(null)
  useEffect(() => {
    fetch(gamesAPI)
      .then(res => res.json())
      .then(result => {
        setGames(result)
      })
  }, [])

  return (
    <Container className={classes.container}>
      <Grid className={classes.conferenceBox} container spacing={0}>
        <Grid className={classes.divisionBox} item xs={12} sm={6} md={3}>
          {games
            ?.filter(
              item => item.Conference === 'NFC' && item.Division === 'East'
            )
            .map(item => {
              return (
                <div key={item.Name}>
                  <div className={classes.teamRow}>
                    <div className={classes.name}>{item.Name}</div>
                    <div className={classes.winLoss}>
                      {item.Wins} - {item.Losses}
                    </div>
                  </div>
                </div>
              )
            })}
        </Grid>
        {/* ///////// */}
        <Grid className={classes.divisionBox} item xs={12} sm={6} md={3}>
          {games
            ?.filter(
              item => item.Conference === 'NFC' && item.Division === 'West'
            )
            .map(item => {
              return (
                <div key={item.Name}>
                  <div className={classes.teamRow}>
                    <div className={classes.name}>{item.Name}</div>
                    <div className={classes.winLoss}>
                      {item.Wins} - {item.Losses}
                    </div>
                  </div>
                </div>
              )
            })}
        </Grid>
        <Grid className={classes.divisionBox} item xs={12} sm={6} md={3}>
          {games
            ?.filter(
              item => item.Conference === 'NFC' && item.Division === 'North'
            )
            .map(item => {
              return (
                <div key={item.Name}>
                  <div className={classes.teamRow}>
                    <div className={classes.name}>{item.Name}</div>
                    <div className={classes.winLoss}>
                      {item.Wins} - {item.Losses}
                    </div>
                  </div>
                </div>
              )
            })}
        </Grid>
        <Grid className={classes.divisionBox} item xs={12} sm={6} md={3}>
          {games
            ?.filter(
              item => item.Conference === 'NFC' && item.Division === 'South'
            )
            .map(item => {
              return (
                <div key={item.Name}>
                  <div className={classes.teamRow}>
                    <div className={classes.name}>{item.Name}</div>
                    <div className={classes.winLoss}>
                      {item.Wins} - {item.Losses}
                    </div>
                  </div>
                </div>
              )
            })}
        </Grid>
      </Grid>
    </Container>
  )
}

export default NFCStandings
