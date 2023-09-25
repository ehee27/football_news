import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './navbar.css'
import Menu from './Menu'
import ScoreBoard from '../schedule/ScoreBoard'
//
const useStyles = makeStyles({
  container: {
    // padding: '0px 10px 0px 10px',
    boxShadow: '0pt 3pt 5pt black',
    backgroundImage: 'linear-gradient(rgb(56, 56, 56), rgb(0, 0, 0))',
    borderLeft: '10pt solid green',
    // height: '22vh',
  },
  navTop: {
    borderBottom: '2pt solid silver',
    // padding: '0px 3px 0px 3px',
  },
  navBottom: {
    display: 'flex',
    color: 'white',
    padding: '15px 0px 10px 0px',
    // padding: '7px 0px 7px 0px',
  },
  bottomLeft: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {},
})

const Navbar = () => {
  //
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Grid className={classes.navTop}>
        <ScoreBoard />
      </Grid>
      <Grid className={classes.navBottom} container spacing={2}>
        <Grid item className={classes.bottomLeft} xs={12} sm={12} md={6}>
          <Typography variant="h2" gutterBottom>
            NFL News
          </Typography>
          <Menu />
        </Grid>
        <Grid item className={classes.bottomRight} xs={12} sm={12} md={3}>
          <Link
            className={classes.link}
            to="https://www.sportingnews.com/us/nfl/news/super-bowl-squares-grid-2023-best-numbers/ltur0ayv6wvsdkyjjk2cnmdo"
            target="_blank"
          >
            <div className="column2"></div>
          </Link>
        </Grid>
        <Grid item className={classes.bottomRight} xs={12} sm={12} md={3}>
          <Link
            className={classes.link}
            to="https://tv.youtube.com/learn/nflsundayticket/?utm_source=pm&utm_medium=gs&utm_content=txt&utm_campaign=ytnflst&gclid=Cj0KCQjwoK2mBhDzARIsADGbjer884OfAOrUUGBOsC6aiwiS4N5xRd6BSrMuaJQ_hegXgJ17f_PNmykaArCjEALw_wcB&gclsrc=aw.ds"
            target="_blank"
          >
            <div className="column3"></div>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Navbar
