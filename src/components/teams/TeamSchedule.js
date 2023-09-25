import React, { useState, useEffect } from 'react'
import './schedule.css'

const GAMES_API =
  'https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/{season}/{week}?key=4f26331b9d48493c8ccbbe65530002fa'
//
//

const TeamSchedule = () => {
  // set my state
  const [games, setGames] = useState([])
  const [year, setYear] = useState(2022)
  const [week, setWeek] = useState(1)

  // use effect will fetch the newest (2021, week 1) data upon mount
  useEffect(() => {
    setYear(year)
    setWeek(week)
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2022/1?key=4f26331b9d48493c8ccbbe65530002fa`
    )
      .then(res => res.json())
      .then(result => {
        // setGames(result)
        // console.log(result)
      })
  }, [games])

  // fetchGames is called on submit and re-fetches the selected year and week
  const fetchGames = (year, week) => {
    fetch(
      `https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/${year}/${week}?key=4f26331b9d48493c8ccbbe65530002fa`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }

  // hadles the year and week selection
  const handleYear = e => {
    setYear(e.target.value)
    // console.log('YEAR')
  }
  const handleWeek = e => {
    setWeek(e.target.value)
    // console.log('WEEK')
  }
  const handleSubmit = e => {
    e.preventDefault()
    fetchGames(year, week)

    // console.log('This is the year and week....', year, week)
  }
  return (
    <div className="comp-container">
      <h1>Welcome to Team Games</h1>
      <form>
        {/* <input type='text' value={year} onChange={handleYear}/> */}
        <select onChange={handleYear}>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
        </select>
        <select onChange={handleWeek}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={handleSubmit}>STATS</button>
      </form>
      <div className="schedule-container">
        {games.map(game => {
          return <div className="game-container">{}</div>
        })}
      </div>
    </div>
  )
}

export default TeamSchedule
