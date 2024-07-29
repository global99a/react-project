import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link, useNavigate}  from 'react-router-dom';
import HealthAdminHeader from './HealthAdminHeader';

function HealthAdmin() {
  return (
    <><HealthAdminHeader/>
    <div>HealthAdministrator</div>
    <div className='card'>
    <Link to='/staff-coordination'>StaffCoordination</Link>
    </div>
    <div className='card'>
    <Link to='/compliance'>ComplianceOveright</Link>
    </div>
    <div className='card'>
    <Link to='/incident-response'>IncidentResponse</Link>
    </div>
    <div className='card'>
    <Link to='/facility-management'>FacilityMangement</Link>
    </div>
   
    
    </>
  )
}

export default HealthAdmin