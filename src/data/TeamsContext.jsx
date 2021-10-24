import React, {useState, useEffect, useContext, createContext} from "react"
import database from '../database.json'

const TeamsContext = createContext()

export const useTeams = () => {
  return useContext(TeamsContext)
}

export const TeamsProvider = ({children}) =>{
  const [teams, setTeams] = useState([])

  useEffect(() => {
    setTeams(database.teams)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TeamsContext.Provider value={{teams}}>
      {children}
    </TeamsContext.Provider>
  )
}