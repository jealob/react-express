# New York Times Article Search app
React-based rendition of the New York Times Article Search application. This is Mongo Express React Node (MERN) full-stack application 

## It uses
* Express js for server-side routing, 
* React Js for rendering  client-side User Interface (UI). 
* Fetches data from the New York Times article API endpoint.
* Save data using mongoDB 

## How it works
* Users can search articles based on key words and approximate date range. The app takes the user input from client side and route request to the backend express server that makes an external API request using NPM request package. The json response is then manipulated and rendered using a react component. Users can also save and  delete articles.