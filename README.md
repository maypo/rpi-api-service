# basic http api service

written as a jumping off point for a Nodejs Raspberry Pi hack night meetup, associated with the [San Diego's JavaScript Community](http://sandiegojs.org/)
runs on Raspberry Pi Model B (or later models) running nodejs version 4


## quick start
````
  git clone https://github.com/maypo/rpi-api-service
  git install
  npm start

  curl http://localhost:8080/v1
````

only two routes are defined:
- /       -> renders this README.md as html via the commonmark module
- /hello  -> returns hello world as json
