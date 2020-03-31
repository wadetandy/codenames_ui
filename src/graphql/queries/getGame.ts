import gql from 'graphql-tag';

export default gql`
  query GetGame($id: ID!) {
    codenamesGame(id: $id) {
      id
      firstMove
      nextMove
      wordList {
        word
        owner
      }
    }
  }
`
