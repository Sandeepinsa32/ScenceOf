require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors');

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var contesttypeRouter = require('./routes/contesttype');
var contestRouter = require('./routes/contest');
var contestcategoryRouter = require('./routes/contestcat');
var testimonialRouter = require('./routes/testimonial');
var usersRouter = require('./routes/users');
var uploadimgRouter = require('./routes/uploadimg');
var productsRouter = require('./routes/product');

// admin

var adminRouter = require('./routes/admin/admin');

// end admin router

const port = process.env.PORT || 3000;
var app = express();

const corsOptions = {
	origin: 'http://localhost:3001',
	methods: ['GET', 'POST'],
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
	session({
		key: 'userid',
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
	})
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/blog', blogRouter);
app.use('/contest', contestRouter);
app.use('/contestcategory', contestcategoryRouter);
app.use('/contesttype', contesttypeRouter);
app.use('/testimonial', testimonialRouter);
app.use('/users', usersRouter);
app.use('/uploadimg', uploadimgRouter);

// admin
app.use('/admin', adminRouter);

// end admin

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(process.env.PORT, () => {
	console.log('server running ');
});

// module.exports = app;
