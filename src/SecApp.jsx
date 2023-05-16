import { StrictMode } from "react";
import HeaderComp from "./Header/header";
import FooterComp from "./Footer/footer";
function SecApp() {
  return (
    <StrictMode>
      <div className="fixed w-full z-50">
        <HeaderComp
        />
      </div>
      <FooterComp></FooterComp>
    </StrictMode>
  );
}

export default SecApp;
