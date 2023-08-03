import React from 'react'
import './schedule.css'

const BoxScore = ({ game }) => {
  return (
    <div className="boxScore-container">
      <div className="box-banner">
        <div className="homeTeam">
          <div className="name">{game.HomeTeam}</div>
          <div className="score">{game.HomeScore}</div>
        </div>
        <div className="awayTeam">
          <div className="name">{game.AwayTeam}</div>
          <div className="score">{game.AwayScore}</div>
        </div>
      </div>
      <div className="box-body">
        {/* <button className="body-button">Button 1</button>
        <button className="body-button">Button 2</button> */}
      </div>
    </div>
  )
}

export default BoxScore
