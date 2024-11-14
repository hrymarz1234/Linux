import "./App.css";
import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lab1 from "./pages/Lab1.jsx";
import Lab2 from "./pages/Lab2.jsx";
import Lab3 from "./pages/Lab3.jsx";
import Lab4 from "./pages/Lab4.jsx";
import Lab5 from "./pages/Lab5.jsx";
import NotFound from "./pages/NotFound.jsx";
import AddForm from "./pages/AddForm.jsx";
import EditFrom from "./pages/EditForm.jsx";
import AppProvider from "./data/AppProvider";


function App() {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <Home></Home>,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/lab1",
      urlPattern: "/lab1",
      element: <Lab1></Lab1>,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/lab2/1",
      urlPattern: "/lab2/:id",
      element: <Lab2></Lab2>,
    },
    {
      id: 4,
      label: "Laboratorium 3",
      url: "/lab3",
      urlPattern: "/lab3",
      element: <Lab3></Lab3>,
    },
    {
      id: 5,
      label: "Laboratorium 4",
      url: "/lab4",
      urlPattern: "/lab4",
      element: <Lab4></Lab4>,
    },
    {
      id: 6,
      label: "Laboratorium 5",
      url: "/lab5",
      urlPattern: "/lab5",
      element: <Lab5></Lab5>,
  },
    {
      id: 7,
      label: "Add new",
      url: "/lab4/add",
      urlPattern: "/lab4/add",
      element: <AddForm></AddForm>,
    },
    {
      id: 8,
      label: "Edit",
      url: "/lab4/edit",
      urlPattern: "/lab4/edit",
      element: <EditFrom></EditFrom>,
    },
  ];

  return (
    <>
    <AppProvider>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            ></Route>
            
          ))}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
          <Route path="/lab4/edit" element={<AddForm></AddForm>}></Route>
        </Routes>

        {/* <SimpleLayout>
              <p>content</p>
          </SimpleLayout> */}
      </RootLayout>
      </AppProvider>
    </>
  );
}

export default App;
