db.createUser(
   {
     user: "statistics",
     pwd: "statistics",
     roles: [ { role: "readWrite", db: "statistics" } ]
   }
)
