import { useState , createContext, useContext,useReducer } from "react"
// import AddressReducer,{initialState} from "../reducer/addressreducer"
import { useEffect } from "react"
// import { AuthContext} from "./authcontext"
 const PlayListProviderkey = createContext()
 const initialState = {playlist:[]}

export const PlayListContext = ({children}) =>{

   
    const playListsReducer = (state, action) =>{

        switch(action.type){
            case "SET-PLAYLIST":
                // console.log(action.payload)
                return {...state,watchList:action.payload}
            case "ADD-TO-PLAYLIST":
               console.log(action.payload)
                const video = state.playlist.some((item) => item._id === action.payload._id)

              let playLists = [...state.playlist]

            //   }
            //   if(video){
            //     playLists =  [...playLists]?.filter((item) => item._id !== action.payload._id)
            //   }  
            //     else{

                
                
                    playLists =    [...playLists,action.payload]
                    
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
    const [value,dispatch]  = useReducer(playListsReducer,initialState)


    
        useEffect(()=>{
            const playList = localStorage.getItem("playlists")
            // console.log("ls",watchList)
            if(playList){
                dispatch({type:"SET-PLAYLIST",payload: JSON.parse(playList)}) 
            }
        },[])
        const valuesToBePassed = {value,dispatch}

   
  return <PlayListProviderkey.Provider value = {valuesToBePassed}>
        {children}
    </PlayListProviderkey.Provider>

}
export const usePlayListsContextProvider =() => useContext(PlayListProviderkey)