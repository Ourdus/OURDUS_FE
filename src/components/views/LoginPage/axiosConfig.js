import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
});

instance.defaults.headers['Content-Type'] = 'application/json';
// Where you would set stuff like your 'Authorization' header, etc ...
console.log(instance.defaults.headers.common['jwt-auth-token']);

// Also add/ configure interceptors && all the other cool stuff


export default instance;