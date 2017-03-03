import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let tabsData = [
    {"name":"one", "content":"I'm the first"},
    {"name":"two", "content":"Second pane here"},
    {"name":"three", "content": "The best number in the world!!!"}
  ];
  ReactDOM.render(<Tabs tabsData={tabsData} />, root);
});
