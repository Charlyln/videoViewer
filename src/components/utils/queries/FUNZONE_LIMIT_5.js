import { gql } from 'apollo-boost'

const FUNZONE_LIMIT_5 = gql`
query AllLimit5($after: String) {
  allVideos(tags: "Funzone", limit: 5, after: $after) {
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

export { FUNZONE_LIMIT_5 }
