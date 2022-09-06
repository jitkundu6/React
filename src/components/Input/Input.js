import React, { Component } from "react";
import InputCSS from './Input.module.css';

class Task extends Component {
    state = {
        id: 0,
        first_name: "",
        last_name: "",
        gender: "",
        state: "",
        city: "",
        start_date: "",
        end_date: "",
        ce: "",
        cn: "",
        cs: "",
    };

    onChangeHandler = (event, key) => {
        this.setState({
            key: event.target.value,
        });
    }

    render() {
        let personDetails = this.state;
        
        return (
            <div className={InputCSS.Form}>
                <h2 className={InputCSS.Heading}> Create New Sales Person Record </h2>

                <form onSubmit={() => this.props.onSubmit(this.state)} style={{
                    textAlign: 'left',
                    marginLeft: '70px',
                }}>
                    <div className={InputCSS.Input}>
                        <span> First Name : </span>
                        <input className="Form_input" type='text' placeholder="First Name" defaultValue={personDetails.first_name} onChange={(e) => this.onChangeHandler(e, 'first_name')} required/>
                    </div>

                    <div className={InputCSS.Input}>
                        <span> Last Name : </span>
                        <input className="Form_input" type='text' placeholder="Last Name" defaultValue={personDetails.last_name} onChange={(e) => this.onChangeHandler(e, 'last_name')} required/>
                    </div>

                    <div className={InputCSS.Input}>
                        <span> Gender : </span>
                        <select nmae="Gender" value={personDetails.gender} onChange={(e) => this.onChangeHandler(e, 'gender')} required>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className={InputCSS.Input}>
                        <span> State : </span>
                        <input className="Form_input" type='text' placeholder="State" defaultValue={personDetails.state} onChange={(e) => this.onChangeHandler(e, 'state')} required/>
                    </div>

                    <div className={InputCSS.Input}>
                        <span> City : </span>
                        <input className="Form_input" type='text' placeholder="City" defaultValue={personDetails.city} onChange={(e) => this.onChangeHandler(e, 'city')} required/>
                    </div>


                    <div className={InputCSS.Input}>
                        <p> <strong>Period :</strong> </p>
                        <div className={InputCSS.Input}>
                            <span> Start Date : </span>
                            <input className="Form_input" type='date' placeholder="Start Date" value={personDetails.start_date} onChange={(e) => this.onChangeHandler(e, 'start_date')} required/>
                        </div>

                        <div className={InputCSS.Input}>
                            <span> End Date : </span>
                            <input className="Form_input" type='date' placeholder="End Date" value={personDetails.end_date} onChange={(e) => this.onChangeHandler(e, 'end_date')} required/>
                        </div>

                        <div className={InputCSS.Input}>
                            <span> CE (No. of customers at end of the period) : </span>
                            <input className="Form_input" type='number' min='0' placeholder="CE" defaultValue={personDetails.ce} onChange={(e) => this.onChangeHandler(e, 'ce')} required/>
                        </div>

                        <div className={InputCSS.Input}>
                            <span> CN (No. of new customers acquired during the period) : </span>
                            <input className="Form_input" type='number' min='0' placeholder="CN" defaultValue={personDetails.cn} onChange={(e) => this.onChangeHandler(e, 'cn')} required/>
                        </div>

                        <div className={InputCSS.Input}>
                            <span> CS (No. of customers at the start of the period) : </span>
                            <input className="Form_input" type='number' min='0' placeholder="CS" defaultValue={personDetails.cs} onChange={(e) => this.onChangeHandler(e, 'cs')} required/>
                        </div>
                    </div>

                    <br/>
                    <div>
                        <p> <strong>*</strong> Please fill all the fields </p>
                        <button clicked={this.props.onCancel} className={InputCSS.Button_Cancel}>CANCEL</button>
                        <button type="submit" className={InputCSS.Button_Success}>SAVE</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Task;