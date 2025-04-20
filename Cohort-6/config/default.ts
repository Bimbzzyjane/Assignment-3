import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    dbURI:
    process.env.NODE_ENV === 'development' 
    ? process.env.LOCAL_DB 
    : process.env.NODE_ENV === 'test'
    ? process.env.TEST
    : process.env.DB
};
