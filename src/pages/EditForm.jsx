import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../data/AppContext.js";
import { useNavigate } from "react-router-dom";

function EditFrom() {
  const location = useLocation(); //
  const person = location.state.person; //

  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: person.id,
      name: person.name,
      age: person.age,
      city: person.city,
      rating: person.rating,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = (data) => {
    dispatch({ type: "edit", payload: data });
    navigate("/Lab3");
  };

  // const name = watch("name");
  // const age = watch("age");
  // const city = watch("city");
  // const rating = watch("rating");

  // console.log(name);
  // console.log(age);
  // console.log(city);
  // console.log(rating);

  return (
    <>
      {" "}
      <br />
      <h2>EDIT FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input hidden {...register("id")} /> <br />
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <input
          id="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be longer than 2 characters",
            },
            maxLength: {
              value: 50,
              message: "Name can't be longer than 50 characters",
            },
          })}
        />{" "}
        <br />
        {<div>{errors.name?.message}</div>}
        <div>
          <label htmlFor="age">Age</label>
        </div>
        <input
          id="age"
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "You need to be adult ( minimum 18 )" },
            max: { value: 120, message: "Please entry your correct age" },
          })}
        />{" "}
        <br />
        {<div>{errors.age?.message}</div>}
        <div>
          <label htmlFor="city">City</label>
        </div>
        <input
          id="city"
          {...register("city", {
            required: "City is required",
            minLength: {
              value: 5,
              message: "City's name must be longer than 4 letters",
            },
            maxLength: {
              value: 50,
              message: "City's name can't be longer than 50 characters",
            },
          })}
        />{" "}
        <br />
        {<div>{errors.city?.message}</div>}
        <div>
          <label htmlFor="rating">Rating</label>
        </div>
        <input
          id="rating"
          type="number"
          {...register("rating", {
            required: "Rating is required",
            max: { value: 10, message: "Rating must be below or equal 10" },
            min: {
              value: 0,
              message: "Rating must be a positive number from 0 to 10",
            },
          })}
        />{" "}
        <br />
        {<div>{errors.rating?.message}</div>}
        <br />
        <input type="submit" value="Edytuj" />
      </form>
    </>
  );
}

export default EditFrom;
