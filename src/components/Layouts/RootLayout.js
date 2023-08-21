import FooterPage from "../shared/footer";
import NavBar from "../shared/navber";

const RootLayout = ({ children }) => {
  return (
    <div className="w-full   bg-base-200">
      <NavBar></NavBar>
      <div className="">{children}</div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default RootLayout;
