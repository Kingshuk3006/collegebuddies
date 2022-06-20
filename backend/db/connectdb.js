const mongoose = require('mongoose');

const connectDb = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: 'collegebudies',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log('Database Connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDb;