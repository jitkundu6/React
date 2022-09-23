import React, {Fragment} from "react";
import ViewCSS from "./View.module.css";

const view = (props) => {
    const record = props.record;
    if(!record)
        return;

    let address = record.address.map((addr, i) => {
        return(
            <div>
                <p><b> {addr.type} </b></p>
                <div className={ViewCSS.Element}>
                    <p> {addr.line1} </p>
                    <p> {addr.line2} </p>
                    <p> {addr.city}, {addr.state} </p>
                    <p> {addr.country} - {addr.zip_code} </p>
                </div>
            </div>
        );
    });

    let email_address = record.email_address.map((email, i) => {
        return(
            <div>
                <p><b> {email.type} </b></p>
                <p className={ViewCSS.Element}> {email.email} </p>
            </div>
        );
    });

    let phone_number = record.phone_number.map((phone, i) => {
        return(
            <div>
                <p><b> {phone.type} </b></p>
                <p className={ViewCSS.Element}> {phone.phone} </p>
            </div>
        );
    });

    return (
      <div className={ViewCSS.Element}>
        <h3> Name </h3>
        <div className={ViewCSS.Element}>
            <p><b> {record.first_name} {record.last_name} </b></p>
        </div>
        <hr/>

        <h3> Addresses </h3>
        <div className={ViewCSS.Element}>
            {address}
        </div>
        <hr/>

        <h3> Email Address </h3>
        <div className={ViewCSS.Element}>
            {email_address}
        </div>
        <hr/>

        <h3> Phone Numbers </h3>
        <div className={ViewCSS.Element}>
            {phone_number}
        </div>
        <hr/>

      </div>
    );
};

export default view;