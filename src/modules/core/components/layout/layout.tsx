import { ReactChild } from "react";
import Navbar from "../../../shared/components/navbar/navbar";
import './layout.css';

type PropsLayout = {
  children: ReactChild
}

const Layout = ( props: PropsLayout ) => {
  return (
    <div className="Layout">
      <div className="Layout__navbar">
        <Navbar/>
      </div>
      <main className="Layout__main-content">
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
