import React from "react";
import ToolbarCSS from "./Toolbar.module.css";

const toolbar = (props) =>  {
    let cardViewClass = ToolbarCSS.Text_Button;
    let listViewClass = ToolbarCSS.Text_Button;
    if(props.list_view)
        listViewClass = ToolbarCSS.Active_View;
    else
        cardViewClass = ToolbarCSS.Active_View;

    let genderOption = [...new Set(props.recordSet.genderBasedRecords.map(p => {if(p) return(p.gender);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    let stateOption = [...new Set(props.recordSet.stateBasedRecords.map(p => {if(p) return(p.state);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    let cityOption = [...new Set(props.recordSet.cityBasedRecords.map(p => {if(p) return(p.city);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    let crrOption = [...new Set(props.recordSet.crrBasedRecords.map(p => {if(p) return(p.crr);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    let firstNameOption = [...new Set(props.recordSet.firstNameBasedRecords.map(p => {if(p) return(p.first_name);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    let lastNameOption = [...new Set(props.recordSet.lastNameBasedRecords.map(p => {if(p) return(p.last_name);}))]
        .map((val, i) => (<option key={i}>{val}</option>));
    
    return(
        <div>
            <div className={ToolbarCSS.Toolbar}>
                <div className={cardViewClass} onClick={props.onCardView}>
                    <span role="img" aria-label="emoji1"> 👨🏽‍🦽 </span> Card View
                </div>
                <div className={listViewClass} onClick={props.onListView}>
                    <span role="img" aria-label="emoji2"> 🦯 </span> List View
                </div>
                <div className={ToolbarCSS.Text_Button} onClick={props.addPersonClicked}>
                    <strong> + Add Sales Person </strong>
                </div>
                <button className={ToolbarCSS.Delete_Button} onClick={props.onDeleteAll}>
                    Delete All Records 
                </button>
            </div>

            <form className={ToolbarCSS.Toolbar}>
                <strong>Filter by :</strong>
                
                <label  className={ToolbarCSS.Input}>
                    Gender:
                    <select nmae="gender" value={props.filter.gender} onChange={(e) => props.onFilter(e, 'gender')}>
                        <option>----</option>
                        <option>all</option>
                        {genderOption}
                    </select>
                </label>
            
                <label  className={ToolbarCSS.Input}>
                    State:
                    <select nmae="state" value={props.filter.state} onChange={(e) => props.onFilter(e, 'state')}>
                        <option>----</option>
                        <option>all</option>
                        {stateOption}
                    </select>
                </label>

                <label  className={ToolbarCSS.Input}>
                    City:
                    <select nmae="city" value={props.filter.city} onChange={(e) => props.onFilter(e, 'city')}>
                        <option>----</option>
                        <option>all</option>
                        {cityOption}
                    </select>
                </label>

                <label  className={ToolbarCSS.Input}>
                    CRR:
                    <select nmae="crr" value={props.filter.crr} onChange={(e) => props.onFilter(e, 'crr')}>
                        <option>----</option>
                        <option>all</option>
                        {crrOption}
                    </select>
                </label>

                <label  className={ToolbarCSS.Input}>
                    First Name:
                    <select nmae="first_name" value={props.filter.first_name} onChange={(e) => props.onFilter(e, 'first_name')}>
                        <option>----</option>
                        <option>all</option>
                        {firstNameOption}
                    </select>
                </label>

                <label  className={ToolbarCSS.Input}>
                    Last Name:
                    <select nmae="last_name" value={props.filter.last_name} onChange={(e) => props.onFilter(e, 'last_name')}>
                        <option>----</option>
                        <option>all</option>
                        {lastNameOption}
                    </select>
                </label>

                <button type="submit" className={ToolbarCSS.Reset_Button} onClick={props.onResetFilter}>
                    Reset Filter
                </button>
            </form>
        </div>
    );
}

export default toolbar;
