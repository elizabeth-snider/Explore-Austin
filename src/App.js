import './App.css';
import React from 'react';
import{ AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import { Switch, Route, Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';

export default function App() {

  return (
    <div>
      <Text></Text>
      <div className = "buttons">
        <AwesomeButton type="primary">date nights 🌹</AwesomeButton>
        <AwesomeButton type="primary">outdoor activities ☀️</AwesomeButton>
        <AwesomeButton type="primary">coffee & tea ☕</AwesomeButton>
        <AwesomeButton type="primary">brunch 🥐</AwesomeButton>
      </div>
      <div className = "bottomText">
        <p> ~ all locations are in austin, texas 📍 ~ </p>
      </div>
  </div>
  );
}

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