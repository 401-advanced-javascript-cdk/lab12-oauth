'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js.js');

let authorize = (request) => {
  
  console.log('(1)', request.query.code);
  
  return superagent.post(process.env.GITHUB_TOKEN_URI)
    .type('form')
    .send({
      code: request.query.code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: `${process.env.API}/oauth/github`,
    })
    .then(tokenResponse => {
      let githubToken = tokenResponse.body.access_token;
      return githubToken;
    })
    .then(githubToken => {
      return superagent.get(process.env.GITHUB_USER_URI)
        .set('Authorization', `Bearer ${githubToken}`)
        .then( userResponse => {
          let githubUser = userResponse.body;
          return githubUser;
        });
    })
    .then(githubUser => {
      console.log('(4) Create Our Account');
      return Users.createFromOauth(githubUser.email);
    })
    .then( actualUser => {
      return actualUser.generateToken(); 
    })
    .catch( error => error );
};


module.exports = authorize;
