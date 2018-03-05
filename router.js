const AuthenticationController = require('./controllers/UserController'),
    CategoryController = require('./controllers/CategoryController'),
    EmailController = require('./controllers/EmailController'),
    express = require('express');


module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router(),
        authRoutes = express.Router(),
        catRoutes = express.Router(),
        emRoutes = express.Router();


    // Set auth routes as subgroup/middleware to apiRoutes
    apiRoutes.use('/auth', authRoutes);
    // Registration route
    authRoutes.post('/register', AuthenticationController.register);
    // Login route
    authRoutes.post('/login', AuthenticationController.login);


    //route for category handles
    apiRoutes.use('/category', catRoutes);

    //Create categories
    catRoutes.post('/create', CategoryController.createCategory);

    //routes for handling oauth sign ins
    apiRoutes.use('/email', emRoutes);

    //store user emails in mongodb
    emRoutes.post('/create', EmailController.createOrFindEmail);

    // Set url for API group routes
    app.use('/api/v1/', apiRoutes);





};