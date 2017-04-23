
// Put your const here
class Constants {
    static HTTP_PORT              = process.env.HTTP_HOST   || '1337';
    static MONGODB_URI_CONNECTION = process.env.MONGODB_URI || "mongodb://localhost:27017";
}

// Prevent modify object 
Object.seal(Constants);
export = Constants