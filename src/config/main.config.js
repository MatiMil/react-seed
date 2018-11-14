/**
 * Created by Matijas on 11.04.2017.
 */

import { isDevelop } from "../js/helper/util";

export default {
    BASE_URL: isDevelop() ? 'https://jsonplaceholder.typicode.com/' : 'https://jsonplaceholder.typicode.com/'
}