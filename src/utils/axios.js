import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.withmono.com'
});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['mono-sec-key'] = 'test_sk_9wdHwKIqVmOwi9eaLEFW';

export default instance;