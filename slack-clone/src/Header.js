import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Header.css";
function Header() {
	return (
	<div className="header">
	
	 <div className='header__left'>
	 {/* AccountBoxIcon for logged in user */}
	 <AccountBoxIcon
		className="header_AccountBoxIcon"
		alt="Philip Kahihu"
		src=""
		/>
	<AccessTimeIcon/>
	
	 </div>
	 
	 <div className="header__search">
	 {/* Search icon */}
	 <SearchIcon/>
	 {/* input */}
	 <input placeholder="Philip Kahihu"/>
	 </div>
	 
	 <div className="header__right">
	 
	 <HelpOutlineIcon/>
	 </div>
	 
	
	</div>
	)
}

export default Header