import React from "react";
import { Form } from "react-bootstrap";
import challenges from "./ChallengeTypes";
import "./ChallengeSelector.css";
export default function ChallengeSelector() {
  return (
    <Form>
      {Object.keys(challenges).map((challenge) => (
        <Form.Check
          type="switch"
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
