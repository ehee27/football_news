import React from 'react'
// import './teams.css'
import { Link } from 'react-router-dom'
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardActions,
  makeStyles,
} from '@material-ui/core'
import IconButton from '@mui/material/IconButton'
import SportsFootballIcon from '@mui/icons-material/SportsFootball'
import ShareIcon from '@mui/icons-material/Share'
//
const useStyles = makeStyles({
  cardContainer: {
    backgroundColor: 'rgb(243, 243, 243)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: '2px 2px 5px grey',
    border: '2pt solid white',
    '&:hover': {
      transition: '.3s ease',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 30px 10px 30px',
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10px',
  },
  link: {
    textDecoration: 'none',
  },
})

const TeamCard = ({ team }) => {
  // console.log(team)
  //
  const classes = useStyles()
  return (
    <>
      <Link className={classes.link} to={`/teams/${team.TeamID}`}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.cardContent}>
            <img
              src={team.WikipediaLogoUrl}
              alt="team-logo"
              width="100px"
              height="100px"
            ></img>

            <Grid className={classes.name}>
              <Typography className={classes.name} variant="h4">
                {team.Name}
              </Typography>
            </Grid>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <SportsFootballIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </Link>
    </>
  )
}

export default TeamCard
