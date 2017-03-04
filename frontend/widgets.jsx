import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.getElementById("tabs");
  const clock = document.getElementById("clock");
  let tabsData = [
    {"name":"one", "content":"I'm the first"},
    {"name":"two", "content":"Second pane here"},
    {"name":"three", "content": "The best number in the world!!!"}
  ];
  ReactDOM.render(<Tabs tabsData={tabsData} />, tabs);
  ReactDOM.render(<Clock />, clock);
});
