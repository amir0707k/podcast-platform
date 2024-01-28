import React from 'react';
import "./styles.css";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../../firebase"
import { signOut } from 'firebase/auth';
import {clearUser} from "../../../slices/userSlice"
import { toast } from 'react-toastify';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      toast.success("Successfully signed out");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className='navbar'>
      <div className='shadow'></div>
      <div className='links'>
        <Link to={"/"} className={currentPath === "/" ? "active" : ""}>SignUp</Link>
        <Link to={"/podcasts"} className={currentPath === "/podcasts" ? "active" : ""}>Podcasts</Link>
        <Link to={"/create-a-podcast"} className={currentPath === "/create-a-podcast" ? "active" : ""}>Start A Podcast</Link>
        <Link to={"/profile"} className={currentPath === "/profile" ? "active" : ""}>Profile</Link>
        {user && 
          ( <Link to="#" onClick={handleSignOut}>Logout</Link> )
        }
      </div>
    </div>
  )
}

export default Header;