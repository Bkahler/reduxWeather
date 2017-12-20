import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData){

    if(!cityData){
      return null
    };

    const name = cityData.city.name;
    const temps = cityData.list.map( weather=> weather.main.temp )
    const pressures = cityData.list.map( weather=> weather.main.temp )
    const humidities = cityData.list.map( weather=> weather.main.temp )

console.log(temps);
    return(
      <tr key={name}>
        <td> {name}</td>
        <td>
          <Sparklines height={100} width={140} data={temps}>
            <SparklinesLine color='green'/>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={100} width={140} data={pressures}>
            <SparklinesLine color='blue'/>
          </Sparklines>
        </td>
        <td>
          <Sparklines height={100} width={140} data={humidities}>
            <SparklinesLine color='red'/>
          </Sparklines>
        </td>
      </tr>
    );
  };

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
};

function mapStateToProps({ weather }){
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
