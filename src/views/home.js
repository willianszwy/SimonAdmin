import React from 'react';
import { Segment, Button, Statistic, Divider, Grid } from 'semantic-ui-react';

import MenuPrincipal from '../components/menu-principal';

const Index = () => (
    <div>
    <MenuPrincipal></MenuPrincipal>
    <Segment inverted padded className="painel-shadow" stacked>
        <Segment inverted>
            <Divider horizontal inverted>
                Atendimento Prioritário
            </Divider>

            <Grid columns='equal' divided inverted padded>
                <Grid.Row color='black' textAlign='center'>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Segment inverted>
                                <Statistic color='blue' inverted>
                                    <Statistic.Value>14</Statistic.Value>
                                    <Statistic.Label>Prioridade</Statistic.Label>
                                </Statistic>
                            </Segment>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Statistic color='blue' inverted>
                                <Statistic.Value>PR234</Statistic.Value>
                                <Statistic.Label>Código Atual</Statistic.Label>
                            </Statistic>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Button size="big" inverted color="blue"> Próximo Prioridade</Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

        <Segment inverted>
            <Divider horizontal inverted>
                Atendimento Normal
            </Divider>

            <Grid columns='equal' divided inverted padded>
                <Grid.Row color='black' textAlign='center'>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Segment inverted>
                                <Statistic color='green' inverted>
                                    <Statistic.Value>134</Statistic.Value>
                                    <Statistic.Label>Fila Normal</Statistic.Label>
                                </Statistic>
                            </Segment>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Statistic color='green' inverted>
                                <Statistic.Value>PR234</Statistic.Value>
                                <Statistic.Label>Código Atual</Statistic.Label>
                            </Statistic>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment color='black' inverted>
                            <Button size="big" inverted color="green"> Próximo Normal</Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Segment>

    </Segment>
    </div>
);

export default Index;