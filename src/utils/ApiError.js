class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went Wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.messsage = message
        this.success = false;
        this.error = error

        if(statck){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}