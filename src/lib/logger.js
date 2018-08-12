import bunyan from "bunyan";
/** Logger for creating log file
* @log
*/
const log = bunyan.createLogger({name: "NodeJsTask",
streams: [{
        path: './logs/nodetask.log',
        // `type: 'file'` is implied
    }]
});
export  {
	log
};
