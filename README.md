# Apolo 2021

Movie App built with React Apolo and GraphQL

rest ap: url 로 가서 json을 받아옴 vs GraphQL: query 나 mutation 을 보냄
Apollo is the best way to consume GraphQL
\*\* git remote add origin --> does

1. create-react-app
2. npm add styled-components / npm add react-router-dom / npm install apollo-boost @apollo/react-hooks graphql
3. mkdir src/routes
4. touch src/routes/Home.js
5. touch src/routes/Detail.js
6. at App.js
   import {HashRouter as Router, Route} from 'react-router-dom
   import Home from 'home directory'
   return <Router> <Route exact path='/' component={Home}/> do the same for component-{Detail} \*
7. Style (CSS reset)
8. create clien with 'apollo-boost'
   at apollo.js > import ApolloClient from 'apollo-boost'
