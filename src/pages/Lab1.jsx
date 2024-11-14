import {data} from '../lab01/module-data.js'
import PersonProfile from '../components/PersonProfile.jsx'

function Lab1 () {
    return (
      <>
        <div className="app">
      <h1>People List:</h1>
      <div className="person-list">
        {data.map((person) => (
          <PersonProfile key={person.id} person={person} />
        ))}
      </div>
    </div>
      </>
    );
  }
  
  export default Lab1;