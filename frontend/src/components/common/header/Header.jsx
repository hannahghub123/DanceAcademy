import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Head from './Head';
import './Header.css';


const Header = () => {

    const {id} = useParams()
    const [click, setClick] = useState(false);
    const navigate = useNavigate()

    const [accessT, setAccessT] = useState(null);
    const [accessS, setAccessS] = useState(null);

    useEffect(() => {
      
      const accT = localStorage.getItem("accessToken-T");
      const accS = localStorage.getItem("accessToken-S");
      console.log("accT",accT)
      console.log("accS",accS)
      setAccessT(accT);
      setAccessS(accS);
  }, [id]);

  const homeSubmit = (event)=>{
    const tdata = localStorage.getItem("tutorDetails")
    console.log("tdata",tdata);
    console.log("accessS:", accessS);
    console.log("accessT:", accessT);

    if(tdata){
      const tutorDetails = JSON.parse(tdata);
      const id = tutorDetails.id

      console.log("header ile id:", id);
    }else {
      console.log("Tutor details not found in localStorage");
    }

    event.preventDefault();

    if (!accessS && !accessT){
      navigate('../')
    }else if(accessS){
      navigate('../std-dashboard')
    }else{
      navigate(`../tutor-dashboard/${id}`)
    }
      
  }

  const stdProfile =()=>{
    navigate('../')
  }
  
  const tutorProfile =()=>{
    const tdata = localStorage.getItem("tutorDetails")

    if(tdata){
      const tutorDetails = JSON.parse(tdata);
      const id = tutorDetails.id

      console.log("header il id und",id);
      navigate(`../tutor-profile/${id}`)
    }else {
      console.log("Tutor details not found in localStorage");
    }
  }
  

  return (
    <>
        <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link onClick={homeSubmit}>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            {(!accessT && !accessS) && (
              <>
                <li>
                  <Link to='/opt-login'>Login</Link>
                </li>
                <li>
                  <Link to='/opt-signup'>SignUp</Link>
                </li>
              </>
            )}
            
             { (accessS || accessT) &&<li>
           <NavDropdown title="For You" id="nav-dropdown">
              {accessS?<NavDropdown.Item onClick={stdProfile}>MyProfile</NavDropdown.Item>:<NavDropdown.Item onClick={tutorProfile}>MyProfile</NavDropdown.Item>}
              <NavDropdown.Item href="#action/3.2">
                MyNotes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">NewsToday</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                My Favourites
              </NavDropdown.Item>
            </NavDropdown>
            </li>}
          </ul>
         
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header