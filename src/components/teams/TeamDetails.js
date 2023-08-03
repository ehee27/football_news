import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core'

const API_PLAYERS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Players/{team}?key=4f26331b9d48493c8ccbbe65530002fa'

const useStyles = makeStyles({
  container: {
    padding: '20px 10px 10px 10px',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 30px 10px 30px',
  },
  name: {
    marginLeft: '30px',
  },
  details: {
    // borderBottom: '2pt solid rgb(212, 212, 212)',
    padding: '10px',
  },
  news: {
    border: '2pt solid rgb(212, 212, 212)',
    borderRadius: '.25rem',
    padding: '10px 17px 20px 17px',
    height: '50vh',
  },
  button: {
    width: '10%',
    marginTop: '10px',
    border: '2pt solid orange',
    color: 'white',
    '&:hover': {
      transition: '.2s ease',
      backgroundColor: 'rgba(255, 166, 0, 0.53)',
    },
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
      `https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${target}?key=4f26331b9d48493c8ccbbe65530002fa`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setNews(result)
      })
  }, [])

  let team
  if (teams) team = teams.filter((item) => item.TeamID === Number(id))
  //

  return (
    <>
      {team?.map((team, i) => {
        return (
          <Container className={classes.container} key={i}>
            <Grid className={classes.banner}>
              <img
                src={team.WikipediaLogoUrl}
                alt="team-logo"
                width="100px"
                height="100px"
              ></img>
              <Typography className={classes.name} variant="h3">
                {team.City} {team.Name}
              </Typography>
            </Grid>
            {/* ////////////////////////////////////// */}
            <Grid className={classes.details}>
              <Typography variant="h6">Head Coach: {team.HeadCoach}</Typography>
              <Typography variant="h6">
                Offensive Coordinator: {team.OffensiveCoordinator}
              </Typography>
            </Grid>
            <Grid className={classes.news}>
              {news.map((item, i) => {
                return (
                  <Grid key={i}>
                    <Typography variant="h4">{item.Title}</Typography>
                    <Typography variant="p">{item.OriginalSource}</Typography>
                    <p className="time-ago">{item.TimeAgo}</p>
                    <Typography variant="body1" gutterBottom>
                      {item.Content}
                    </Typography>
                    <Link to={item.OriginalSourceUrl} target="_blank">
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
          </Container>
        )
      })}
    </>
  )
}

export default TeamDetails
