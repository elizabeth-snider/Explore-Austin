import React, {Component, useEffect} from 'react';
import axios from 'axios';
import { GoogleComponent } from 'react-google-location';
import { FlatList, Text, View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Dates, Outdoor, Coffee, Brunch } from './Popups';
import HyperLink from 'react-native-hyperlink';

export default class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            photos: []
        }
    }

    componentDidMount(){
        this.search();
    }

    search() {
        const url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = 'location=30.267,-97.733';
        const radius = '&radius=2000';
        const type = '&type=' + this.props.type;
        const keyword = '&keyword=' +  this.props.keyword;
        const key = '&key=AIzaSyA0u0GkazihaJoi_N6YAT5v-kv61OaXkjA';
        const searchURL = url + location + radius + type + keyword + key;

        fetch(searchURL, {
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
            })
        })
        .then(response => response.json())
        .then(result => this.setState({list: result}))
        .catch(e => console.log(e))
    }

    fetchPhoto(ref){
        const url = 'https://maps.googleapis.com/maps/api/place/photo?'
        const reference = 'photo_reference=' + ref;
        const key = '&key=AIzaSyA0u0GkazihaJoi_N6YAT5v-kv61OaXkjA';
        const height = '&maxheight=200';
        const width = '&maxwidth=200';
        const searchURL = url + reference + height + width + key;

        fetch(searchURL)
        .then(result => this.setState({photo: result}))
    }

    render(){
        console.log(this.state.list.results);

        return(
            <SafeAreaView>
                <FlatList
                style={styles.container}
                contentContainerStyle={styles.children}
                numColumns={1}
                data={this.state.list.results}
                keyExtractor={(item) => item.place_id}
                renderItem={({item}) => (
                    <View>
                        {/* <img 
                        src={this.state.photo}
                        height='200'
                        width='200'/>  */}
                        <Text
                        style={{
                            fontFamily: 'Courier New, monospace',
                            fontWeight: 'bold',
                            fontSize: '120%',
                            color: '#2a6787'
                        }}>{item.name}
                        </Text>     
                    </View>
                )}/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        height: '100%',
    },
    children: {
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
