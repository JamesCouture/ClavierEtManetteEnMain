import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, username, password, email } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Username :</strong> {username}{" "}
          </p>
          <p>
            <strong>Password :</strong> {password}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;