//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://user:onetwo3@ds131905.mlab.com:31905/bc4db', //place the URI of your mongo database here.
  },
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */