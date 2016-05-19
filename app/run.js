var index = require('./index.js');

var event = {
  url: 'whitehouse.gov',
  pa11yOptions: {}
};

var context = {
  development: true
};

var callback = function(error, results) {
  if (!error) {
    console.log('Results:');
    console.log(results);
  } else {
    console.log('Error:');
    console.log(error);
  }
};

index.handler(event, context, callback);
