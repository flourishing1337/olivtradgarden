// storefront/lib/queries.ts
import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
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
