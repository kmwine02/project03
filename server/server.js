const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "prod") {
  app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  try{
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  }
  catch (error) {
    console.log(error)
  }
});
};

//TODO Get this back-end garbage working :(
// app.get("/api/search", (req, res) => {
//   console.log("test")
//   const APIURL = `https://imdb-api.com/en/API/Search/k_gn6a28pu/inception`;
//   fetch(APIURL).then((response) => {
//     const data = res.json(respnose);
//     return data;
//   });
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
