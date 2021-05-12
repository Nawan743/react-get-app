import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

export default class Index extends React.Component {
  state = {
    weather: []
  }

  componentDidMount() {
    axios.get(`https://goweather.herokuapp.com/weather/Uberlandia`)
      .then(res => {
        const weather = res.data.forecast;
        this.setState({ weather });
        console.log(weather)
      })
      .catch(e => console.log(e));
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>Previsão do tempo em Uberlândia nos próximos dias</h1>
        <table>
          <tr>
            <th>Dia</th>
            <th>Temperatura</th>
            <th>Vento</th>
          </tr>
          {this.state.weather.map(prevision =>
            <React.Fragment>
              <tr>
                <td>{prevision['day']}</td>
                <td>{prevision['temperature'].replace('+', '')}</td>
                <td>{prevision['wind']}</td>
              </tr>
            </React.Fragment>
          )}
        </table>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Index></Index>, document.getElementById('root'));