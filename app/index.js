var inLambda = function() {
  return false;
};

var pa11yHandler = function(url, options, callback) {
  var pa11y = require('pa11y');
  var test = pa11y(options);

  test.run('nature.com', function (error, results) {
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
  var options = {};

  if (inLambda()) {
    installPhantomJS(function(phantomjs_path) {
      options['phantom'] = {path: phantomjs_path};
      pa11yHandler('nature.com', options, function(results) {
        callback(null, results);
      });
    });
  } else {
    pa11yHandler('nature.com', options, function(results) {
      callback(null, results);
    });
  }

};
