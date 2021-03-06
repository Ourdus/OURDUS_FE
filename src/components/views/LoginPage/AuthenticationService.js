import axios from 'axios';

class AuthenticationService {
    // send username, password to the SERVER
    executeJwtAuthenticationService(email, name, password,tel, point, writerFlag) {
        const data = {
            email, 
            name, 
            password,
            tel, 
            writerFlag
          }
        return axios.post('api/user/join', data)
    }

    executeAddAddress(name,phone,zipcode,addressMain,addressSub) {
        const token = localStorage.getItem('token');
        const data = {
            name,
            phone,
            zipcode,
            addressMain,
            addressSub
          }
        return axios.post('api/user/join', data)
    }

    executeHelloService() {
        console.log("===executeHelloService===")    
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['jwt-auth-token'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    withdrawUser() {
        const token = localStorage.getItem('token');
        return axios.delete('api/t/user/delete', {
            token
        })
    }
    sendUserToken() {
        const token = localStorage.getItem('token');
        return axios.get('/api/t/user/address', {
            token
        })
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService()