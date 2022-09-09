import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Address = () => {
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const distirctRef = useRef();
  const pinRef = useRef();

  const step = useSelector((state) => state.step);
  const maxStep = useSelector((state) => state.maxStep);
  const detailsObj = useSelector((state) => state.details);

  const [details, setDetails] = useState(detailsObj);

  console.log(details);

  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.preventDefault();

    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const state = stateRef.current.value;
    const distirct = distirctRef.current.value;
    const pin = pinRef.current.value;

    if (event.target.value === "next") {
      dispatch({
        type: "next",
        payload: { address, city, state, distirct, pin },
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
      e.target.name === "address" ||
      "city" ||
      "state" ||
      "distirct" ||
      "pin"
    ) {
      return setDetails(details.firstName === e.target.value);
    }
  };

  return (
    <>
      <form className="form">
        <input
          type="text"
          value={details.address}
          onChange={change}
          required
          name="address"
          ref={addressRef}
          placeholder="Address"
        />
        <input
          type="text"
          value={details.city}
          onChange={change}
          required
          name="city"
          ref={cityRef}
          placeholder="City"
        />
        <input
          type="text"
          value={details.distirct}
          onChange={change}
          required
          name="distirct"
          ref={stateRef}
          placeholder="Dist."
        />
        <input
          type="text"
          value={details.state}
          onChange={change}
          required
          name="state"
          ref={distirctRef}
          placeholder="State"
        />
        <input
          type="text"
          value={details.pin}
          onChange={change}
          required
          name="pin"
          placeholder="Area Pin"
          ref={pinRef}
        />

        <div className="btn-grp">
          <button
            className="btn-primary"
            onClick={onClickHandler}
            disabled={step === 0 ? true : false}
            value="prev"
          >
            Prev
          </button>
          <button
            className="btn-primary"
            onClick={onClickHandler}
            value="next"
            disabled={step === maxStep ? true : false}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Address;
