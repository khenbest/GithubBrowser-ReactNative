var buffer = require('buffer')
class AuthService {
    login(creds, callback) {
        let b = new buffer.Buffer(creds.username + ':' + creds.password)
        let encodedAuth = b.toString('base64');
        console.log(encodedAuth)
        fetch('https://api.github.com/user', { headers: { 'Authorization': 'Basic ' + encodedAuth } })
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                }
                throw {
                    badCredentials: response.status == 401,
                    unknownError: response.status != 401
                }
            })
            .then((response) => {
                return response.json()
            })
            .then((results) => {
                return callback({ success: true })
            })
            .catch((e) => {
                return callback(e)
            })
    }
}
module.exports = new AuthService();