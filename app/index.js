var PhantomJSInstaller = require('./phantomjs_install.js');
var phantomjs_installer = new PhantomJSInstaller();
var pa11y = require('pa11y');

exports.handler = function(event, context, callback) {
  console.log('about to install phantomjs');
  phantomjs_installer
        .install()
        .then( function( phantomjs_path ) {
            console.log( 'PhantomJS Installed at ' + phantomjs_path );
            var test = pa11y({
              phantom: {path: phantomjs_path}
            });

            test.run('nature.com', function (error, results) {
              console.log(results);
            });
            callback(null, "some success message");
            context.done();
        } )
        .catch( function( err ) {
            context.done( err );
        } );
};
