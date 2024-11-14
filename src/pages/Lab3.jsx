import { data } from "../lab01/module-data.js";
import FlexContainer from "../components/FlexContainer.jsx";


function Lab3() {
  

  return (
    <>
      <FlexContainer key={data.id} element={data} ></FlexContainer>
    </>
  );
}

export default Lab3;
