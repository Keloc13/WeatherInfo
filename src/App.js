

import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from "./components/Weather";

const API_KEY = '1250ba7fc9a332b21fd2d37bbf532f1c'

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json()
        if(city && country) {
            console.log(data)
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""

            }) }
            else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please enter the value"})
            }
    }

    render(){
        return <div>
            <div className={"wrapper"}>
                <div className={"main"}>
                    <div className={"container"}>
                        <div className={"row"}>

                            <table>
                                <tr>
                                    <td className=".col-xs-5 title-container">
                                       <Titles/>
                                    </td>

                                    <td className="col-xs-7 form-container">

                                <Form getWeather={this.getWeather}/>
                                <Weather
                                    temperature={this.state.temperature}
                                    city={this.state.city}
                                    country={this.state.country}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    error={this.state.error}/>
                                   </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default App;


















/** Previous code**/




/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './pages/index'

class App extends Component {
    state = {notes: {
                1: {
                     _id: 1,
                    title: "Tite for the notes",
                    body: "This is the body of my note",
                    updateAt: new Date()
              },
                 2:{
                     _id: 2,
                     title: "Second titles",
                     body: "This is the body of my note",
                     updateAt: new Date()
                 }
          }
       }

  render() {
    return (
      <div className="App">
        <title>Notes</title>
          <div>
              Hello world
              <IndexPage notes={this.state.notes}/>
          </div>
      </div>
    );
  }
}

export default App;

*/
