// Put your const here
var Constants = (function () {
    function Constants() {
    }
    Constants.HTTP_PORT = process.env.HTTP_HOST || '1337';
    Constants.MONGODB_URI_CONNECTION = process.env.MONGODB_URI || "mongodb://localhost:27017/myapp";
    return Constants;
})();

// Prevent modify object
Object.seal(Constants);
module.exports = Constants;
