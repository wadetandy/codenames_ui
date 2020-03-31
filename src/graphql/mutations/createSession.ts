import gql from 'graphql-tag'

export default gql`
  mutation CreateSession($name: String!) {
    createSession(nickname: $name) {
      user {
        id
        name
      }
    }
  }
`;