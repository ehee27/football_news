import { createContext, useState, useEffect } from 'react'

const API_TEAMS =
  'https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=1f12ca4661284f288d5f6bbd9e7e503b'

const TeamsContext = createContext()

export const TeamsContextProvider = ({ children }) => {
  const [teams, setTeams] = useState()
  useEffect(() => {
    fetch(API_TEAMS)
      .then(res => res.json())
      .then(result => {
        setTeams(result)
      })
  }, [])
  //
  return (
    <>
      <TeamsContext.Provider value={teams}>{children}</TeamsContext.Provider>
    </>
  )
}
//

export default TeamsContext
