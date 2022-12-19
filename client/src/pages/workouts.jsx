import * as React from 'react';
import { useQuery } from '@apollo/client'

// mui boilerplate components //
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import query for workout data //
import { GET_WORKOUTS } from '../utils/queries';
import Auth from '../utils/auth';

export default function WorkoutCard() {



  const {data} = useQuery(GET_WORKOUTS)

  if (data) {
    return (
      <div className="workout-container">

        {data.Workouts.map((workout) => (

        <Card sx={{ maxWidth: 345 }} key={workout._id} className="workout-card">
        <CardMedia
          component="img"
          alt={workout.name}
          height="300"
          image={workout.gifUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {workout.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Equipment: {workout.equipment}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Target muscle: {workout.bodyPart}
          </Typography>
        </CardContent>
        <CardActions>

        {Auth.loggedIn() && (
  
          <Button size="small">Save</Button>

          )}
        </CardActions>
        </Card>
        ))}
      </div>
    );
  }
}
