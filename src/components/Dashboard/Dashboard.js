import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


function Dashboard() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='dashboard'>
      <Link to="#" className='menu-bars'>
     {/* <GrIcons.GrOverview/> */}
    <FaIcons.FaBars/>
      </Link>
      </div>
       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineCloseCircle/>
                </Link>
            </li>
        </ul>
       </nav>
      </>
  );
}

export default Dashboard
