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
import Schedule from './components/schedule/Schedule'
import Notfound from './components/Notfound'
import AFCStandings from './components/standings/AFCStandings'
import NFCStandings from './components/standings/NFCStandings'
// import { TeamsContextProvider } from './components/context/teamsContext'
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
  'https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=1f12ca4661284f288d5f6bbd9e7e503b'
const API_SCHEDULE =
  'https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=1f12ca4661284f288d5f6bbd9e7e503b'

function App() {
  //
  const [teams, setTeams] = useState([])
  const [schedule, setSchedule] = useState([])
  const [standings, setStandings] = useState([])
  //
  useEffect(() => {
    fetch(API_TEAMS)
      .then(res => res.json())
      .then(result => {
        setTeams(result)
      })
  }, [teams])
  useEffect(() => {
    fetch(API_SCHEDULE)
      .then(res => res.json())
      .then(result => {
        setSchedule(result)
      })
  }, [schedule])
  // useEffect(() => {
  //   fetch(standingsAPI)
  //     .then(res => res.json())
  //     .then(result => {
  //       setStandings(result)
  //     })
  // }, [standings])

  return (
    <ThemeProvider theme={fontTheme}>
      <ThemeProvider theme={theme}>
        {/* <TeamsContextProvider> */}
        <div className="App">
          <Router>
            <Navbar />

            <Routes>
              <Route index element={<Home schedule={schedule} />} />
              <Route path="teams" element={<TeamList teams={teams} />} />
              <Route path="teams/:id" element={<TeamDetails teams={teams} />} />
              <Route path="scoreboard" element={<ScoreBoard />} />
              <Route path="standings" element={<Standings />} />
              <Route path="recap" element={<Schedule schedule={schedule} />} />
              <Route path="afc-standings" element={<AFCStandings />} />
              <Route path="nfc-standings" element={<NFCStandings />} />
              <Route exact path="*" element={<Notfound />} />
            </Routes>
            <Footer />
          </Router>
        </div>
        {/* </TeamsContextProvider> */}
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App
