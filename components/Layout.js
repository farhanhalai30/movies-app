import Header from "./Header";
import "../static/css/general.css";

const Layout = props => {
  return (
    <>
      <Header {...props} />
      {props.children}
    </>
  );
};

export default Layout;
