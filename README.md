# puny.li - A Full Stack URL Shortener

A simple full stack app for creating short urls like bit.ly

puny.li/cg

* [x] Create Server Folder
  * [x] Init npm
  * [x] Add express morgan body-parser nodemon
  * [x] Add start script and dev script
* [x] Create public Folder
  * [x] Create index.html
    * [x] Add vue CDN
    * [x] Add bulma CSS
    * [x] Homepage Layout
  * [x] Serve public folder from express
* [x] Create new url form on client
* [ ] Add DB to server
  * [x] Add monk
  * [x] Create db folder
    * [x] Create db connection
  * [ ] Create route to add url to db `/api/url`
    * [x] validate puny with joi
      * url
      * name alphanum, min 1 chars, max 100 chars
    * [x] Make sure name is not in use
      * [x] insert url into db
      * [x] respond with inserted message
    * [x] Respond with error if in use
* [x] Submit form - fetch POST to server
  * [x] Show any errors
  * [x] Show create link on page
* [x] Create route to redirect a url
  * [x] Search by name - if found, redirect to url
    * [x] If not found, show 404
* [ ] Deploy!
* [ ] Alias domain

## Stretch
* [ ] Log links to a click
  * [ ] Date/Time
* [ ] View link page to see number of clicks