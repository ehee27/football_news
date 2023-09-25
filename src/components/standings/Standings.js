import { useEffect, useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core'
// import StandingsBoard from './StandingsBoard'
import AFCStandings from './AFCStandings'
import NFCStandings from './NFCStandings'
import afcLogo from '../../img/afcLogo.png'
import nfcLogo from '../../img/nfcLogo.png'

const useStyles = makeStyles({
  container: {
    backgroundColor: 'rgb(221, 221, 221)',
    padding: '0px 5px 10px 5px',
    borderRadius: '.25rem',
    // marginTop: '5px',
  },
  standingsBanner: {
    backgroundImage: 'linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0))',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  },
  bannerUpper: {
    display: 'flex',
    padding: '7px 10px 5px 10px',
  },
  bannerUpperTitle: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px',
  },
  bannerUpperLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '50px',
  },
  bannerLeftButtons: {
    display: 'flex',
    paddingBottom: '10px',
    paddingLeft: '10px',
  },
  week: {
    color: 'orange',
  },
  bannerMiddle: {
    padding: '10px 10px 10px 10px',
  },
  bannerLower: {
    display: 'flex',
    backgroundColor: 'white',
    borderBottomLeftRadius: '.5rem',
    borderBottomRightRadius: '.5rem',
  },
  playoffTitle: {
    color: 'white',
  },
  button: {
    width: '10%',
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
  seedTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginLeft: '10px',
  },
  seed: {
    color: 'gray',
    padding: '2px 5px 2px 5px',
    fontSize: '14pt',
    marginRight: '10px',
  },
})

//
const weekAPI =
  'https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=1f12ca4661284f288d5f6bbd9e7e503b'

const Standings = () => {
  const classes = useStyles()
  //
  const [week, setWeek] = useState(0)
  useEffect(() => {
    fetch(weekAPI)
      .then(res => res.json())
      .then(result => {
        setWeek(result)
      })
  }, [])

  // standings state

  const [activeConference, setActiveConference] = useState('AFC')
  const handleAFC = () => {
    setActiveConference('AFC')
  }
  const handleNFC = () => {
    setActiveConference('NFC')
  }

  return (
    <Container className={classes.container}>
      <Grid className={classes.standingsBanner} container spacing={0}>
        <Grid className={classes.bannerUpper} item xs={12} sm={12} md={6}>
          <Grid className={classes.bannerUpperTitle}>
            <Typography className={classes.title} variant="h6">
              Standings
            </Typography>
            <Typography className={classes.week} variant="h3">
              WEEK {week}
            </Typography>
          </Grid>
          <Grid className={classes.bannerUpperLogo}>
            {activeConference === 'AFC' ? (
              activeConference === 'NFC' ? (
                <span>This is IF BOTH</span>
              ) : (
                <Grid className={classes.seedTitle}>
                  {/* <span>Playoff Seeding</span> */}
                  <img
                    className={classes.logo}
                    alt="afc-logo"
                    src={afcLogo}
                    height="60px"
                    width="60px"
                  ></img>
                </Grid>
              )
            ) : (
              <Grid className={classes.seedTitle}>
                {/* <span>Playoff Seeding</span> */}
                <img
                  className={classes.logo}
                  alt="nfc=logo"
                  src={nfcLogo}
                  height="60px"
                  width="60px"
                ></img>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid className={classes.bannerMiddle}>
          <Grid className={classes.bannerLeftButtons}>
            <Button
              className={classes.button}
              id="afc"
              variant="outlined"
              onClick={handleAFC}
            >
              AFC
            </Button>
            <Button
              className={classes.button}
              id="nfc"
              variant="outlined"
              onClick={handleNFC}
            >
              NFC
            </Button>
          </Grid>
        </Grid>

        <Grid className={classes.bannerLower} container spacing={1}></Grid>
      </Grid>

      {/* // ---- 2 POSSIBLE TERNARY TRUTHS - if both then Expression 1  */}
      {activeConference === 'AFC' ? (
        activeConference === 'NFC' ? (
          <span></span>
        ) : (
          <AFCStandings />
        )
      ) : (
        <NFCStandings />
      )}
    </Container>
  )
}

export default Standings

// {activeConference === 'AFC' ? (
//   activeConference === 'NFC' ? (
//     <span>This is IF BOTH</span>
//   ) : (
//     <>
//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           1. Chiefs 13-3
//         </Typography>
//       </Grid>

//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           2. Bills 13-3
//         </Typography>
//       </Grid>

//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           3. Bengals 12 - 4
//         </Typography>
//       </Grid>
//     </>
//   )
// ) : (
//   <>
//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         1. Eagles 13 - 4
//       </Typography>
//     </Grid>

//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         2. Vikings 13 - 4
//       </Typography>
//     </Grid>

//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         3. 49ers 13 - 4
//       </Typography>
//     </Grid>
//   </>
// )}

// {activeConference === 'AFC' ? (
//   activeConference === 'NFC' ? (
//     <span>This is IF BOTH</span>
//   ) : (
//     <>
//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           1. Chiefs 13-3
//         </Typography>
//       </Grid>

//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           2. Bills 13-3
//         </Typography>
//       </Grid>

//       <Grid item xs={12} sm={12} md={3}>
//         <Typography className={classes.seed} variant="h6">
//           3. Bengals 12 - 4
//         </Typography>
//       </Grid>
//     </>
//   )
// ) : (
//   <>
//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         1. Eagles 13 - 4
//       </Typography>
//     </Grid>

//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         2. Vikings 13 - 4
//       </Typography>
//     </Grid>

//     <Grid item xs={12} sm={12} md={3}>
//       <Typography className={classes.seed} variant="h6">
//         3. 49ers 13 - 4
//       </Typography>
//     </Grid>
//   </>
// )}
