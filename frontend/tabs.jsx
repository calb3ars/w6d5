import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(data) {
    super();
    this.tabsData = data.tabsData;
    this.state = { tab: 0 };
  }

  setIndex(idx, e) {
    this.setState( {tab: idx});
  }

  render() {

    const tabsArray = this.tabsData.map((key, idx) => (
      <h1 key={idx}
        onClick={this.setIndex.bind(this, idx)}
        className="tabHeaders">
          { key.name }
      </h1>
    ));

    return (
      <div id="tabs">
        <ul>
          { tabsArray }
        </ul>
        <article>{ this.tabsData[this.state.tab].content }</article>
      </div>
    );
  }
}

export default Tabs;
