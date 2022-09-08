import React, { Component} from "react";
import './Form.css';
import ImageList from '../../imageList.json';

class Form extends Component {

    removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    render() {
        let imageCountries = ImageList.map((img) => (
            img.country
        ));
        let countries = this.removeDuplicates(imageCountries).map((country, index) => (<option key={index}> {country} </option>));


        let imageStates = ImageList.map((img) => {
            if(this.props.state.country && (this.props.state.country==="all" ||  this.props.state.country===img.country))
                return(img.state);
        });
        let states = this.removeDuplicates(imageStates).map((state, index) => {
            if (state)
                return(<option key={index}> {state} </option>)
        });


        let imageCities = ImageList
        .map((img) => {
            if(this.props.state.country && (this.props.state.country==="all" ||  this.props.state.country===img.country))
                return(img);
        })
        .map((img) => {
            if(img && this.props.state.state && (this.props.state.state==="all" ||  this.props.state.state===img.state))
                return(img.city);
        });
        let cities = this.removeDuplicates(imageCities).map((city, index) => {
            if (city)
                return(<option key={index}> {city} </option>)
        });

        return(
            <div className="Form">
                <form onSubmit={() => this.props.onReset()}>     
                    <header className="Form_header">
                        <h2> Image Gallery </h2>
                    </header>
                    <h3>
                    <label> Country </label>
                    <select nmae="country" onChange={this.props.countryHandler} value={this.props.state.country}>
                        <option>all</option>
                        {countries}
                    </select>

                    <label> State </label>
                    <select nmae="country" onChange={this.props.stateHandler} value={this.props.state.state}>
                        <option>all</option>
                        {states}
                    </select>

                    <label> City </label>
                    <select nmae="country" onChange={this.props.cityHandler} value={this.props.state.city}>
                        <option>all</option>
                        {cities}
                    </select>

                    <div>
                        <button className="submit_button" type="submit"> RESET FILTER </button>
                    </div>
                    </h3>
                </form>
                <button className="danger_button" onClick={this.props.onLogout}> LOGOUT </button>
            </div>
        );
    }
}

export default Form;                
               