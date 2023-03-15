const {app} = require('./config/express'); //{app} app: app
require('./utils/Mongoose');
require('dotenv').config();
const main = () => {
    try{
        app.listen(app.get("port"));
        console.log(`Server running in http://localhost:${app.get("port")}/`);
        console.log(`Web server running in http://localhost:4200`);
    }catch (err) {
        console.log(err);
    }
};

main();