﻿module.exports = {
	"Redis":{
		"redisip":"SYS_REDIS_HOST",
		"redisport":"SYS_REDIS_PORT",
		"redisdb":"SYS_REDIS_DB"
	},
	"Services" : {
		"routingServiceHost": "SYS_ARDSLITEROUTINGENGINE_HOST",
		"routingServicePort": "SYS_ARDSLITEROUTINGENGINE_PORT",
		"routingServiceVersion": "SYS_ARDSLITEROUTINGENGINE_VERSION",
		"resourceServiceHost": "SYS_RESOURCESERVICE_HOST",
		"resourceServicePort": "SYS_RESOURCESERVICE_PORT",
		"resourceServiceVersion": "SYS_RESOURCESERVICE_VERSION"
	},
	"Host": {
		"LBIP":"LB_FRONTEND",
		"LBPort":"LB_PORT",
		"Port": "HOST_ARDSLITESERVICE_PORT",
		"Version": "HOST_VERSION"
	},
	"DB": {
	    "Type": "SYS_DATABASE_TYPE",
	    "User": "SYS_DATABASE_POSTGRES_USER",
	    "Password": "SYS_DATABASE_POSTGRES_PASSWORD",
	    "Port": "SYS_SQL_PORT",
	    "Host": "SYS_DATABASE_HOST",
	    "Database": "SYS_DATABASE_POSTGRES_USER"
	}
};