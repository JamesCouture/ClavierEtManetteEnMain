import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { useTranslation } from 'react-i18next';
import imgEtape from '../../images/etape1.png';


// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  const { t } = useTranslation();

  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <div className="content" style={{ textAlign: 'center', paddingTop: "50px" }}>
        <h1>{t('CreateWelcome')}</h1>
        <img src={imgEtape} alt="étape 1" style={{height:'200px'}}/>
      </div>
      <Card style={{ marginTop: '-60px' }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>{t('CreateFirst')}</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder={t('CreateFirstEx')}
                onChange={handleFormData("firstName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  {t('CreateRequired')}
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{t('CreateLast')}</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder={t('CreateLastEx')}
                onChange={handleFormData("lastName")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  {t('CreateRequired')}
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('CreateContinue')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;