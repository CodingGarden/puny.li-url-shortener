# puny.li - A Full Stack URL Shortener

A simple full stack app for creating short urls like bit.ly

* [ ] Create Server Folder
  * [ ] Init npm
  * [ ] Add express morgan body-parser nodemon
  * [ ] Add start script and dev script
* [ ] Create public Folder
  * [ ] Create index.html
    * [ ] Add vue CDN
    * [ ] Add bulma CSS
    * [ ] Homepage Layout
  * [ ] Serve public folder from express
* [ ] Create new url form on client
  * [ ] Submit form - fetch POST to server
    * [ ] Show any errors
    * [ ] Show create link on page
* [ ] Add DB to server
  * [ ] Add monk
  * [ ] Create db folder
    * [ ] Create db connection
  * [ ] Create route to add url to db `/api/url`
    * [ ] validate url with joi
      * url
      * slug - optional, alphanum, min 5 chars, max 100 chars
    * [ ] Generate code
    * [ ] Make sure slug is not in use
      * [ ] insert url into db
      * [ ] respond with inserted message
    * [ ] Respond with error if in use
* [ ] Create route to redirect a url
  * [ ] Search by code - if found, redirect
    * [ ] If code not found, search by slug - if found, redirect
      * [ ] If not found, show 404
* [ ] Deploy!
* [ ] Alias domain

## Stretch
* [ ] Log links to a click
  * [ ] Date/Time
* [ ] View link page to see number of clicks
* [ ] edit - unique code to allow edit of slug
* [ ] Edit page on frontend
* [ ] Edit route on backend