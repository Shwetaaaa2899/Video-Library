import { useState , createContext, useContext,useReducer } from "react"
// import AddressReducer,{initialState} from "../reducer/addressreducer"
import { useEffect } from "react"
// import { AuthContext} from "./authcontext"
 const PlayListProviderkey = createContext()
 const initialState = {playlist:[]}

export const PlayListContext = ({children}) =>{

   
    const PlayListsReducer = (state, action) =>{

        switch(action.type){
            case "SET-PLAYLIST":
                console.log("updated data on refresh ",action.payload)
                return {...state,playlist:action.payload}
            case "ADD-TO-PLAYLIST":
             
              
             let playLists =   [...state.playlist]
             playLists  = [...playLists, action.payload]

         
          
                
                
               
                // }
                // console.log(watchLists)
                localStorage.setItem(
                    "playlists",
                    JSON.stringify(playLists)
                  );
               
                
                return {...state, playlist:playLists}
            case "REMOVE-FROM-WATCHLIST":
                const removeItem = state.playLists.some((item) => item._id === action.payload._id)
                const playListsUpdate = [...state.playList]
if(removeItem){
    playListsUpdate = playListsUpdate.filter((item) => item._id !== action.pyload)

}
localStorage.setItem(
    "playlists",
    JSON.stringify(playListsUpdate)
  );

  
 

return {...state, playlist:playListsUpdate}
             
                default:
                    return state;
                }
            }
    const [value,dispatch]  = useReducer(PlayListsReducer,initialState)


    
    
        const valuesToBePassed = {value,dispatch}

   
  return <PlayListProviderkey.Provider value = {valuesToBePassed}>
        {children}
    </PlayListProviderkey.Provider>

}
export const usePlayListsContextProvider =() => useContext(PlayListProviderkey)