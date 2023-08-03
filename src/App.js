import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { TeamsContext } from './components/context/teamsContext'
//
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Home from './components/home/Home'
import TeamList from './components/teams/TeamList'
import TeamDetails from './components/teams/TeamDetails'
import ScoreBoard from './components/schedule/ScoreBoard'
import Standings from './components/standings/Standings'
import Recap from './components/schedule/Recap'
//
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'

let fontTheme = createTheme()
fontTheme = responsiveFontSizes(fontTheme)

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: green,
  },
  typography: {
    h1: {
      fontFamily: 'Russo One',
    },
    h2: {
      fontFamily: 'Russo One',
    },
    h3: {
      fontFamily: 'Russo One',
    },
    h4: {
      fontFamily: 'Russo One',
    },
    h5: {
      fontFamily: 'Russo One',
    },
    h6: {
      fontFamily: 'Russo One',
      fontSize: '13pt',
      color: 'grey',
    },
    subtitle1: {
      fontFamily: 'Russo One',
    },

    body1: {
      fontFamily: 'Exo 2',
    },
    fontFamily: 'Exo 2',
    // fontFamily: 'Russo One',
  },
})

const API_TEAMS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=4f26331b9d48493c8ccbbe65530002fa'
const API_SCHEDULE =
  'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=4f26331b9d48493c8ccbbe65530002fa'

function App() {
  //
  const [teams, setTeams] = useState([])
  const [schedule, setSchedule] = useState([])
  //
  useEffect(() => {
    fetch(API_TEAMS)
      .then(res => res.json())
      .then(result => {
        setTeams(result)
      })
  }, [])
  useEffect(() => {
    fetch(API_SCHEDULE)
      .then(res => res.json())
      .then(result => {
        setSchedule(result)
      })
  }, [])

  return (
    <ThemeProvider theme={fontTheme}>
      <ThemeProvider theme={theme}>
        {/* <TeamsContext.Provider value={teams}> */}
        <div className="App">
          <Router>
            <Navbar />

            <Routes>
              <Route index element={<Home schedule={schedule} />} />
              <Route path="teams" element={<TeamList teams={teams} />} />
              <Route path="teams/:id" element={<TeamDetails teams={teams} />} />
              <Route path="scoreboard" element={<ScoreBoard />} />
              <Route path="standings" element={<Standings />} />
              <Route path="recap" element={<Recap schedule={schedule} />} />
            </Routes>
            <Footer />
          </Router>
        </div>
        {/* </TeamsContext.Provider> */}
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App
