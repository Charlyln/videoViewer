import { gql } from 'apollo-boost'

const TESTIMONIALS_LIMIT_5 = gql`
  query AllLimit5($after: String) {
    allVideos(tags: "Testimoniales", limit: 5, after: $after) {
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

export { TESTIMONIALS_LIMIT_5 }
