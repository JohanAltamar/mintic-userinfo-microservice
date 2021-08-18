const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');
const personalInfoRoutes = require('../routes/personalInfo.routes');
const educationInfoRoutes = require('../routes/education.routes');
const experienceInfoRoutes = require('../routes/experience.routes'); //ruta para encontrar route de experiencia

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/v1/personal-info', personalInfoRoutes);
        this.app.use('/api/v1/education', educationInfoRoutes);
        this.app.use('/api/v1/experience',experienceInfoRoutes); //uri para la experienci laboral
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port: ${this.port}`)
        });
    }
}

module.exports = Server;