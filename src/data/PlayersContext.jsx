import React, {useState, useEffect, useContext, createContext} from "react"
import database from '../database.json'

const PlayersContext = createContext()

export const usePlayers = () => {
  return useContext(PlayersContext)
}

export const PlayersProvider = ({children}) =>{
  const [players, setPlayers] = useState([])

  useEffect(() => {
    setPlayers(database.players)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PlayersContext.Provider value={{players}}>
      {children}
    </PlayersContext.Provider>
  )
}