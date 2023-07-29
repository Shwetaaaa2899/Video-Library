
import "./Main.css";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { AiTwotoneHome, AiFillEye } from "react-icons/ai";
import { RiMenuAddLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
// import CreatePost from "../CreatePostModal/Modal";
// import Users from "../User/Users";

import { AiFillGithub } from "react-icons/ai";
// import { useAuth } from "../../context/authcontext";
export  const Main = ({children}) =>{

  const [modal, setModal] = useState(false);

  //consolelog("userinfo from leftbar ",userInfo)
  const routes = [
    { name: "Home", path: "/", icon: <AiTwotoneHome /> },
    { name: "Explore", path: "/explore", icon: <AiFillEye /> },
    { name: "Playlists", path: "/playlists", icon: <RiMenuAddLine /> },

    { name: "Watch Later", path: "/watchlater", icon: <MdWatchLater /> }
  ];
  //consolelog("usernme is ",userInfo)
  const showClose = () => {
    setModal(false);
    //consolelog("closed",modal)
  };
  const showOpen = () => {
    setModal(true);
    console.log("clicked");
  };

  const [activeId, setActiveId] = useState("Home");
  const [headingData,setHeading] = useState("Categories")
  return (
    <div>
      {/* <Header /> */}

      <div className="container">
        <div className="left-sidebar">
          <ul>
            {routes.map((route) => {
              return (
                <li
                  key={route.name}
                  onClick={() => setActiveId(route.name)}
                  className={activeId === route.name ? "active-link" : "link"}
                >
                  <NavLink
                    activeClassName="active"
                    className="link"
                    to={route.path}
                    key={route.name}
                  >
                    <div className="icon">{route.icon}</div>
                    <div className="text">{route.name}</div>
                  </NavLink>
                </li>
              );
            })}
          
          </ul>
        </div>

        <div className="right-sidebar">
       
          <Outlet />
        </div>
        {/* {modal && <CreatePost showClose={showClose} showOpen={showOpen} />} */}

    </div>
    </div>
  );
};
