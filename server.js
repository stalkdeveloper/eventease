const express = require('express');
const cookieParser = require('cookie-parser');
const connect = require('./dbConnect');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// console.log('Path to views:', path.join(__dirname, 'views'));

app.use(ejsLayouts);
/* app.set('layout', 'layouts/admin');  */

app.use('/', (req, res, next) => {
    res.locals.layout = 'layouts/auth';
    next();
});

const authRoutes = require('./app/routes/auth/AuthRoute');
app.use('/', authRoutes);

app.use('/admin', (req, res, next) => {
    res.locals.layout = 'layouts/admin';
    next();
});

// Import and use admin routes
const adminRoutes = require('./app/routes/admin/AdminRoute');
app.use('/admin', adminRoutes);

// Import and use API routes
const apiRoutes = require('./app/routes/api/ApiRoute');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

/* Error handling middleware */
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        message: 'Internal Server Error',
        errors: { global: [err.message] }
    });
});

connect();

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});
