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
        let errorController = <View />;
        if (!this.state.success && this.state.badCredentials) {
            errorController = <Text style={loginStyles.error}>That username and password combination did not work.</Text>;
        }
        if (!this.state.success && this.state.unknownError) {
            errorController = <Text style={loginStyles.error}>We're sorry, there has been an unknown error.</Text>;
        }
        return (
            <View style={loginStyles.container}>
                <Image style={loginStyles.logo} source={require('../assets/octocat.jpg')} />
                <Text style={loginStyles.heading}>Github Browser</Text>
                <TextInput onChangeText={(text) => this.setState({ username: text })} style={loginStyles.input} placeholder="Github Username" />
                <TextInput style={loginStyles.input} onChangeText={(text) => this.setState({ password: text })} placeholder="Github Password" secureTextEntry />
                <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={loginStyles.button}>
                    <Text style={loginStyles.buttonText}>Log In</Text>
                </TouchableHighlight>

                {errorController}
            </View>
        )
    }
    onLoginPressed() {

        let authService = require('./AuthService');
        authService.login({
            username: this.state.username,
            password: this.state.password
        }, (results) => {
            this.setState(results);
        })
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
    },
    error: {
        color: 'red',
        paddingTop: 10
    }
})

module.exports = Login