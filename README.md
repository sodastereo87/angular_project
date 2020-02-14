# angular_project

Prerequisites.
Install json-server is used to prototype and mock a backend server.
Using the command:

\$ npm install -g json-server

### Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:4200
ng serve

# Build for production
ng build
```

### Run the worker.js directly with json-server:

sample data db.json

\$ json-server workers.js

http://localhost:3000/publications

### To run the server on your browser to see the resources:

\$ npm run mock:api

http://localhost:4000/users
http://localhost:4000/companies

### to run the angular app on the browser

\$ ng serve --open

http://localhost:4200

### Overview

The app will have simple, fake dummy text coming from a jsonplaceholder.
A fake REST API server for testing and prototyping.
JSONPlaceholder is powered by JSON Server.
For more info check the documentation.

https://openbase.io/js/jsonplaceholder

### Features

-No registration
-Zero-config
-Basic API
-“Has many” relationships
-Filters and nested resources
-Cross-domain (CORS and JSONP)
-Supports GET, POST, PUT, PATCH, DELETE and OPTIONS verbs
-Compatible with Backbone, AngularJS, Ember, …

NOTE.
I just missed a few things. For example; the data is sort by id and not by date cause the fake REST API server does not provide a date format. I used jsonplaceholder fake REST API server for testing and prototyping. It is easy to use and I wanted to avoid the registering process from a public API, so I can focus more on the task. I hope this will satisfy you. This is the first time I work with Angular and TypeScript. I went from 0 to this. I did my best and went the closest to what you need, however it was not enough time to learn and apply a new language in 5 days. No matter what, I am happy cause I loved this new challenge. I got to learn a lot and will continue practicing with Angular.
Please let me know if you have further questions.
Thanks.
