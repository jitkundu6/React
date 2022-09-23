import React, { Component } from "react";
import CreateCSS from './Create.module.css';

import Button from "../UI/Button/Button";
import Message, {MESSAGE_SUCCESS, MESSAGE_WARNING, MESSAGE_FAIL} from "../UI/Message/Message";

const MESSAGE_TEXT_NUMBER_ALREADY_EXIST = " Phone number already exist, Please try again with different number.";
const MESSAGE_TEXT_EMAIL_ALREADY_EXIST = " Email ID already exist, Please try again with different email address.";
const MESSAGE_INVALID_NUMBER = " Invalid Phone Number, number must have 10 digits."

class Create extends Component {
    state = {
        id: 0,
        first_name: "",
        last_name: "",
        address: [
          {
            line1: "",
            line2: "",
            city: "",
            state: "",
            country: "",
            zip_code: "",
            type: "Permanent",
          },
        ],
        email_address: [
          {
            email: "",
            type: "Personal",
          },
        ],
        phone_number: [
          {
            phone: "",
            type: "Personal",
          },
        ],
    };

    onChangeHandler = (event, key) => {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    onChangeArrayHandler = (event, key, index, key2) => {
        let arr = [...this.state[key]]
        let obj = {};
        arr[index][key2] = event.target.value;
        obj[key] = arr;
        this.setState(obj);
    }

    addItemHandler = (key) => {
        let obj = {};
        let arr = this.state[key];
        arr.push({...arr[0]});
        obj[key] = arr;
        this.setState(obj);
    }

    removeItemHandler = (key, index) => {
        let obj = {};
        let arr = this.state[key];
        obj[key] = arr.filter((item, i) => {
            return i != index; 
        });
        this.setState(obj);
    }
    
    onChangePhoneNumber = (e, i) => {
        let phone_records = JSON.parse(localStorage.getItem('records') || '[]')
                    .filter(p => (p.id !== this.state.id))
                    .filter((record) => {
                           for(let i=0; i<record.phone_number.length; i++)
                           {
                            if(record.phone_number[i].phone === e.target.value)
                                return record;
                           }
                    });
        
        if (phone_records && phone_records.length >= 1)
        {
            localStorage.setItem("login_msg", MESSAGE_TEXT_NUMBER_ALREADY_EXIST);
            localStorage.setItem("login_msg_type", MESSAGE_FAIL);
            this.setState({
                id: this.state.id,
            });
            return;
        }
        this.onChangeArrayHandler(e, 'phone_number', i, 'phone');
    }
    
    onSubmitHandler = () => {
        let state = {...this.state};
        let email_address = state.email_address.map(email => (email.email));
        let phone_number = state.phone_number.map(phone => (phone.phone));
        let records = JSON.parse(localStorage.getItem('records') || '[]')
                        .filter(p => (p.id !== this.state.id));

        let existing_email = records.filter((record) => {
                                for(let i=0; i<record.email_address.length; i++)
                                {
                                    if (email_address.indexOf(record.email_address[i].email) >= 0)
                                        return record.email_address[i].email;
                                }
                            });
        if (existing_email && existing_email.length >= 1)
        {
            localStorage.setItem("login_msg", MESSAGE_TEXT_EMAIL_ALREADY_EXIST);
            localStorage.setItem("login_msg_type", MESSAGE_FAIL);
            return;
        }

        let existing_phone = records.filter((record) => {
                                for(let i=0; i<record.phone_number.length; i++)
                                {
                                    if (phone_number.indexOf(record.phone_number[i].phone) >= 0)
                                        return record.phone_number[i].phone;
                                }
                            });
        if (existing_phone && existing_phone.length >= 1)
        {
            localStorage.setItem("login_msg", existing_phone[0] + MESSAGE_TEXT_NUMBER_ALREADY_EXIST);
            localStorage.setItem("login_msg_type", MESSAGE_FAIL);
            return;
        }

        for(let i=0; i<phone_number.length; i++)
        {
            let number_length = phone_number[i].length;
            if (number_length !== 10) {
                localStorage.setItem("login_msg", JSON.stringify(phone_number[i]) + MESSAGE_INVALID_NUMBER);
                localStorage.setItem("login_msg_type", MESSAGE_FAIL);
                return;
            }
        }

        this.props.onSubmit(this.state);
    }

    render() {
        let details = this.state;
        let record = this.props.record;
        
        if(this.props.editID && record && this.state.id === 0) {
            details = record;
            this.setState(details);
        }
        
        let head = "Create New Record";
        if(this.props.editID)
            head = "Edit Record";
        
        let message_text = localStorage.getItem('login_msg');
        let message_type = localStorage.getItem('login_msg_type');
        localStorage.removeItem('login_msg');
        let message = null;
        let message_phone_err = null;
        let message_email_err = null;
        
        if(message_text) {
            message = <Message message_type={message_type} message={message_text} onClose={this.resetFilterHandler} />;
            if (message_text === MESSAGE_TEXT_NUMBER_ALREADY_EXIST)
                message_phone_err = message;
            if (message_text === MESSAGE_TEXT_EMAIL_ALREADY_EXIST)
                message_email_err = message;
        }

        let address = details.address.map((addr, i) => {
            let close_btn = null;
            if(i != 0)
                close_btn = <strong className={CreateCSS.Close_Button} onClick={() => this.removeItemHandler('address', i)}> x </strong>;
            return(
                <div>
                    <p><b> Address {i+1} </b> {close_btn} </p>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='text' placeholder="Line 1" defaultValue={addr.line1} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'line1')} required/>
                        <input className={CreateCSS.Input} type='text' placeholder="Line 2" defaultValue={addr.line2} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'line2')} required/>
                    </div>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='text' placeholder="City" defaultValue={addr.city} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'city')} required/>
                        <input className={CreateCSS.Input} type='text' placeholder="State" defaultValue={addr.state} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'state')} required/>
                    </div>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='text' placeholder="Country" defaultValue={addr.country} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'country')} required/>
                        <input className={CreateCSS.Input} type='number' placeholder="Zip Code" defaultValue={addr.zip_code} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'zip_code')} required/>
                    </div>
                    <div className={CreateCSS.Element}>
                        <select className={CreateCSS.Input} placeholder="Type" name="Type" value={addr.type} onChange={(e) => this.onChangeArrayHandler(e, 'address', i, 'type')} required>
                            <option>Permanent</option>
                            <option>Communication</option>
                        </select>
                    </div>
                </div>
            );
        });

        let email_address = details.email_address.map((email, i) => {
            let close_btn = null;
            if(i != 0)
                close_btn = <strong className={CreateCSS.Close_Button} onClick={() => this.removeItemHandler('email_address', i)}> x </strong>;
            return(
                <div>
                    <p><b> Email {i+1}</b> {close_btn} </p>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='email' placeholder="Email" defaultValue={email.email} onChange={(e) => this.onChangeArrayHandler(e, 'email_address', i, 'email')} required/>
                        <select className={CreateCSS.Input} placeholder="Type" name="Type" value={email.type} onChange={(e) => this.onChangeArrayHandler(e, 'email_address', i, 'type')} required>
                            <option>Personal</option>
                            <option>Work</option>
                        </select>
                    </div>
                </div>
            );
        });

        let phone_number = details.phone_number.map((phone, i) => {
            let close_btn = null;
            if(i != 0)
                close_btn = <strong className={CreateCSS.Close_Button} onClick={() => this.removeItemHandler('phone_number', i)}> x </strong>;
            return(
                <div>
                    <p><b> Phone Number {i+1}</b> {close_btn} </p>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='number' placeholder="Phone Number" value={phone.phone} onChange={(e) => this.onChangePhoneNumber(e, i)} required/>
                        <select className={CreateCSS.Input} placeholder="Type" name="Type" value={phone.type} onChange={(e) => this.onChangeArrayHandler(e, 'phone_number', i, 'type')} required>
                            <option>Personal</option>
                            <option>Work</option>
                        </select>
                    </div>
                </div>
            );
        });

        return (
            <div className={CreateCSS.Body}>
                {message}
                <h1>{head}</h1>
                
                <form id="form1" onSubmit={() => this.onSubmitHandler()} style={{
                    textAlign: 'left',
                }}>
                    <div className={CreateCSS.Element}>
                        <input className={CreateCSS.Input} type='text' placeholder="First Name" defaultValue={details.first_name} onChange={(e) => this.onChangeHandler(e, 'first_name')} required/>
                        <input className={CreateCSS.Input} type='text' placeholder="Last Name" defaultValue={details.last_name} onChange={(e) => this.onChangeHandler(e, 'last_name')} required/>
                    </div>
                    <p className={CreateCSS.Line}></p>

                    <div>
                        <p className={CreateCSS.Heading}> <strong> Address + </strong> </p>
                        {address}
                        <Button name="label" btn_type="Primary" clicked={() => this.addItemHandler('address')}> Add </Button>
                        <p className={CreateCSS.Line}></p>
                    </div>

                    <div>
                        <p className={CreateCSS.Heading}> <strong> Email Address + </strong> </p>
                        {message_email_err}
                        {email_address}
                        <Button name="label" btn_type="Primary" clicked={() => this.addItemHandler('email_address')}> Add </Button>
                        <p className={CreateCSS.Line}></p>
                    </div>

                    <div>
                        <p className={CreateCSS.Heading}> <strong> Phone Number + </strong></p>
                        {message_phone_err}
                        {phone_number}
                        <Button name="label" btn_type="Primary" clicked={() => this.addItemHandler('phone_number')}> Add </Button>
                        <p className={CreateCSS.Line}></p>
                    </div>
                </form>

                <div className={CreateCSS.Bottom}>
                        <Button btn_type="Primary" type="submit" form="form1" name="button"> Save </Button>   
                        <Button btn_type="Warning" clicked={this.props.onBack}> Cancel </Button>
                </div>

            </div>
        );
    }
}

export default Create;