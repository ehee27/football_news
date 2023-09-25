import './home.css'
import { slides } from './carouselSlides'
import Item from './CarouselCard'
import TVSchedule from '../schedule/Schedule'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import NewsFeed from './NewsFeed'
import Standings from '../standings/Standings'
import { useState, useEffect } from 'react'

const useStyles = makeStyles({
  container: {
    marginTop: '10px',
  },
  homeBox: {
    backgroundColor: 'rgb(221, 221, 221)',
    display: 'flex',
    padding: '3px 5px 0px 0px',
    borderBottom: '7pt solid green',
  },
  // homeLeft: { height: '65vh', border: '4pt solid red' },
  homeLeft: { height: '64.5vh' },
  leftTop: { paddingLeft: '5px' },
  leftMid: {
    height: '5%',
    padding: '0px 10px 0px 10px',
    marginBottom: '5px',
    // border: '2pt solid blue',
  },
  leftBottom: {
    height: '35%',
    padding: '0px 10px 0px 5px',
    overflowY: 'scroll',
  },
  homeRight: {
    // border: '2pt solid green',
    height: '65vh',
    paddingBottom: '20px',
    // border: '4pt solid yellow',
  },
  newsFeed: {
    height: '97%',
    overflowY: 'scroll',
  },
})

const standingsAPI = `https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=1f12ca4661284f288d5f6bbd9e7e503b`

const Home = ({ schedule }) => {
  const classes = useStyles()
  //
  const [standings, setStandings] = useState({})
  //
  useEffect(() => {
    fetch(standingsAPI)
      .then(res => res.json())
      .then(result => {
        setStandings(result)
        // console.log('Standings:', standings)
      })
  }, [])

  return (
    <Container className={classes.container}>
      <Grid className={classes.homeBox} container spacing={0}>
        <Grid item className={classes.homeLeft} xs={12} sm={9} md={8}>
          {/* ///////////////////////////////////////////////////// */}
          <Grid className={classes.leftTop}>
            <Carousel interval={7000} duration={1000}>
              {slides.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </Grid>

          <Grid className={classes.leftMid}>
            <Typography variant="h5">Upcoming Games</Typography>
          </Grid>
          {/* ///////////////////////////////////////////////////// */}
          <Grid className={classes.leftBottom}>
            <TVSchedule schedule={schedule} />
          </Grid>
          {/* ///////////////////////////////////////////////////// */}
        </Grid>
        <Grid item className={classes.homeRight} xs={12} sm={3} md={4}>
          <Typography variant="h5">Top Headlines</Typography>
          <Grid className={classes.newsFeed}>
            <NewsFeed />
          </Grid>
        </Grid>
      </Grid>
      <Grid id="standings" className={classes.homeLower}>
        <Standings />
      </Grid>
    </Container>
  )
}

export default Home
