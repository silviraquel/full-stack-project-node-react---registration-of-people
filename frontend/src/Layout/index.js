import { Outlet } from "react-router-dom";

import Header  from './Header';
import Footer  from './Footer';
import Sidebar from './Sidebar';

export default function Layout(){
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}