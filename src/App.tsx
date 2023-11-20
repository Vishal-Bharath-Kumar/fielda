import './App.css'
import LoginPage from './pages/login/LoginPage'
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './apollo';

function App() {


  return (
    <>
     <ApolloProvider client={client}>
    <div className="App">
    <Router>
     <LoginPage />
     </Router>
     </div>
     </ApolloProvider>
    </>
  )
}

export default App
