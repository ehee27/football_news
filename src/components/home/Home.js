import './home.css'
import { slides } from './carouselSlides'
import Item from './CarouselCard'
import Recap from '../schedule/Schedule'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import NewsFeed from './NewsFeed'
import Standings from '../standings/Standings'

const useStyles = makeStyles({
  container: {
    marginTop: '10px',
  },
  homeBox: {
    backgroundColor: 'rgb(221, 221, 221)',
    display: 'flex',
    padding: '10px 5px 10px 5px',
  },
  homeLeft: { border: '2pt solid green', height: '65vh' },
  leftTop: { height: '55%' },
  leftMid: {
    height: '5%',
    padding: '0px 17px 0px 17px',
    marginTop: '10px',
    // border: '2pt solid red',
  },
  leftBottom: {
    height: '36%',
    padding: '0px 17px 0px 17px',
    overflowY: 'scroll',
    // border: '2pt solid red',
  },
  homeRight: {
    border: '2pt solid green',
    height: '65vh',
    paddingBottom: '20px',
  },
  newsFeed: {
    height: '97%',
    overflowY: 'scroll',
  },
})

const Home = ({ schedule }) => {
  const classes = useStyles()
  //

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
          {/* ///////////////////////////////////////////////////// */}
          {/* <Grid className={classes.leftFlex} container spacing={1}>
            <Grid className={classes.leftMid} item xs={12} sm={12} md={12}>
              <Typography variant="h5">Upcoming Games</Typography>
            </Grid> */}
          {/* ///////////////////////////////////////////////////// */}
          {/* <Grid className={classes.leftBottom} item xs={12} sm={12} md={12}>
              <Recap schedule={schedule} />
            </Grid>
          </Grid> */}

          <Grid className={classes.leftMid}>
            <Typography variant="h5">Upcoming Games</Typography>
          </Grid>
          {/* ///////////////////////////////////////////////////// */}
          <Grid className={classes.leftBottom}>
            <Recap schedule={schedule} />
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
