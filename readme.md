# Event Planner
## *Project Name:* EventEase
## *Description:* A tool for organizing events. Users can create, view, update, and delete events. The API will manage event details, while the web interface will provide a calendar view and event management features.


# Basic project setup
    Step 1: install node : npm i express
    Step 2: make server.js/app.js :  and set the file as per need
    Step 3: install nodemon globally to run server automatically : npm i nodemon 
    Step 4 : run: nodemon server.js
    Step 5: install mongoose : npm install mongoose
    Step 6: then setup database so make db.js and then make dbConnect.js
    
    <!-- Congrats You are ready to start node with mongo db -->

Make two tabel
users and events
<!-- 
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
 -->

 <!-- 
    CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        location VARCHAR(255),
        start_time TIMESTAMP NOT NULL,
        end_time TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  -->

  *command install*
    1. npm install express bcryptjs jsonwebtoken 
    2. npm install cookie-parser
    3. npm install dotenv
    4. npm install express-ejs-layouts <!-- npm install ejs-layouts -->

project-root/
├── app/
│   ├── controllers/
│   │   ├── admin/
│   │   │   ├── AuthController.js
│   │   │   └── UserController.js
│   │   ├── web/
│   │   │   ├── HomeController.js
│   │   │   ├── FeatureController.js
│   │   │   └── AuthController.js
│   │   └── api/
│   │       ├── AuthController.js
│   │       └── UserController.js
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   ├── routes/
│   │   ├── web/
│   │   │   ├── AuthRoute.js
│   │   │   └── UserRoute.js
│   │   ├── api/
│   │   │   ├── AuthRoute.js
│   │   │   └── UserRoute.js
│   │   └── admin/
│   │       ├── AuthRoute.js
│   │       └── UserRoute.js
│   ├── views/
│   │   ├── register.html
│   │   ├── login.html
│   │   └── profile.html
├── public/
│   ├── css/
│   │   └── bootstrap.min.css
│   ├── js/
│   │   └── bootstrap.min.js
│   └── images/
├── views/
├── admin/
│   ├── users/
│   │   ├── create.ejs
│   │   ├── edit.ejs
│   │   └── list.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs, fscript.ejs and extra-script.ejs etc.
│   └── dashboard.ejs
├── auth/
│   ├── login.ejs
│   ├── register.ejs
│   └── profile.ejs
├── layouts/
│   ├── auth.ejs
│   └── admin.ejs
├── partials/
│   ├── header.ejs
│   └── footer.ejs
├── index.ejs
├── .env
├── package.json
└── server.js



