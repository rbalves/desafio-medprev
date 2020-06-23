import axios from 'axios';

const baseDomain = process.env.VUE_APP_URL_BASE;
const baseURL = `${baseDomain}/ejrejgorejgo`;

export default axios.create({
    baseURL,
});
