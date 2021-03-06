import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./movie-form.css";

function WorkoutForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

if (initialState.dateAdded === undefined) initialState.dateAdded = 11-08-2020;
if (initialState.focus === undefined) initialState.focus = "";
if (initialState.moves === undefined) initialState.moves = "";
if (initialState.reps === undefined) initialState.reps = 20;
if (initialState.timing === undefined) initialState.timing = "30 seconds";
if (initialState.notes === undefined) initialState.notes = "";

  const [dateAdded, setDateAdded] = useState(initialState.dateAdded);
  const [focus, setFocus] = useState(initialState.focus);
  const [moves, setMoves] = useState(initialState.moves);
  const [reps, setReps] = useState(initialState.reps);
  const [timing, setTiming] = useState(initialState.timing);
  const [notes, setNotes] = useState(initialState.notes);
  const [errorMessage, setErrorMessage] = useState("");

  const onDateAddedChange = (event) => {
    setDateAdded(event.target.value);
  };
  const onFocusChange = (event) => {
    setFocus(event.target.value);
  };
  const onMovesChange = (event) => {
    setMoves(event.target.value);
  };
  const onRepsChange = (event) => {
    setReps(event.target.value);
  };
  const onTimingChange = (event) => {
    setTiming(event.target.value);
  };
  const onNotesChange = (event) => {
    setNotes(event.target.value);
  };
  const onWorkoutSumbit = async (event) => {
    event.preventDefault();
    onSubmit(dateAdded, focus, moves, reps, timing, notes);
  };

  return (
    <form className="workout-form" onSubmit={onWorkoutSumbit}>
      <h2 className="movie-form__title">Movie Details</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>
        <label className="movie-form__label">Movie Title:</label>
        <input className="movie-form__input" type="text" value={title} onChange={onTitleChange} />
        <label className="movie-form__label">Rating:</label>
        <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />
        <label className="movie-form__label">Year Released:</label>
        <input
          className="movie-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default MovieForm;
