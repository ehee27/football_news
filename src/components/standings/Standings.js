import { useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core'
import StandingsBoard from './StandingsBoard'
import afcLogo from '../../img/afcLogo.png'
import nfcLogo from '../../img/nfcLogo.png'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'rgb(221, 221, 221)',
    padding: '0px 5px 10px 5px',
    borderRadius: '.25rem',
    // marginTop: '5px',
  },
  standingsBoard: {
    display: 'flex',
  },
  standingsBanner: {
    backgroundImage: 'linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0))',
    display: 'flex',
    padding: '10px 10px 5px 10px',
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  },
  bannerLeft: {
    display: 'flex',
    padding: '0px 0px 5px 10px',
  },
  bannerLeftTitle: {
    display: 'flex',
    flexDirection: 'column',
    // border: '2pt solid orange',
    width: '60%',
  },
  bannerLeftLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2pt solid green',
    width: '40%',
  },
  bannerLeftButtons: {
    display: 'flex',
    // paddingTop: '10px',
  },
  week: {
    color: 'orange',
  },
  bannerRight: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: '0px 0px 10px 0px',
    // border: '1pt solid rgb(212, 212, 212)',
  },
  playoffTitle: {
    color: 'white',
  },
  playoffSeed: {
    color: 'white',
    fontSize: '10pt',
  },
  button: {
    width: '50%',
    height: '27px',
    fontSize: '9pt',
    marginRight: '10px',
    border: '2pt solid orange',
    color: 'white',
    '&:hover': {
      transition: '.3s ease',
      backgroundColor: 'rgba(255, 166, 0, 0.53)',
    },
  },
})

// Standings API data
const API =
  'https://api.sportsdata.io/v3/nfl/scores/json/Standings/2022?key=4f26331b9d48493c8ccbbe65530002fa'

const AFC = [
  { id: 1, div: 'AFC', con: 'West' },
  { id: 2, div: 'AFC', con: 'East' },
  { id: 3, div: 'AFC', con: 'North' },
  { id: 4, div: 'AFC', con: 'South' },
]
const NFC = [
  { id: 5, div: 'NFC', con: 'West' },
  { id: 6, div: 'NFC', con: 'East' },
  { id: 7, div: 'NFC', con: 'North' },
  { id: 8, div: 'NFC', con: 'South' },
]

const Standings = () => {
  const classes = useStyles()
  // standings state
  const [standings, setStandings] = useState([])
  const [activeConference, setActiveConference] = useState('AFC')
  const handleAFC = () => {
    setActiveConference('AFC')
  }
  const handleNFC = () => {
    setActiveConference('NFC')
  }
  //
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(result => {
        setStandings(result)
      })
  }, [])

  return (
    <Container className={classes.container}>
      {/* /////////////////////////////////////////////////////////////// */}
      <Grid className={classes.standingsBanner} container spacing={0}>
        <Grid className={classes.bannerLeft} item xs={12} sm={12} md={6}>
          {/* <Grid className={classes.leftTop}> */}
          <Grid className={classes.bannerLeftTitle}>
            <Typography className={classes.title} variant="h6">
              Standings
            </Typography>
            <Typography className={classes.week} variant="h4">
              WEEK 18
            </Typography>
            <Grid className={classes.bannerLeftButtons}>
              <Button
                className={classes.button}
                id="afc"
                variant="outlined"
                // color="primary"
                onClick={handleAFC}
              >
                AFC
              </Button>
              <Button
                className={classes.button}
                id="nfc"
                variant="outlined"
                // color="primary"
                onClick={handleNFC}
              >
                NFC
              </Button>
            </Grid>
          </Grid>
          <Grid className={classes.bannerLeftLogo}>
            {activeConference === 'AFC' ? (
              activeConference === 'NFC' ? (
                <spa></spa>
              ) : (
                <>
                  <img src={afcLogo} height="90px" width="90px"></img>
                </>
              )
            ) : (
              <>
                <img src={nfcLogo} height="90px" width="90px"></img>
              </>
            )}
          </Grid>
          {/* </Grid> */}
        </Grid>

        <Grid className={classes.bannerRight} item xs={12} sm={12} md={6}>
          <Typography className={classes.playoffTitle}>
            Playoff seeds.....
          </Typography>
          <Grid className={classes.playoffSeeds}>
            <Typography className={classes.playoffSeed}>
              Playoof seed #1.....
            </Typography>
            <Typography className={classes.playoffSeed}>
              Playoof seed #2.....
            </Typography>
            <Typography className={classes.playoffSeed}>
              Playoof seed #3.....
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* // ---- 2 POSSIBLE TERNARY TRUTHS - if both then Expression 1  */}
      {activeConference === 'AFC' ? (
        activeConference === 'NFC' ? (
          <span></span>
        ) : (
          <Grid className={classes.standingsBoard} container spacing={3}>
            {AFC.map(team => {
              return (
                <Grid
                  key={team.id}
                  className={classes.conference}
                  item
                  xs={12}
                  sm={12}
                  md={3}
                >
                  <StandingsBoard
                    standings={standings}
                    div={team.div}
                    con={team.con}
                  />
                </Grid>
              )
            })}
          </Grid>
        )
      ) : (
        <Grid className={classes.standingsBoard} container spacing={3}>
          {NFC.map(team => {
            return (
              <Grid
                key={team.id}
                className={classes.conference}
                item
                xs={12}
                sm={12}
                md={3}
              >
                <StandingsBoard
                  standings={standings}
                  div={team.div}
                  con={team.con}
                />
              </Grid>
            )
          })}
        </Grid>
      )}
    </Container>
  )
}

export default Standings
