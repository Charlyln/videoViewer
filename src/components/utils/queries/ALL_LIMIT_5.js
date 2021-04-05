import { gql } from 'apollo-boost'

const ALL_LIMIT_5 = gql`
  query AllLimit5($after: String) {
    allVideos(limit: 5, after: $after) {
      items {
        id
        name
        poster
        Tags {
          id
          name
        }
      }
      cursor {
        before
        after
      }
    }
  }
`

export { ALL_LIMIT_5 }
