import './home.css'
import { slides } from './carouselSlides'
import Item from './CarouselCard'
import Recap from '../schedule/Recap'
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
    // marginTop: '20px',
    // borderRadius: '.25rem',
    // borderBottom: '6pt solid green',
    padding: '10px 5px 10px 5px',
  },
  homeLeft: {},
  leftTop: { height: '44vh' },
  leftMid: { padding: '0px 17px 0px 17px' },
  leftBottom: {
    padding: '0px 17px 0px 17px',
    height: '20vh',
    overflowY: 'scroll',
  },
  homeRight: {},
  newsFeed: {
    height: '63.5vh',
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

          <Grid className={classes.leftMid}>
            <Typography>Upcoming Games</Typography>
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
