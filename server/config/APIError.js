var httpStatus = require('http-status');
/*
import httpStatus from 'http-status';
*/

class ExtendableError extends Error {
    constructor(message, status, isPublic){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(this, this.constructor.name);
    }
}

class APIError extends ExtendableError {
    constructor(message, status, isPublic){
        super(message, status, isPublic = true);
    }
    toJSON() {
        if (this.isPublic)
            return {
                message : this.message,
                status: this.status
            }
        else
            return {
                status: this.status
            }
    }
}

module.exports = APIError;