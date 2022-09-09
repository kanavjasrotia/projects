import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Payment = () => {
  const step = useSelector((state) => state.step);
  const detailsObj = useSelector((state) => state.details);

  const [details, setDetails] = useState(detailsObj);

  const dispatch = useDispatch();

  const cardRef = useRef();
  const expMonthRef = useRef();
  const expYearRef = useRef();
  const ownerRef = useRef();

  console.log(details);

  const onClickHandler = (event) => {
    event.preventDefault();

    const cardNumber = cardRef.current.value;
    const expiryMonth = expMonthRef.current.value;
    const expiryYear = expYearRef.current.value;
    const owner = ownerRef.current.value;

    if (event.target.value === "submit") {
      dispatch({
        type: "next",
        payload: { cardNumber, expiryMonth, expiryYear, owner },
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
    if (e.target.name === "card" || "expiry_month" || "year" || "card_owner") {
      return setDetails(details.firstName === e.target.value);
    }
  };

  return (
    <>
      <form className="form">
        <input
          value={details.cardNumber}
          onChange={change}
          type="text"
          name="card"
          placeholder="card"
          ref={cardRef}
        ></input>
        <input
          value={details.expmonth}
          onChange={change}
          type="number"
          name="expiry_month"
          placeholder="expiry month"
          ref={expMonthRef}
        ></input>
        <input
          value={details.expYear}
          onChange={change}
          type="number"
          min={2022}
          name="year"
          placeholder="expiry year"
          ref={expYearRef}
        ></input>
        <input
          value={details.owner}
          onChange={change}
          type="text"
          name="card_owner"
          placeholder="user"
          ref={ownerRef}
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
            onClick={onClickHandler}
            value="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Payment;
