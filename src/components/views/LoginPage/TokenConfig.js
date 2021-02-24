import axios from 'axios';

export const instance = axios.create({
    });
// instance.defaults.headers['Content-Type'] = 'application/json';
        
export const checkHeader = () => {
    console.log("checkHeader:  " + instance.defaults.headers.common['jwt-auth-token']);
    console.log("check에서 확인한 cookie는: " + document.cookie);
}

export const setJwt = (token) => {
    instance.defaults.headers.common['jwt-auth-token'] = token;
    console.log("setJwt:  " + instance.defaults.headers.common['jwt-auth-token']);
    setCookie('jwt-auth-token', token);
    console.log("set에서 확인한 cookie는: " + document.cookie);
    //cookie setting
}

export const getJwt = (uri) => {
    //cookie get, header에 새로 update
    console.log("getJwt:  " + instance.defaults.headers.common['jwt-auth-token']);
    instance.defaults.headers.common['jwt-auth-token'] = getCookie('jwt-auth-token');
    console.log("get에서 cookie로 넣어준:  " + instance.defaults.headers.common['jwt-auth-token']);
    return axios
    .get(uri,{
      headers:{
      'jwt-auth-token': instance.defaults.headers.common['jwt-auth-token']
      }
    })
}

export const PostJwt = (uri, data) => {
    instance.defaults.headers.common['jwt-auth-token'] = getCookie('jwt-auth-token');
    return axios.post(uri, data, {
        headers: {
            'jwt-auth-token': instance.defaults.headers.common['jwt-auth-token']
        }
    })
}

export const deleteJwt = () =>{
    deleteCookie('jwt-auth-token');
    delete instance.defaults.headers.common['jwt-auth-token'];
}


/*하단은 쿠키 사용 함수들, document.cookie 접근을 활용하며 정규표현식을 이용해 name을 구분한다.
참고: https://ko.javascript.info/cookie
*/

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

// export default {instance, checkHeader, setJwt, getJwt, PostJwt};