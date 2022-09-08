import React, {Fragment} from "react";
import ViewCSS from "./View.module.css"; 


const view = (props) => {
    return (
      <div className={ViewCSS.Element}>
        <h3> Addresses </h3>
        <hr/>
        <div className={ViewCSS.Element}>
            <p><b> Permanent </b></p>
            <div className={ViewCSS.Element}>
                <p> Line 1 </p>
                <p> Line 2 </p>
                <p> City, State </p>
                <p> Country - 700123 </p>
            </div>
            <p><b> Communication </b></p>
            <div className={ViewCSS.Element}>
                <p> Line 1 </p>
                <p> Line 2 </p>
                <p> City, State </p>
                <p> Country - 700123 </p>
            </div>
        </div>

        <h3> Email Address </h3>
        <hr/>
        <div className={ViewCSS.Element}>
            <p><b> Personal </b></p>
            <p className={ViewCSS.Element}> abcd@xyz.com </p>
            <p><b> Work </b></p>
            <p className={ViewCSS.Element}> abcd@xyz.com </p>
        </div>

        <h3> Phone Numbers </h3>
        <hr/>
        <div className={ViewCSS.Element}>
            <p><b> Personal </b></p>
            <p className={ViewCSS.Element}> +911234567890 </p>
            <p><b> Work </b></p>
            <p className={ViewCSS.Element}> +910987654321 </p>
        </div>
      </div>
    );
};

export default view;