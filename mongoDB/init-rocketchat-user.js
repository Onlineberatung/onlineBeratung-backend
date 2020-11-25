db.createUser(
   {
     user: "rocketchat",
     pwd: "rocketchat",
     roles: [ { role: "readWrite", db: "rocketchat" } ]
   }
);

db.runCommand(
  {
    grantRolesToUser: "rocketchat",
    roles: [{ role: "clusterMonitor", db: "admin" }]
  }
);