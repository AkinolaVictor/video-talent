const dotenv = require("dotenv")
dotenv.config()

// const {PORT, DB_URL} = process.env

module.export = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}
