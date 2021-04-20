# howtographql

# Following tutorial on howtographql.com
https://www.howtographql.com/graphql-js/0-introduction/



# Needed npm packages 
- npm install graphql --save-dev 
- npm install prisma --save-dev
- npm install jsonwebtoken bcryptjs


# Making changes to data model 
When you make a change to the data model the following command has to be ran

npx prisma migrate dev --name "add-user-model"
npx prisma generate

# How to run 
node /src/index.js
- This will load graphql playground

npx prisma studio
- This will give you a live look into the db 


