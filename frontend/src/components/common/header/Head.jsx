import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Head = () => {
  const [accessT, setAccessT] = useState(null);
  const [accessS, setAccessS] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    
    const accT = localStorage.getItem("accessToken-T");
    const accS = localStorage.getItem("accessToken-S");
    console.log("head accT",accT)
    console.log("head accS",accS)
    setAccessT(accT);
    setAccessS(accS);
}, []);

const logout = () => {
  localStorage.removeItem("accessToken-T");
 localStorage.removeItem("tutorDetails");

 setAccessT(null);
 setAccessS(null);
console.log("log out il keri");
 navigate('../');
}
  return (
    <>
         <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>DanceAcademy</h1>
            <span>ONLINE DANCE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            {
              (accessS||accessT)&&(
                <i className='fa fa-power-off icon' onClick={logout} title='LogOut'>
                  {/* <Link to='../'>Logout</Link> */}
                </i>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Head