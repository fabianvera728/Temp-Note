import React, { ReactNode, ReactChild } from "react";
import Header from "../../../shared/components/header/header";
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
      <div className="Layout__header">
        <Header />
      </div>
      <main className="Layout__content">
        {props.children}
      </main>
    </div>
  )

}

export default Layout;
