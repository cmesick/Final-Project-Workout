import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { WorkoutLog } from "../data/firebase";
import Workout from "..//workout";
import "./workout-listing.css";

function WorkoutListing() {
  const [workout, setWorkout] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setWorkout(docs);
      
    };

    const onError = (error) => {
      setErrorMessage("There was a porblem loading your workouts. Please try again!");
      console.error(error);
    };

    const unsubscribe = WorkoutLog.orderBy("focus", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <div className="workout-container">
      <h1>Workouts</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="workout-list">
        {workout.map((workoutDoc) => {
          const workoutId = workoutDoc.id;
          const workoutData = workoutDoc.data();
          return (
            <li key={workoutId}>
              <Workout id={workoutId} data={workoutData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkoutListing;
