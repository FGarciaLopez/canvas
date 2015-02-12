var gulp = require("gulp");
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task( 'default',  function() {
	gulp
		.src("./app/*.js")
		.pipe( concat( "main-ludiko.js"))
		.pipe( gulp.dest("./dist/tmp"));
	gulp
		.src("./app/lk/**/*.js")
		.pipe( concat( "ludiko.js"))
		.pipe( gulp.dest("./dist/tmp"));
	gulp
		.src("./app/style/ludiko.css")
		.pipe( gulp.dest("./dist"));

	gulp
		.src("./app/img/**/*.*")
		.pipe( gulp.dest("./dist/img"));

	gulp.src("./app/lk/**/*.html")
		.pipe(minifyHtml({
	        empty: true,
	        spare: true,
	        quotes: true
	    }))
	    .pipe(ngHtml2Js({
	        moduleName: "LkPartials",
	        prefix: "/lk"
	    }))
		.pipe(concat("partials.js"))
	    .pipe(gulp.dest("./dist/tmp"));	

	gulp.src("./dist/tmp/*.js")
		.pipe(concat("ludiko.min.js"))
		.pipe(uglify())
	    .pipe(gulp.dest("./dist"));	
})