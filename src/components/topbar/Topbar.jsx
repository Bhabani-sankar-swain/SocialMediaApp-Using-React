import React from 'react';
import './topbar.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AddchartIcon from '@mui/icons-material/Addchart';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
     <div className="topbarContainer">
             <div className="topbarLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                  <span className="logo">SocialMedia</span>
                </Link>
            </div>
             <div className="topbarCenter">
                   <div className="searchbar">
                       <SearchIcon className='searchIcon' />
                       <input placeholder="Search for friends, post or video" className='searchInput' />
                   </div>
             </div>
             <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className='topbarLink'>Homepage</span>
                        <span className='topbarLink'>Timeline</span>
                    </div>
                    <div className="topbarIcons">
                       <div className="topbarIconItem">
                           <PersonIcon />
                           <span className="topbarIconBadge">1</span>
                       </div>
                       <div className="topbarIconItem">
                           <AddchartIcon />
                           <span className="topbarIconBadge">2</span>
                       </div>
                       <div className="topbarIconItem">
                           <CircleNotificationsIcon />
                           <span className="topbarIconBadge">1</span>
                       </div>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
             </div>
     </div>
  )
}
