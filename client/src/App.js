import "./App.css";
import { BrowserRouter as Router, Routes, Route, createBrowserHistory } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Navigation from "./components/navigation";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const history = createBrowserHistory()
  return (
    <ApolloProvider client={client}>
    <Router history={history}>
      {<Navigation />}

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
