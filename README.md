# howtographql




## How to use POST 
mutation{
  post(url:"______", description:"________"){
    parameters 
  }
}

### Example Post request
mutation{
  post(url:"www.google.com", description:"Google inc"){
    id
  }
}

id will increment from last post id count using variable idCount


## How to Query by ID
query {
    link(id: ______) {
        parameters
    }
}

### Example Query for existing item with id:"link-0"
query {
  link(id:"link-1") {
    url
    description
    id
  }
}


