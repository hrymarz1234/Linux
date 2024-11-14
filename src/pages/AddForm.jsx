import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import AppContext from "../data/AppContext.js";
import { useNavigate } from "react-router-dom";

const name="name" ;
const age="age" ;
const city="city" ;
const rating="rating" ;

function AddForm() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]); // stan kominikatów błędów
  const [isSendig, setSending] = useState(false); // stan sygnalizujący wysyłanie

  const onSubmitFunction = async (e) => {
    e.preventDefault(); //blokada wysyłania żądania
    console.log("Submiting...");
      errors.length = 0;
    
    const data = new FormData(e.target);


    //przykład walidacji programowej
    //kolejne warunki powinny dodawać do stanu errors własne komunikaty

    if (data.get(age) < 18) {
      return setErrors([...errors, "You are under age"]);
    }
    if (data.get(rating) < 0 || data.get(rating) > 10 ) {
      return setErrors([...errors, "Rating must be between 0 and 10 (including)"]);
    }

    //stan blokujący przycisk submit na czas wysyłania danych
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 3000)); //symulacja wysyłania
    //odblokowanie przycisku submit
    setSending(false);
    for (let key of data.keys()) {
      //reset formularza
      e.target[key].value = "";
    }
    // console.log(data);
    // console.log(data.get(name));
    // console.log(data.get(age));
    // console.log(data.get(city));
    // console.log(data.get(rating));
    //kod wysłania akcji do funkcji redukującej

    const newPerson = {
      id: Date.now(), // lub inna unikalna wartość
      name: data.get("name"),
      age: data.get("age"),
      city: data.get("city"),
      rating: parseInt(data.get("rating")),
    };

    dispatch({ type: "add", payload: newPerson });
    navigate("/Lab3");
    
  };

  return (
    <>
      <h1>Register</h1>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form className="text-primary" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <FormControl
            required
            id={name}
            type="text"
            name={name}
            minLength="3"
            maxLength="50"
            className="text-lg"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">Name is required</Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="age">Age</Form.Label>
          <FormControl
            required
            id={age}
            type="number"
            name={age}
            // min="18"
            max="120"
            className="text-lg"
            placeholder="Enter age"
          />
          <Form.Text className="text-muted">Age is required</Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="city">City</Form.Label>
          <FormControl
            required
            id={city}
            type="text"
            name={city}
            minLength="5"
            maxLength="50"
            className="text-lg"
            placeholder="Enter city"
          />
          <Form.Text className="text-muted">City is required</Form.Text>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="rating">Rating</Form.Label>
          <FormControl
            required
            id={rating}
            type="number"
            name="rating"
            // min="0"
            // max="10"
            className="text-lg"
            placeholder="Enter rating (0 - 10)"
          />
          <Form.Text className="text-muted">
            Rating is required (0 to 10)
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button
            disabled={isSendig}
            type="submit"
            variant="outline-primary"
            size="lg"
          >
            Register
          </Button>
        </div>
      </Form>
    </>
  );
}

export default AddForm;
