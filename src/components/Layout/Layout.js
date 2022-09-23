import React, {Fragment} from "react";
import LayoutCSS from "./Layout.module.css"; 

import Heading from "../UI/Heading/Heading";

const layout = (props) => {

  let homeClass = LayoutCSS.Tab;
  let createClass = LayoutCSS.Tab;
  let actionID = null;

  if (props.active_layout === "Home" || props.active_layout === "Delete")
    homeClass = LayoutCSS.Selected_Tab;
  else if (props.active_layout === "Create")
    createClass = LayoutCSS.Selected_Tab;
  
  if (props.active_layout === "View" || props.active_layout === "Edit" || props.active_layout === "Delete")
    actionID = <Fragment>
                  <p className={LayoutCSS.Selected_Tab}> &nbsp;&nbsp;/&nbsp;&nbsp; </p>
                  <p className={LayoutCSS.DisabledLink}> {props.actionID} </p>
                </Fragment>;


  return (
    <Fragment>
      <div className={LayoutCSS.Head}>
          <Heading />
          <div className={LayoutCSS.Head_User}> 👤 Welcome {props.username} </div>
      </div>
      
      <div className={LayoutCSS.Body}>
        <div className={LayoutCSS.SideDrawer}>
          <p onClick={props.onHome} className={homeClass}><u>Home</u></p>
          <p onClick={props.onCreate} className={createClass}><u>Create</u></p>
          <p onClick={props.onSignOut} className={LayoutCSS.Tab}><u>Sign Out</u></p>
        </div>
        <div className={LayoutCSS.Body_Items}>
          <div className={LayoutCSS.Body_Head}>
            <p onClick={props.onHome} className={LayoutCSS.Link}> Address Book </p>
            <p className={LayoutCSS.Selected_Tab}> &nbsp;&nbsp;/&nbsp;&nbsp; </p>
            <p className={LayoutCSS.DisabledLink}> {props.active_layout} </p>
            {actionID}
          </div>
          {props.children} 
        </div>
      </div>
    </Fragment>
  );
};

export default layout;