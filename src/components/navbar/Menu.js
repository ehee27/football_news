import { Link } from 'react-router-dom'
import { Container, Typography, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  menu: {
    width: '100%',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    border: '2pt solid transparent',
    borderRadius: '.25rem',
    padding: '7px',
    marginRight: '10px',
    '&:hover': {
      transition: '.2s ease',
      border: '2pt solid white',
    },
  },
})

const Menu = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.meanu}>
        <Link className={classes.link} to="/">
          HOME
        </Link>
        <Link className={classes.link} to="/teams">
          TEAMS
        </Link>

        <a className={classes.link} href="#standings">
          STANDINGS
        </a>
      </Grid>
    </>
  )
}

export default Menu
