import React from 'react';
import buffer from 'buffer'
import { Component } from 'react'
import {
    AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableHighlight,
} from 'react-native'
// import Axios from 'axios'
// const GitHubApi = Axios.create({
//     baseURL: 'https://api.github.com/user',
//     withCredentials: true
// })
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={loginStyles.container}>
                <Image style={loginStyles.logo} source={require('../assets/octocat.jpg')} />
                <Text style={loginStyles.heading}>Github Browser</Text>
                <TextInput onChangeText={(text) => this.setState({ username: text })} style={loginStyles.input} placeholder="Github Username" />
                <TextInput style={loginStyles.input} onChangeText={(text) => this.setState({ password: text })} placeholder="Github Password" secureTextEntry />
                <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={loginStyles.button}>
                    <Text style={loginStyles.buttonText}>Log In</Text>
                </TouchableHighlight>

            </View>
        )
    }
    onLoginPressed() {

        var b = new buffer.Buffer(this.state.username + ':' + this.state.password)
        var encodedAuth = b.toString('base64');
        console.log(encodedAuth)
        fetch('https://api.github.com/user', { headers: { 'Authorization': 'Basic ' + encodedAuth } }).then((response) => {
            return response.json()
        }).then((results) => {
            console.log(results)
        }).catch(e => console.log(e))
    }
}

var loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        padding: 10
    },
    logo: {
        width: 66,
        height: 55
    },
    heading: {
        fontSize: 30,
        marginTop: 10
    },
    input: {
        height: 50,
        marginTop: 10,
        alignSelf: 'stretch',
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec',
        borderRadius: 0,
        color: '#40BBEC'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    loader: {
        marginTop: 20
    }
})

module.exports = Login