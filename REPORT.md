# OAuth Comparative Analysis

## GitHub OAuth

### Research Conducted By: Chris Kozlowski, Melissa Stock, Jagdeep Singh

### Overall Score and Comments

#### Score (Out of 10): 

#### General Comments

![]()





#### Pros

- Great, easy to follow docs
- Great if target market is developers

#### Cons

- Implicit grant type not supported
- Small user base
- Limited personal information on user



### Ratings and Reviews

#### Documentation

- Very high-level introduction to OAuth 

- very clear on requirements. 

- great examples that include terminal commands



#### Systems Requirements

Above and beyond 'node' and 'linux', what dependencies or core requirements exist for this framework?  Can it play at AWS/Heroku?  Does it require a certain database?



No system requirements, 

Uses mongo database to store user data but any database can be used.



#### Ramp-Up Projections

How long would/should it take a team of mid-junior developers to become productive?

~2 hours to get an understanding of the OAuth process and get to work.



#### Community Support and Adoption levels

How popular is this framework? What big companies are running on it? How is it "seen" in the general JS community?  Is there an active community of developers supporting and growing it?



Any big or small tech company uses it, such as Travis, Amazon, Wordpress, Swagger, Heroku, npm, etc.



Very popular in the tech community. Very active community with over 37 million users.



### Links and Resources

- [docs](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
- [examples/tutorials](https://developer.github.com/v3/guides/basics-of-authentication/)

### Code Demos

- [live/running application](http://xyz.com)
- [code repository](https://github.com/401-advanced-javascript-cdk/lab12-oauth/tree/master/auth-server)

### Operating Instructions

If someone were to download your repo (above), what steps do they need to take to run the application

- Create a github application ([link](https://github.com/settings/applications/new))
  - save `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in .env file
- In .env file, set the following variables:
  - `GITHUB_AUTH_URI=https://github.com/login/oauth/authorize`
  - `GITHUB_TOKEN_URI=https://github.com/login/oauth/access_token`
  - `GITHUB_USER_URI=https://api.github.com/user`
- `npm start`

- Endpoint: `/localhost:8080`
