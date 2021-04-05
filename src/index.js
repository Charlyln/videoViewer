import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import './index.css'
import Router from './Router'
import { Context } from './Context'

const key = "x-account-key"
const keyValue = process.env.REACT_APP_KEYVALUE
const endPoint = process.env.REACT_APP_ENDPOINT

const client = new ApolloClient({
  uri: endPoint,
  headers: {
    [key]: keyValue
  }
})

const contextValue = {}

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={contextValue}>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
