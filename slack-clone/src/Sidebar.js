import React from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';

function Sidebar() {
 return ( <div className="sidebar">
  <div className="sidebar__header">
   <div className="sidebar__info">
   <h2>CarHeyWho</h2>
   <h3>
   <FiberManualRecordIcon/>
   Philip Kahihu
   </h3>
   </div>
   <CreateIcon />
   
   
    </div>
	<SidebarOption Icon={InsertCommentIcon} tittle="Threads" />
	<SidebarOption title="Youtube"/>
  </div>
  );
  
}

export default Sidebar