import './App.css';
import React from 'react';
import{ AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import Skylight from 'react-skylight';
import List from './API';
import { Dates, Outdoor, Coffee, Brunch } from './Popups';


export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
    <div>
      <Text></Text>
      <div className = "buttons">
        <Dates></Dates>
        <Outdoor></Outdoor>
        <Coffee></Coffee>
        <Brunch></Brunch>
      </div>
      <div className = "bottomText">
        <p> ~ all locations are in austin, texas 📍 ~ </p>
      </div>
      <div className = "api">
      <p> - updated using the Google Places API - </p>
      </div>
  </div>
  );
}}

function Text() {
  return (
    <div>
      <div className = "text">
        <p>welcome</p>
      </div>
      <div className = "smallerText">
        <p> choose a category! </p>
      </div>
    </div>
  );
}