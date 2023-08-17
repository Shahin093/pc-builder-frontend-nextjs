import FooterPage from "../shared/footer";
import NavBar from "../shared/navber";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <div className="">{children}</div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default RootLayout;
