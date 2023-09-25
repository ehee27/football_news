import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Typography,
  Grid,
  Button,
  makeStyles,
  Container,
} from '@material-ui/core'

const API_PLAYERS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Players/{team}?key=4f26331b9d48493c8ccbbe65530002fa'

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    // padding: '0px 20px 0px 20px',
    // height: '100%',
  },
  teamBox: {
    backgroundColor: 'rgb(221, 221, 221)',
    display: 'flex',
    padding: '10px 5px 10px 5px',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 10px 0px 10px',
    height: '10%',
  },
  name: {
    marginLeft: '20px',
  },
  middle: {
    background: 'white',
    padding: '20px',
    height: '20%',
    backgroundColor: 'black',
    color: 'white',
  },
  news: {
    background: 'white',
    // border: '2pt solid rgb(212, 212, 212)',
    padding: '20px',
    height: '50%',
  },
  button: {
    width: '10%',
    marginTop: '10px',
    backgroundColor: 'orange',
    border: '2pt solid orange',
    color: 'white',
    '&:hover': {
      transition: '.2s ease',
      backgroundColor: 'rgba(255, 166, 0, 0.53)',
    },
  },
  link: {
    textDecoration: 'none',
  },
})

const TeamDetails = ({ teams }) => {
  const classes = useStyles()
  //
  const { id } = useParams()
  const [news, setNews] = useState([])
  //
  useEffect(() => {
    let target
    if (team) target = team[0].Key

    fetch(
      // `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${target}?key=d650a9d698eb47cab07c36427cbc3434`
      `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${target}?key=1f12ca4661284f288d5f6bbd9e7e503b`
    )
      .then(res => res.json())
      .then(result => {
        // console.log(result)
        setNews(result)
      })
  }, [])

  let team
  if (teams) team = teams.filter(item => item.TeamID === Number(id))
  //

  return (
    <Container className={classes.container}>
      {team?.map((team, i) => {
        return (
          <Grid className={classes.teamBox} key={i} container spacing={0}>
            <Grid className={classes.banner} item xs={12} sm={12} md={12}>
              <img
                src={team.WikipediaLogoUrl}
                alt="team-logo"
                width="100px"
                height="100px"
              ></img>
              <Typography className={classes.name} variant="h4">
                {team.City} {team.Name}
              </Typography>
            </Grid>
            {/* ////////////////////////////////////// */}
            <Grid className={classes.middle} item xs={12} sm={12} md={12}>
              <Typography variant="body1">
                Head Coach:{' '}
                <span style={{ color: 'orange' }}>{team.HeadCoach}</span>
              </Typography>
              <Typography variant="body1">
                Offensive Coordinator:{' '}
                <span style={{ color: 'orange' }}>
                  {team.OffensiveCoordinator}
                </span>
              </Typography>
            </Grid>
            <Grid className={classes.news} item xs={12} sm={12} md={12}>
              {news.map((item, i) => {
                return (
                  <Grid key={i}>
                    <Typography variant="h4">{item.Title}</Typography>
                    <Typography variant="p">{item.OriginalSource}</Typography>
                    <p className="time-ago">{item.TimeAgo}</p>
                    <Typography variant="body1" gutterBottom>
                      {item.Content}
                    </Typography>
                    <Link
                      className={classes.link}
                      to={item.OriginalSourceUrl}
                      target="_blank"
                    >
                      <Button
                        className={classes.button}
                        // variant="contained"
                        color="primary"
                      >
                        Source
                      </Button>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        )
      })}
    </Container>
  )
}

export default TeamDetails
