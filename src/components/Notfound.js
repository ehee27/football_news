import { Container, Typography, Grid, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
//
const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    // padding: '0px 20px 0px 20px',
    // height: '100%',
  },
  box: {
    backgroundColor: 'rgb(221, 221, 221)',
    display: 'flex',
    padding: '10px 5px 10px 5px',
    marginTop: '20px',
    marginBottom: '20px',
  },
})

const Notfound = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid className={classes.box}>
        <Typography>
          Page not found. Please return <Link to="/">Home.</Link>
        </Typography>
      </Grid>
    </Container>
  )
}

export default Notfound
