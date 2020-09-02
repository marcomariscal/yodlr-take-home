# Yodlr Front End Engineer Code/Design Challenge

## Challenge

The purpose of this app is to demonstrate design and frontend integration capability.

The app uses a static backend via a json file and allows the user to signup, view all users, and activate admin functionality for any user. I decided to use React for the frontend becuase of familiarity and ease of componentizing.

At a minimum, there were three things required for the app/submission:

- Users should be able to register
- Admin page should list all users
- Design/layout of content

In addition to the above, the app also integrates:

- form validation using Formik
- dynamic data in the admin route, allowing for user admin activation seamlessly
- searching of users within the admin route
- component testing
- Material UI design

## Getting Started

To use this application, you will need to download and install [NodeJS](http://nodejs.org/download/).

Fork this repository and git clone your fork:

`git clone https://github.com/marcomariscal/yodlr-take-home.git`

Next, you need to install the package dependencies by running the following command in the top-level directory of this source tree:

```
npm install
```

Once the dependancies are installed, you can start the application server by running

```
npm start
```

Once the server is running (npm start uses concurrently to start the frontend and the backend), you can access the app's frontend by opening your browser to [http://localhost:3000](http://localhost:3000).

To stop the server, press CTRL-C.

## REST API

The Users JSON REST API is exposed at [http://localhost:5000/users](http://localhost:5000).

On server start, user data is read into memory from init_data.json. All subsequent actions are done against this memory store. Stopping and starting the server will re-initialize data from init_data.json.

#### API Endpoints

- **/users**  
  HTTP GET: returns array of all users  
  HTTP POST: creates a new user, returns the created user data
- **/users/:id**  
  HTTP GET: returns the user with given id (numeric, auto-incrementing). HTTP 404 if user not found  
  HTTP PUT: updates the user with given id and returns updated record. HTTP 404 if user not fund.  
  HTTP DELETE: removes the users with given id, returns nothing (HTTP 204)

Here is an example of results returned from HTTP GET on /users:

```
[{"id":1,"email":"kyle@getyodlr.com","firstName":"Kyle","lastName":"White","state":"active"},
{"id":2,"email":"jane@getyodlr.com","firstName":"Jane","lastName":"Stone","state":"active"},
{"id":3,"email":"lilly@getyodlr.com","firstName":"Lilly","lastName":"Smith","state":"pending"},
{"id":4,"email":"fred@getyodlr.com","firstName":"Fred","lastName":"Miles","state":"pending"},
{"id":5,"email":"alex@getyodlr.com","firstName":"Alexandra","lastName":"Betts","state":"pending"}]
```
