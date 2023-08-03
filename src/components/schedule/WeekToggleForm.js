import { Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    padding: '10px 0px 10px 0px',
    width: '100%',
    marginRight: '10px',
    // height: '100%',
  },
  button: {
    width: '30%',
    height: '27px',
    marginTop: '10px',
    border: '2pt solid orange',
    color: 'white',
    '&:hover': {
      transition: '.3s ease',
      backgroundColor: 'rgba(255, 166, 0, 0.53)',
    },
  },
})

const WeekForm = ({ handleWeek, handleSubmit }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <form>
        <select className="select" onChange={handleWeek}>
          <option value={1}>week 1</option>
          <option value={2}>week 2</option>
          <option value={3}>week 3</option>
          <option value={4}>week 4</option>
          <option value={5}>week 5</option>
          <option value={6}>week 6</option>
          <option value={7}>week 7</option>
          <option value={8}>week 8</option>
          <option value={9}>week 9</option>
          <option value={10}>week 10</option>
          <option value={11}>week 11</option>
          <option value={12}>week 12</option>
          <option value={13}>week 13</option>
          <option value={14}>week 14</option>
          <option value={15}>week 15</option>
          <option value={16}>week 16</option>
        </select>
        <button className="weeks-button" onClick={handleSubmit} size="small">
          SCORES
        </button>
      </form>
    </Grid>
  )
}

export default WeekForm
