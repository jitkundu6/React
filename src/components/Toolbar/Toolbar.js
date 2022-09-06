import React from "react";
import ToolbarCSS from "./Toolbar.module.css";

const toolbar = (props) => (
    <div>
        <div className={ToolbarCSS.Toolbar}>
            <div className={ToolbarCSS.Active_View}>
                👨🏽‍🦽 Card View
            </div>
            <div className={ToolbarCSS.Text_Button}>
                🦯 List View
            </div>
            <div className={ToolbarCSS.Text_Button}>
                <strong> + Add Sales Person </strong>
            </div>
            <button className={ToolbarCSS.Delete_Button}>
                Delete All Records 
            </button>
        </div>

        <div className={ToolbarCSS.Toolbar}>
            <strong>Filter by :</strong>
            
            <label  className={ToolbarCSS.Input}>
                Gender:
                <select nmae="gender" >
                    <option>all</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </label>
        
            <label  className={ToolbarCSS.Input}>
                State:
                <select nmae="state" >
                    <option>all</option>
                    <option>MP</option>
                    <option>WB</option>
                </select>
            </label>

            <label  className={ToolbarCSS.Input}>
                City:
                <select nmae="city" >
                    <option>all</option>
                    <option>Kolkata</option>
                    <option>Howrah</option>
                </select>
            </label>

            <label  className={ToolbarCSS.Input}>
                CRR:
                <select nmae="crr" >
                    <option>all</option>
                    <option>0</option>
                    <option>1</option>
                </select>
            </label>

            <label  className={ToolbarCSS.Input}>
                First Name:
                <select nmae="first_name" >
                    <option>all</option>
                    <option>SK</option>
                    <option>AB</option>
                </select>
            </label>

            <label  className={ToolbarCSS.Input}>
                Last Name:
                <select nmae="last_name" >
                    <option>all</option>
                    <option>SK</option>
                    <option>AB</option>
                </select>
            </label>

            <button className={ToolbarCSS.Reset_Button}>
                Reset Filter
            </button>
        </div>
    </div>
);

export default toolbar;
