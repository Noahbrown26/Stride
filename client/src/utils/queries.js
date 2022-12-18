import { gql } from '@apollo/client';


// query to get workout 
export const GET_WORKOUTS = gql` 
  query {
   Workouts{
      _id
      bodyPart
      name
      gifUrl
      equipment
      target
    }
  }
`;

// query to get user
export const GET_ME = gql` 
    query getMe {
        me{
            _id
           username
           email
        }
    }
 `;