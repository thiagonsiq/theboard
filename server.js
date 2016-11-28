var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var flash = require("connect-flash");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var controllers = require("./controllers");

//setup the view engine
app.set("view engine", "vash");

//opt into services
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: "anythingoeshere", resave: false, saveUninitialized: true, }));
app.use(flash());   

//set the public static resource folder
app.use(express.static(__dirname + "/public"));

//use authentication
var auth = require("./auth");
auth.init(app);

//Map the routes
controllers.init(app);

var server = http.createServer(app);

server.listen(3000);