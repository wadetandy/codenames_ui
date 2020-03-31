import gql from 'graphql-tag';

export default gql`
  query GetCurrentUser {
    viewer {
      id
      name
    }
  }
`