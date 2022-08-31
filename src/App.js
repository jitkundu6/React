import React, { Component } from 'react';
import './App.css';

import Form from './components/Form/Form';
import ImageList from './imageList.json';

class App extends Component {
  state = {
    country: 'all',
    state: 'all',
    city: 'all',
  };

  resetHandler = () => {
    this.setState({
      country: 'all',
      state: 'all',
      city: 'all',
    });
  }

  countryHandler = (event) => {
    console.log("Country changed!");
    console.log(this.state);
    this.setState({
        country: event.target.value,
        state: 'all',
        city: 'all',
    });
  }

  stateHandler = (event) => {
      console.log("State changed!");
      console.log(this.state);
      this.setState({
          state: event.target.value,
          city: 'all',
      });
  }

  cityHandler = (event) => {
      console.log("City changed!");
      console.log(this.state);
      this.setState({
          city: event.target.value,
      });
  }


  render() {
    console.log(this.state);

    let images = ImageList.map((img) => {
      if (img && (this.state.country==="all" ||  this.state.country===img.country))
        return (img);
    })
    .map((img) => {
      if(img && (this.state.state==="all" ||  this.state.state===img.state))
        return (img);
    })
    .map((img) => {
      if(img && (this.state.city==="all" ||  this.state.city===img.city))
        return (img);
    })
    .map((img, index) => {
      if(img)
        return (
            <img key={index} src={img.image} alt="" className='Image'/>
        );
    });

    return (
      <div className="App">
        <Form 
          state={this.state}
          onSubmit={this.resetHandler} 
          countryHandler={this.countryHandler}
          stateHandler={this.stateHandler}
          cityHandler={this.cityHandler}
        />
        {images}
      </div>
    );
  }

}

export default App;
