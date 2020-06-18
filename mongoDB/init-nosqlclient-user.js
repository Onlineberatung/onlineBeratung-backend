db.createUser(
   {
     user: "nosqlclient",
     pwd: "nosqlclient",
     roles: [ { role: "readWrite", db: "nosqlclient" } ]
   }
)
