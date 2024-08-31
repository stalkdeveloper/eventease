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


app.use(ejsLayouts);
app.set('layout', 'layouts/auth');

/* app.use('/admin', (req, res, next) => {
    app.set('layout', 'layouts/admin');
    next();
}); */

app.use('/admin', (req, res, next) => {
    res.locals.layout = 'layouts/admin';
    next();
});

/* Define routes for different sections */
const apiAuthRoutes = require('./app/routes/api/AuthRoute');
const adminAuthRoutes = require('./app/routes/admin/AuthRoute');
const adminDashboardRoutes = require('./app/routes/admin/DashboardRoute');

// Use routes
app.use('/', adminAuthRoutes);
app.use('/api', apiAuthRoutes);
app.use('/admin', adminDashboardRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

/* app.use((req, res, next) => {
    res.status(404).render('404');
}); */

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
