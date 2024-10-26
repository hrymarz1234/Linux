import { useParams } from "react-router-dom";
import { data } from "../lab01/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx";

function Lab2() {
  const { id } = useParams();
  const person = data.find(person => person.id === Number(id))

  if(!id){
    return <h1>Brak identyfikatora osoby</h1>
  }

  if(!person){
    return <h1>Nie znaleziono osoby o tym identyfikatorze</h1>
  }

    return (
      <>
          <h2>Profil osoby</h2>

          <PersonProfile key={1} person={person}></PersonProfile>
      </>
    );
  }
  
  export default Lab2;