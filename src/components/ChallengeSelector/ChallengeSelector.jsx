import React from "react";
import { Form } from "react-bootstrap";
import challenges from "./ChallengeTypes";
import "./ChallengeSelector.css";
import { useSelector, useDispatch } from "react-redux";
import { setChallenges } from "./challengeSelectorSlice";
export default function ChallengeSelector() {
  const dispatch = useDispatch();
  return (
    <Form>
      {Object.keys(challenges).map((challenge) => (
        <Form.Check
          type="switch"
          onClick={() => dispatch(setChallenges)}
          style={({ fontSize: "20px" }, { marginBottom: "20px" })}
          id={`${challenge}`}
          label={`${
            challenge.charAt(0).toUpperCase() +
            challenge.substring(1).replace("-", " ")
          }`}
        />
      ))}
    </Form>
  );
}
