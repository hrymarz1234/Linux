import NavBarMenu from "./NavBarMenu";
import Footer from "./Footer";

const RootLayout = ({ children , items}) => {
  return (
    
    <>
      <NavBarMenu items={items}></NavBarMenu>

      <div>{children}</div>

      <Footer></Footer>
    </>
  );
}

export default RootLayout;
