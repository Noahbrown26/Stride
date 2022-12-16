import { gql } from '@apollo/client';

export const GET_WORKOUTS = gql` 
   query getWorkouts{
      bodyPart
      name
      gifUrl
      equipment
      target
    }
`;
