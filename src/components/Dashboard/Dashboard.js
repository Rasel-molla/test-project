import React from 'react';
import './Dashboard.css';
import AppleIcon from '@material-ui/icons/Apple';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';


const Dashboard = () => {
   


    return (
        <div>
            <h3> Welcome </h3>
            <div class="container">
  <div class="row row-cols-6">
    <div class="col">
   <div className="">
   <div className="icon">
     <AppleIcon/>
     </div>
<h3> 111k </h3>

<p> Lorem ipsum dolor sit, a ?</p>
   
   </div>
    </div>

    <div class="col">
        
    <div className="">
   <div className="icon">
     <FlipCameraAndroidIcon/>
     </div>
<h3> 161k </h3>

<p> Lorem ipsum dolor sit, a ?</p>
   
   </div>

    </div>

    <div class="col">
        
    <div className="">
   <div className="icon">
     <DesktopWindowsIcon/>
     </div>
<h3> 811k </h3>

<p> Lorem ipsum dolor sit, a ?</p>
   
   </div>
        
        </div>

    <div class="col">
        
    <div className="">
   <div className="icon">
     <TabletAndroidIcon/>
     </div>
<h3> 311k </h3>

<p> Lorem ipsum dolor sit, a ?</p>
   
   </div>
        
        
        </div>
  </div>
</div>
        </div>
          );
        };

export default Dashboard;