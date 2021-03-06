import bunyan from "bunyan";

import {APP_NAME} from "../config/constants";


/** Logger for creating log file
 * @log
 */
const log = bunyan.createLogger({
	name: APP_NAME,
streams: [{
        path: 'logs/nodetask.log',
    }]
});
export { log };
