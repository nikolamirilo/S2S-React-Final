import React, {useState, useEffect, useContext, createContext} from "react"
import database from '../database.json'

const GamesContext = createContext()

export const useGames = () => {
  return useContext(GamesContext)
}

export const GamesProvider = ({children}) =>{
  const [games, setGames] = useState([])

  useEffect(() => {
    setGames(database.games)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GamesContext.Provider value={{games}}>
      {children}
    </GamesContext.Provider>
  )
}