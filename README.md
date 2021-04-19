﻿# howtographql




## How to use POST 
mutation{<br/>
  post(url:"______", description:"________"){<br/>
    parameters<br/>
  }<br/>
}<br/>

### Example Post request
mutation{<br/>
&nbsp; &nbsp; post(url:"www.google.com", description:"Google inc"){<br/>
&nbsp; &nbsp; &nbsp; &nbsp; id<br/>
&nbsp; &nbsp; }<br/>
}<br/>

id will increment from last post id count using variable idCount<br/>


## How to Query by ID
query {<br/>
&nbsp; &nbsp; &nbsp; &nbsp;link(id: ______) {<br/>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; parameters<br/>
&nbsp; &nbsp; &nbsp; &nbsp;}<br/>
}<br/>

### Example Query for existing item with id:"link-0"
query {<br/>
&nbsp; &nbsp;link(id:"link-1") {<br/>
&nbsp; &nbsp; &nbsp; &nbsp;url<br/>
&nbsp; &nbsp; &nbsp; &nbsp;description<br/>
&nbsp; &nbsp; &nbsp; &nbsp;id<br/>
&nbsp; &nbsp;}<br/>
}<br/>


Stuck at https://www.howtographql.com/graphql-js/6-authentication/

