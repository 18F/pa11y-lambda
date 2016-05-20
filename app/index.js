var inLambda = function(context) {
  return typeof context.development == 'undefined';
};

var pa11yHandler = function(url, options, callback) {
  var pa11y = require('pa11y');
  var test = pa11y(options);

  test.run(url, function (error, results) {
    if (!error) {
      callback(results);
    } else {
      callback(error);
    }
  });
};

var installPhantomJS = function(callback) {
  var PhantomJSInstaller = require('./phantomjs_install.js');
  var phantomjs_installer = new PhantomJSInstaller();
  phantomjs_installer
    .install()
    .then(function(phantomjs_path) {
      callback(phantomjs_path)
      context.done();
    })
    .catch(function(err) {
      context.done(err);
    });
};

exports.handler = function(event, context, callback) {
  var options = event.pa11yOptions;
  var url = event.url;

  if (inLambda(context)) {

    installPhantomJS(function(phantomjs_path) {
      options['phantom'] = {path: phantomjs_path};

      pa11yHandler(url, options, function(results) {
        callback(null, results);
      });
    });

  } else {

    pa11yHandler(url, options, function(results) {
      callback(null, results);
    });

  }

};
