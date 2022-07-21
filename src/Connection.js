import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { useState } from "react";
import { AccountContext } from './Helper/Context';
import { useContext } from 'react'

const Connection = () => {

    const { t } = useTranslation();
    const { accountUserName, setAccountUserName } = useContext(AccountContext)


    //creating error state for validation
    const [error, setError] = useState(false);

    //state for steps
    const [step, setstep] = useState(1);

    const nextStep = () => {
        setstep(step + 1);
    };

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
        e.preventDefault();

        // checking if value of first name and last name is empty show error else take to next step
        if (validator.isEmpty(document.getElementById("usernameSignin").value) || validator.isEmpty(document.getElementById("passwordSignin").value)) {
            setError(true);
        } else {
            setAccountUserName(document.getElementById("usernameSignin").value);
            nextStep();
        }
    };

    switch (step) {
        case 1:
            return (

                <div className="Connection">
                    <div className="content" style={{ textAlign: 'center', padding: "100px" }}>
                        <h1>{t('logWelcome')}</h1>
                    </div>

                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} className="custom-margin">


                                <Card style={{ marginTop: '-60px' }}>
                                    <Card.Body>
                                        <Form onSubmit={submitFormData}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{t('CreateUsername')}</Form.Label>
                                                <Form.Control
                                                    style={{ border: error ? "2px solid red" : "" }}
                                                    name="usernameSignin"
                                                    id="usernameSignin"
                                                    defaultValue={accountUserName}
                                                    type="text"
                                                    placeholder={t('CreateUsernameEx')}
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
                                                <Form.Label>{t('CreatePassword')}</Form.Label>
                                                <Form.Control
                                                    style={{ border: error ? "2px solid red" : "" }}
                                                    name="passwordSignin"
                                                    id="passwordSignin"
                                                    defaultValue=""
                                                    type="text"
                                                    placeholder={t('CreatePasswordEx')}
                                                />
                                                {error ? (
                                                    <Form.Text style={{ color: "red" }}>
                                                        {t('CreateRequired')}
                                                    </Form.Text>
                                                ) : (
                                                    ""
                                                )}

                                            </Form.Group>

                                            <div style={{ display: "flex", justifyContent: "space-around" }}>

                                                <Button variant="primary" type="submit">{t('logSubmit')}</Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        case 2:
            return (
                <div className="accountcreated">
                    <div className="content" style={{ textAlign: 'center', paddingTop: "50px" }}>
                        <h1>{t('Logrentre')}</h1>
                    </div>
                    <div className="content">
                        <button style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Link to="/">{t('logRevenir')}</Link>
                        </button>
                    </div>

                </div>
            )
    }

}

export default Connection;