import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Explore } from './pages/Explore/Explore';
import { WatchLater } from './pages/WatchLater/WatchLater';
import { PlayLists } from './pages/PlayLists/PlayLists';
import {Main} from "./pages/MainPage/MainPage"
import { Category } from './pages/Categories/Categories';
import {CategoryWisePage} from "./pages/CategoryWisePage/CategoryWisePage"
import {DetailPage} from "./pages/DeatilPage/DeatilPage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path = "/" element = {<Main />}>
        <Route  path = "/" element = { <Category />} />
        <Route  path = "/category/:name" element = { <CategoryWisePage />} />
        <Route  path = "/video/:id" element = { <DetailPage />} />
      
     <Route  path = "/explore" element = { <Explore />} />
        <Route  path = "/playlists" element = {<PlayLists />}/>
        <Route  path = "/watchlater" element = {<WatchLater />}/>
        </Route>

        {/* <Route  path = "" element = {}/>
 
        <Route  path = "" element = {}/> */}
      </Routes>
    </div>
  );
}

export default App;
