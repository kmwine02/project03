import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
