import React from "react";
import { useSelector } from "react-redux";
import Personal from "./Forms/Personal";
import Address from "./Forms/Address";
import Payment from "./Forms/Payment";
import ShowData from "./result/ShowData";
import Header from "./header/Header";

const Pages = () => {
  const step = useSelector((state) => state.step);

  switch (step) {
    case 1:
      return (
        <>
          <Header />
          <Personal />
        </>
      );

    case 2:
      return (
        <>
          <Header />
          <Address />
        </>
      );

    case 3:
      return (
        <>
          <Header />
          <Payment />
        </>
      );

    case 4:
      return (
        <>
          <Header />
          <ShowData />
        </>
      );
  }
};

export default Pages;
