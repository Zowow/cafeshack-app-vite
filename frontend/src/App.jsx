import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// Components
import Header from './components/Header'
import Footer from './components/Footer';

// Pages
import Home from './pages/Home'

// apollo client
const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
});

function App() {

  return (
    <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="App">
            <Header/>
            <Routes>
              <Route
                path=""
                element={<Home/>}
              />
            </Routes>
            <Footer/>
          </div>
         </ApolloProvider>
      </BrowserRouter>
  )
}

export default App
