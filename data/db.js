const mongoose = require('mongoose');

const {NODE_ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`

// mongodb+srv://MeetingMate:<password>@cluster0.jh2dp64.mongodb.net/?retryWrites=true&w=majority

// console.log(process.env," process.env ");
// console.log(connectionStr);

mongoose.connect(connectionStr, {  
    useNewUrlParser: true,
});

mongoose.connection.on('error', error => {
    console.error(`could not connect to database ${DB_NAME}, error = `, error.message)
    process.exit(1);
})

mongoose.connection.on('open', function() {
    console.error(`connected to database ${DB_NAME}`)
})
