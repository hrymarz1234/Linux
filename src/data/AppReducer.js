export default function AppReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "edit":
      return state.map((person) => {
        if (person.id === action.payload.id) {
          return {
            ...person,
            name: action.payload.name,
            age: action.payload.age,
            city: action.payload.city,
            rating: parseInt(action.payload.rating),
          };
        }
        return person;
      });

    case "rate":
      return state.map((person) => {
        if (person.id === action.id) {
          return { ...person, rating: (person.rating + 1) % 11 };
        }
        return person;
      });

    case "delete":
      return state.filter((person) => person.id !== action.id);
  }
}
