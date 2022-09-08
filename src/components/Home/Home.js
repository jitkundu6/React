import React, {Fragment} from "react";
import HomeCSS from "./Home.module.css"; 

import Button from "../UI/Button/Button";


const home = (props) => {
    return (
      <div className={HomeCSS.Body}>
        <form className={HomeCSS.Form} onSubmit={() => {}}>
            <input type='text' placeholder="Search..." required/>
            <button  type="submit" onClick={() => {}} > Go! </button>
        </form>
        <p></p>
        <Button btn_type="Danger" clicked={props.onDeleteAll}> Delete All Records </Button>
        
        <table className={HomeCSS.Table}>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Maria Anders</td>
                <td>
                    <Button btn_type="Primary" onClick={() => {}} > View </Button>
                    <Button btn_type="Warning" onClick={() => {}} > Edit </Button>
                    <Button btn_type="Danger" onClick={() => {}} > Delete </Button>
                </td>
            </tr>
            <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
        </table>

        <footer className={HomeCSS.Footer}>
            <button className={HomeCSS.Button_Disabled} disabled={true}> First </button>
            <button className={HomeCSS.Button_Disabled} disabled={true}> Prev </button>
            <button className={HomeCSS.Button_Active} disabled={false}> 1 </button>
            <button className={HomeCSS.Button} disabled={false}> 2 </button>
            <button className={HomeCSS.Button} disabled={false}> 3 </button>
            <button className={HomeCSS.Button} disabled={false}> Next </button>
            <button className={HomeCSS.Button} disabled={false}> Last </button>
        </footer>
      </div>
    );
};

export default home;