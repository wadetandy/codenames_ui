import gql from 'graphql-tag'

export default gql`
  mutation CreateCodenamesGame {
    createCodenamesGame {
      success
      errors
      game {
        id
      }
    }
  }
`;