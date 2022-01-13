const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const database = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/public")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://127.0.0.1:${PORT}${server.graphqlPath}`);
  });
});

// should we swap around "db" for something else?
// what i've relearned from section 18 makes it look a bit more like
// we should be using db to import the data models... (@caaam)


// Sample data below
database.Users.create({ userName: "alperg", realName: "Alper", password: "abcd1234"})
  .then(userInsert => {
    console.log(userInsert);
  })
  .catch(({message}) => {
    console.log(message);
  });
database.Users.create({ userName: "joshb", realName: "Josh", password: "1234dcba"})
  .then(userInsert => {
    console.log(userInsert);
  })
  .catch(({message}) => {
    console.log(message);
  });
database.Users.create({ userName: "carlv", realName: "Carl", password: "passw0rd"})
  .then(userInsert => {
    console.log(userInsert);
  })
  .catch(({message}) => {
    console.log(message);
  });
database.Movies.create({ name: "National Lampoon's Christmas Vacation", imdbID: "tt0097958", image: "https://m.media-amazon.com/images/M/MV5BMGZkMWQ2MzMtYTkxYS00OThmLWI0ZTQtNmY0ZTkyY2E4MjliXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg"})
  .then(movieInsert => {
    console.log(movieInsert);
  })
  .catch(({message}) => {
    console.log(message);
  });
console.log("made it this far");