import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Container } from "react-bootstrap";

import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavbarOffcanvas from "../Offcanvas/Offcanvas";

import "./Header.css";

const Header = () => {
  // const { data: publicInfo, loading } = useFetch(
  //   process.env.REACT_APP_PUBLIC_ENDPOINT
  // );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandOcanvas, setExpandOcanvas] = useState(false);

  const fetchHeader = async () => {
    const data = await fetch(process.env.REACT_APP_PUBLIC_ENDPOINT);

    const response = await data.json();
    const results = response.results;

    setData(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchHeader();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <Container fluid className="navbar-container d-flex flex-column">
        <Navbar className="my-auto">
          <Container fluid>
            <NavBrand image={data?.image} name={data?.name}></NavBrand>
            <Navbar className="justify-content-end">
              <NavMenu
                menu={data?.nav}
                menuStyle="justify-content-end"
                itemStyles="d-none d-lg-block"
                buttonStyles="mx-1 py-2 px-3 d-lg-block d-none"
              ></NavMenu>
              <NavbarOffcanvas
                title="Menu de navegación"
                toggleStyle="d-block d-lg-none"
                expand={expandOcanvas}
                setExpand={setExpandOcanvas}
              >
                <NavMenu menu={data?.nav} buttonStyles="my-2"></NavMenu>
              </NavbarOffcanvas>
            </Navbar>
          </Container>
        </Navbar>
      </Container>
    );
  }
};

export default Header;
