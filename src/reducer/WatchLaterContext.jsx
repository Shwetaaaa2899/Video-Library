import { useState , createContext, useContext,useReducer } from "react"
// import AddressReducer,{initialState} from "../reducer/addressreducer"
import { useEffect } from "react"
// import { AuthContext} from "./authcontext"
 const WatchLaterProviderkey = createContext()
 const initialState = {watchList:[],kk:"jj"}

export const WatchLaterContext = ({children}) =>{

   
    const watchLaterReducer = (state, action) =>{

        switch(action.type){
            case "SET-WATCHLATER":
                console.log(action.payload)
                return {...state,watchList:action.payload}
            case "ADD-TO-WATCHLATER":
               
                const video = state.watchList.some((item) => item._id === action.payload._id)

              let watchLists = [...state.watchList]

            //   }
              if(video){
                watchLists =  [...state.watchList]?.filter((item) => item._id !== action.payload._id)
              }  
                else{

                
                
                    watchLists =    [...watchLists,action.payload]
                    
                }
                // console.log(watchLists)
                localStorage.setItem(
                    "watchLater",
                    JSON.stringify(watchLists)
                  );
               
                
                return {...state, watchList:watchLists}
            case "REMOVE-FROM-WATCHLIST":
                const removeVideo = state.watchList.some((item) => item._id === action.payload._id)
                const watchlaterListsUpdate = [...state.watchList]
if(removeVideo){
    watchlaterListsUpdate = watchlaterListsUpdate.filter((item) => item._id !== action.pyload)

}
localStorage.setItem(
    "watchLater",
    JSON.stringify(watchlaterListsUpdate)
  );


return {...state, watchList:watchlaterListsUpdate}
             
                default:
                    return state;
                }
            }
    const [value,watchLaterDispatch]  = useReducer(watchLaterReducer,initialState)


    
        useEffect(()=>{
            const watchList = localStorage.getItem("watchLater")
            // console.log("ls",watchList)
            if(watchList){
                watchLaterDispatch({type:"SET-WATCHLATER",payload: JSON.parse(watchList)}) 
            }
        },[])
        const valuesToBePassed = {value,watchLaterDispatch}

   
  return <WatchLaterProviderkey.Provider value = {valuesToBePassed}>
        {children}
    </WatchLaterProviderkey.Provider>

}
export const useWatchLaterContextProvider =() => useContext(WatchLaterProviderkey)