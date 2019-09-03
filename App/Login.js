'use strict'
var { AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableHighlight
} = React;

var Login = React.createClass({
    render() {
        return (
            <View style={loginStyles.container}>
                <Image style={loginStyles.logo} source={require('../assets/octocat.jpg')} />
                <Text style={loginStyles.heading}>Github Browser</Text>
                <TextInput style={loginStyles.input} placeholder="Github Username" />
                <TextInput style={loginStyles.input} placeholder="Github Password" secureTextEntry="true" />
                <TouchableHighlight style={loginStyles.button}>
                    <Text style={loginStyles.buttonText}></Text>
                </TouchableHighlight>
            </View>
        )
    }
})

var loginStyles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
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
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    }
})

module.exports = Login