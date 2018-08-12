import bunyan from "bunyan";
/** Logger for creating log file
* @log
*/
const log = bunyan.createLogger({name: "NodeJsTask"
});
export  {
	log
};
