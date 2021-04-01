import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './index.css'
import Router from './Router'

const key = process.env.REACT_APP_KEY
const keyValue = process.env.REACT_APP_KEYVALUE

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
      <Router />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
