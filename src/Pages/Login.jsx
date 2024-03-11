import React from 'react'
import Header from '../Components/Header'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Col, Row, Container } from 'react-bootstrap'
import * as Yup from 'yup';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const intialvalues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("username is required"),
        password: Yup.string().required("password is required")
    })

    const onSubmit = async (values, { setSubmitting }) => {
        console.log("values", values);
        await login(values);
        navigate('/');
    }
    return (
        <div>
            <Header />
            <Formik
                initialValues={intialvalues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ isSubmitting, touched, errors }) => (
                    <Form>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <BootstrapForm.Group controlId='username'>
                                        <BootstrapForm.Label>USERNAME</BootstrapForm.Label>
                                        <Field type='username' name='username' placeholder='username' className={touched.username && errors.username ? "form-control is-invalid" : "form-control"} />
                                        {touched.username && errors.username && <div className='text-danger'>errors.username</div>}
                                    </BootstrapForm.Group>
                                </Col>
                                <Row>
                                    <Col md={4}>
                                        <BootstrapForm.Group controlId='password'>
                                            <BootstrapForm.Label>PASSWORD</BootstrapForm.Label>
                                            <Field type='password' name='password' placeholder='password' className={touched.password && errors.password ? "form-control is-invalid" : "form-control"} />
                                            {touched.password && errors.password && <div className='text-danger'>errors.password</div>}
                                        </BootstrapForm.Group>
                                    </Col>
                                </Row>

                            </Row>
                            <br />
                            <Row>
                                <Col md={4} className='btns'>
                                    <Button type='submit'>Login</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                )}
            </Formik>



        </div>
    )
}

export default Login