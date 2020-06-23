import axios from 'axios';

const baseDomain = process.env.VUE_APP_URL_BASE;
const baseURL = `${baseDomain}/box_da97eb998ae0f58a2f7e`;

export default axios.create({
    baseURL,
});
