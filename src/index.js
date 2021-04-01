import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client'
import './index.css'
import App from './App'

const key = 'x-account-key'
const keyValue = 'SyT0uHf3I'

const client = new ApolloClient({
  uri: 'https://staging-graphql-service.onrewind.tv/graphql',
  cache: new InMemoryCache(),
  headers: {
    [key]: keyValue
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
