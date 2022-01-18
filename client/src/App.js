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
    <Router>
      {<Navigation />}

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
