db.createUser(
   {
     user: "rocketchat",
     pwd: "rocketchat",
     roles: [ { role: "readWrite", db: "rocketchat" } ]
   }
)
