import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HelloWorld from './HelloWorld';
import Accordion from './state-drills/Accordion';
// import RouletteGun from './RouletteGun';
import * as serviceWorker from './serviceWorker';
// removed import App 


// HelloWorld = new HelloWorld();

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
// e.g. <Accordion sections={sections} />

// ReactDOM.render(<RouletteGun randomNumber={8} />, document.getElementById('root'));
ReactDOM.render(<Accordion sections={sections} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


