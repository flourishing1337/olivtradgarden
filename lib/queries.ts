// storefront/lib/queries.ts
import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!, $channel: String!) {
    product(id: $id, channel: $channel) {
      id
      name
      description
      media {
        url
        alt
        type
      }
      variants(first: 1) {
        edges {
          node {
            pricing {
              price {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;
