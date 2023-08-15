//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const session = require("express-session");
var { check, validationResult } = require("express-validator");
// var MongoStore = require("connect-mongo");
//
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
//
const app = express();
//
const initialiseApp = require("./utils/initialise");
// const config = require("./config/config");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
const APP_SECRET = process.env.APP_SECRET;

//
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser(APP_SECRET));
app.use(session({
    secret: APP_SECRET,
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


// const MONGODB_URI = config.db;

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     bufferCommands: false, // Disable buffering of commands
// });

// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// db.once('open', () => {
//     console.log('Connected to database');
// });


// Express sessions midleware
// app.use(
//     session({
//         secret: APP_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         store: MongoStore.create({
//             mongoUrl: MONGODB_URI
//         }),
//         coookie: { secure: true }
//     })
// );


// Express Validator middleware 
app.use(function (req, res, next) {
    // Create an array of validation rules 
    var rules = [check("name").notEmpty().withMessage("Name is required"), check("email").isEmail().withMessage("Email is invalid"), check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"), check("image").custom((value, { req }) => {
        var extension = (path.extname(req.file.originalname)).toLowerCase(); switch (extension) {
            case ".jpg": return ".jpg"; case ".jpeg": return ".jpeg"; case ".png": return ".png"; case "": return ".jpg"; default: throw new Error("Invalid image format");
        }
    }).withMessage("Image must be jpg, jpeg or png")];
    // Run the validation on the request 
    Promise.all(rules.map(rule => rule.run(req))).then(() => {
        // Get the validation result 
        var errors = validationResult(req);
        // If there are errors, attach them to the request object 
        if (!errors.isEmpty()) { req.errors = errors.array(); }
        // Call the next middleware 
        next();
    })
        .catch(err => {
            // Handle any unexpected error 
            console.error(err); res.status(500).send("Something went wrong");
        });
});

// Express Messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//
app.use("/cart", require("./routes/cart"));
app.use("/blog", require("./routes/blog"));
app.use("/order", require("./routes/order"));
app.use("/privacy-policy", require("./routes/privacy"));
app.use("/contact", require("./routes/contact"));
app.use("/products", require("./routes/products"));
app.use("/wholesale", require("./routes/wholesaleproducts"));
app.use("/", require("./routes/index"));

//
initialiseApp(app);