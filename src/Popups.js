import './App.css';
import React from 'react';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import Skylight from 'react-skylight';
import List from './API';
import{ AwesomeButton } from 'react-awesome-button';

var overlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 99,
  backgroundColor: 'rgba(0,0,0,0.2)'
}

var dialog = {
  width: '60%',
  height: '70%',
  minHeight: '400px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  bottom: '50%',
  right: '50%',
  marginTop: '-300px',
  marginLeft: '-32%',
  backgroundColor: '#fafafa',
  borderRadius: '15px',
  zIndex: '100',
  padding: '40px',
  boxShadow: '10px',
  fontFamily: 'Courier New, monospace',
  fontWeight: '520',
};

var button = {
  cursor: 'pointer',
  position: 'absolute',
  fontSize: '300%',
  right: '10px',
  top: '0'
}

export class Dates extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
              <AwesomeButton onPress={() => this.simpleDialog.show()}
          type="primary">date nights 🌹</AwesomeButton>
        <Skylight 
      hideOnOverlayClicked 
      ref={ref => this.simpleDialog = ref}
      dialogStyles={dialog}
      overlayStyles={overlay}
      closeButtonStyle={button}
      title= "date night locations 🌹"> 
      <List keyword='date' type='restaurant'></List>
      </Skylight>
      </div>
        )
    }
}

export class Outdoor extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <div>
            <AwesomeButton onPress={() => this.simpleDialog.show()}
        type="primary">outdoor activities ☀️</AwesomeButton>
      <Skylight 
    hideOnOverlayClicked 
    ref={ref => this.simpleDialog = ref}
    dialogStyles={dialog}
    overlayStyles={overlay}
    closeButtonStyle={button}
    title= "outdoor activities locations ☀️"> 
    <List keyword='outdoor activities' type='none'></List>
    </Skylight>
    </div>
      )
  }
}

export class Coffee extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <div>
            <AwesomeButton onPress={() => this.simpleDialog.show()}
        type="primary">coffee & tea ☕</AwesomeButton>
      <Skylight 
    hideOnOverlayClicked 
    ref={ref => this.simpleDialog = ref}
    dialogStyles={dialog}
    overlayStyles={overlay}
    closeButtonStyle={button}
    title= "coffee & tea locations ☕">
    <List keyword='coffee and tea' type='none'></List>
    </Skylight>
    </div>
      )
  }
}

export class Brunch extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
          <div>
            <AwesomeButton onPress={() => this.simpleDialog.show()}
        type="primary">brunch 🥐</AwesomeButton>
      <Skylight 
    hideOnOverlayClicked 
    ref={ref => this.simpleDialog = ref}
    dialogStyles={dialog}
    overlayStyles={overlay}
    closeButtonStyle={button}
    title= "brunch locations 🥐"> 
    <List keyword='brunch' type='restaurant'></List>
    </Skylight>
    </div>
      )
  }
}