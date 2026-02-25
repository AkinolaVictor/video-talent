const dotenv = require("dotenv")
dotenv.config()

// const {PORT, DB_URL} = process.env
module.export = {
// export const env = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
}
