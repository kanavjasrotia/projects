import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Personal.css";
const Personal = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const mobRef = useRef();

  const step = useSelector((state) => state.step);
  const maxStep = useSelector((state) => state.maxStep);
  const detailsObj = useSelector((state) => state.details);

  const [details, setDetails] = useState(detailsObj);

  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    const fn = fnameRef.current.value;
    if (fn.length == 0) {
    }

    event.preventDefault();
    const firstName = fnameRef.current.value;
    const lastName = lnameRef.current.value;
    const email = emailRef.current.value;
    const mobile = mobRef.current.value;

    if (event.target.value === "next") {
      dispatch({
        type: "next",
        payload: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobile: mobile,
        },
      });
      return;
    }

    if (event.target.value === "prev") {
      dispatch({ type: "prev" });
    }
  };

  const change = (e) => {
    e.preventDefault();

    console.log(e.target.name);
    if (
      e.target.name === "firstName" ||
      "lastName" ||
      "emailName" ||
      "mobile"
    ) {
      return setDetails(details.firstName === e.target.value);
    }
  };

  return (
    <>
      <form className="form">
        <input
          value={details.firstName}
          onChange={change}
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={fnameRef}
          required
        ></input>

        <input
          value={details.lastName}
          onChange={change}
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={lnameRef}
          required
        ></input>

        <input
          value={details.email}
          onChange={change}
          type="email"
          name="emailName"
          placeholder="email"
          ref={emailRef}
          required
        ></input>

        <input
          value={details.mobile}
          onChange={change}
          type="text"
          name="mobile"
          placeholder="mobile"
          ref={mobRef}
          minLength="10"
          maxLength="10"
          required
        ></input>

        <div className="btn-grp">
          <button
            className="btn-primary"
            value="prev"
            onClick={onClickHandler}
            disabled={step === 1 ? true : false}
          >
            Prev
          </button>
          <button
            className="btn-primary"
            value="next"
            onClick={onClickHandler}
            disabled={step === maxStep ? true : false}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Personal;
