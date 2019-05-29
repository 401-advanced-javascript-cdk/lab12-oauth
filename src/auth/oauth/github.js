'use strict';

const superagent = require('superagent');
const Users = require('../users-model.js');

let authorize = (request) => {
  return superagent.post(process.env.GITHUB_TOKEN_URI)
    .type('form')
    .send({
      code: request.query.code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      redirect_uri: `https://lab12-auth-server.herokuapp.com/oauth/github`,
    })
    .then(tokenResponse => {
      console.log(tokenResponse.body)
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
      return Users.createFromOauth(githubUser.email);
    })
    .then( actualUser => {
      return actualUser.generateToken(); 
    })
    .catch( error => error );
};


module.exports = authorize;
