import React from "react";
import { Helmet } from "react-helmet";
import WorkoutList from "../components/workout-listing";

function WorkoutsPage() {
  return (
    <main>
      <Helmet>
        <title>Workouts</title>
      </Helmet>
      <MovieListing />
    </main>
  );
}

export default WorkoutsPage;