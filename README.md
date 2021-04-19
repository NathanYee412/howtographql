# howtographql




## How to use POST 
mutation{<br/>
  post(url:"______", description:"________"){<br/>
    parameters<br/>
  }<br/>
}<br/>

### Example Post request
mutation{<br/>
  post(url:"www.google.com", description:"Google inc"){<br/>
    id<br/>
  }<br/>
}<br/>

id will increment from last post id count using variable idCount<br/>


## How to Query by ID
query {<br/>
    link(id: ______) {<br/>
        parameters<br/>
    }<br/>
}<br/>

### Example Query for existing item with id:"link-0"
query {<br/>
  link(id:"link-1") {<br/>
    url<br/>
    description<br/>
    id<br/>
  }<br/>
}<br/>


