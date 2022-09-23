import React, {Component, Fragment} from "react";
import HomeCSS from "./Home.module.css"; 

import Button from "../UI/Button/Button";

const PERSON_PER_PAGE = 5;

class Home extends Component {
    state = {
        active_page: 1,
        search: "",
        sort_by: {
            key: "first_name",
            direction: "asc"
        },
    };

    searchHandler = (e) => {
        this.setState({
            search: e.target.value,
        });
    }

    sortingHandler = (value) => {
        this.setState({
            sort_by: {
                key: value.key,
                direction: value.direction,
            },
        });
    }

    resetFilterHandler = () => {
        this.setState({
            search: "",
            sort_by: {
                key: "first_name",
                direction: "asc",
            },
        });
    }

    activePageHandler = (value) => {
        console.log("Active Page: " + value);
        this.setState({
            active_page: value,
        });
    }

    render() {
        console.log("Home");
        console.log(this.state);

        let search = this.state.search.toLowerCase();
        let records = JSON.parse(localStorage.getItem('records') || '[]');        
            
        let filteredRecords = records.filter((p, index) => {
            if (!search || p.first_name.toLowerCase().indexOf(search) >= 0 || p.last_name.toLowerCase().indexOf(search) >= 0) // search by name
                return(p);
            for(let i=0; i<p.email_address.length; i++){ // search by email
                if (p.email_address[i].email.toLowerCase().indexOf(search) >= 0 || p.email_address[i].type.toLowerCase().indexOf(search) >= 0)
                    return (p);
            }
            for(let i=0; i<p.phone_number.length; i++){ // search by phone number
                let phone = p.phone_number[i].phone;
                if (phone.indexOf(search) >= 0 || p.phone_number[i].type.toLowerCase().indexOf(search) >= 0)
                    return (p);
            }
            for(let i=0; i<p.address.length; i++){ // search by address
                let values = Object.values(p.address[i]);
                for(let j=0; j<values.length; j++){
                    if(values[j] && values[j].toLowerCase().indexOf(search) >= 0)
                        return (p);
                }
            }
        });

        let total_page = Math.ceil(filteredRecords.length/PERSON_PER_PAGE);
        if(this.state.active_page > total_page && total_page > 0)
            this.activePageHandler(1);
        
        let pages = [];
        let disabledFirst = false;
        let disabledLast = false;
        let firstButtonClass = HomeCSS.Button;
        let lastButtonClass = HomeCSS.Button;

        if(this.state.active_page <= 1) {
            disabledFirst = true;
            firstButtonClass = HomeCSS.Button_Disabled;
        }
        if(this.state.active_page >= total_page) {
            disabledLast = true;
            lastButtonClass = HomeCSS.Button_Disabled;
        }

        for(let i=0; i < total_page; i++) {
            let buttonClass = HomeCSS.Button;
            if(this.state.active_page === i+1) {
                buttonClass = HomeCSS.Button_Active;
            }
            pages.push(
            <button
                key={i+1}
                className={buttonClass}
                onClick={() => this.activePageHandler(i+1)}
                disabled={false}> 
                {i+1} 
            </button>
            );
        }

        let persons = null;
        persons = filteredRecords.map((p, i) => {
            if(i < (this.state.active_page - 1)*PERSON_PER_PAGE || i >= (this.state.active_page)*PERSON_PER_PAGE)
                return <div key={p.id}> </div>;
            return (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.first_name + ' ' + p.last_name}</td>
                    <td>{p.phone_number[0].phone}</td>
                    <td>{p.email_address[0].email}</td>
                    <td>{p.address[0].city}, {p.address[0].state}, {p.address[0].country}-{p.address[0].zip_code} </td>
                    <td>
                        <Button btn_type="Primary" clicked={() => this.props.initAction(p.id, "View")} > View </Button>
                        <Button btn_type="Warning" clicked={() => this.props.initAction(p.id, "Edit")} > Edit </Button>
                        <Button btn_type="Danger" clicked={() => this.props.initAction(p.id, "Delete")} > Delete </Button>
                    </td>
                </tr>
            );
        });

        console.log(persons);

        return (
        <div className={HomeCSS.Body}>
            <form className={HomeCSS.Form} onSubmit={() => {}}>
                <input type='text' placeholder="Search..." value={this.state.search} onChange={(e) => this.searchHandler(e)} required/>
                <button  type="submit"> Go! </button>
            </form>
            
            <table className={HomeCSS.Table}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {persons}
            </table>

            <br/>
            <Button btn_type="Danger" clicked={this.props.onDeleteAll}> Delete All Records </Button>

            <br/>
            <footer className={HomeCSS.Footer}>
                <button 
                    className={firstButtonClass}
                    onClick={() => this.activePageHandler(1)}
                    disabled={disabledFirst}>
                        First </button>
                <button 
                    className={firstButtonClass}
                    onClick={() => this.activePageHandler(this.state.active_page - 1)}
                    disabled={disabledFirst}>
                        Prev </button>
                {pages}
                <button 
                    className={lastButtonClass}
                    onClick={() => this.activePageHandler(this.state.active_page + 1)} 
                    disabled={disabledLast}>
                        Next </button>
                <button 
                    className={lastButtonClass}
                    onClick={() => this.activePageHandler(total_page)}
                    disabled={disabledLast}>
                        Last </button>
          </footer>

        </div>
        );
    }
}

export default Home;