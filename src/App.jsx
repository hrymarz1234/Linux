
import RootLayout from "./layouts/RootLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Lab1 from "./pages/Lab1.jsx";
import Lab2 from "./pages/Lab2.jsx";
import Lab3 from "./pages/Lab3.jsx";
import NotFound from "./pages/NotFound.jsx";
import React from 'react';



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
  ];

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route> */}
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            ></Route>
          ))}
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>

        {/* <SimpleLayout>
              <p>content</p>
          </SimpleLayout> */}
      </RootLayout>
    </>
  );
}

export default App;
