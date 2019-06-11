import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Index = () => (

    <div className='login-form'>

        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}
        </style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment inverted padded="very" className="painel-shadow">
                    <Header as='h1' color='white' textAlign='center'>
                        Entrar
                    </Header>
                    <Form size='large'>
                        <Segment inverted>
                            <Form.Input inverted fluid icon='user' iconPosition='left' placeholder='E-mail' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Senha'
                                type='password'
                            />

                            <Button as={Link} to='/home' inverted fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    </div>

)

export default Index;