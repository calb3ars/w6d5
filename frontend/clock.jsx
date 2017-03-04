import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  render() {
    return (
      <div>
        <ul>
          <li>Time: { this.parsedTime.bind(this) }</li>
          <li>Date: { this.state.time.toDateString() }</li>
        </ul>
      </div>
    );
  }

  parsedTime() {
    let date = this.state.time;
    return `${date.getHours}:${date.getMinutes}:${date.getSeconds}`;
  }

  addSeconds() {
    setInterval(() => {
      let date = this.state.time;
      date.setSeconds(date.getSeconds() + 1);

      this.setState({ time: date });
    }, 1000);
  }

  componentDidMount() {
    this.addSeconds();
  }

  componentWillUnmount() {
    clearInterval(this.addSeconds());
  }
}

export default Clock;
