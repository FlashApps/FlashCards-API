	require('dotenv').load();
	module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/flashcardsDB'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
