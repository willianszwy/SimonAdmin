import React from 'react';
import { Segment, Button, Statistic, Divider, Grid } from 'semantic-ui-react';

import MenuPrincipal from '../components/menu-principal';

class Index extends React.Component {
    state = { totalPrioridade: 10, totalNormal: 30, normalCodigo: Math.floor((Math.random() * 1000) + 1), prioridadeCodigo: Math.floor((Math.random() * 1000) + 1) }

    onClickNormal() {
        this.setState(state => ({
            totalNormal: (state.totalNormal - 1 >= 0 ? state.totalNormal - 1 : 0),
            normalCodigo: (state.totalNormal === 0 ? state.normalCodigo : Math.floor((Math.random() * 1000) + 1))
        }));
    };

    onClickPrioridade() {
        this.setState(state => ({
            totalPrioridade: (state.totalPrioridade - 1 >= 0 ? state.totalPrioridade - 1 : 0),
            prioridadeCodigo: (state.totalPrioridade === 0 ? state.prioridadeCodigo : Math.floor((Math.random() * 1000) + 1))
        }));
    };

    render() {
        const { totalPrioridade, totalNormal, prioridadeCodigo, normalCodigo } = this.state;
        return (
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
                                                <Statistic.Value>{totalPrioridade}</Statistic.Value>
                                                <Statistic.Label>Prioridade</Statistic.Label>
                                            </Statistic>
                                        </Segment>

                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='black' inverted>
                                        <Statistic color='blue' inverted>
                                            <Statistic.Value>PR{prioridadeCodigo}</Statistic.Value>
                                            <Statistic.Label>Código Atual</Statistic.Label>
                                        </Statistic>

                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='black' inverted>
                                        <Button size="big" inverted color="blue" onClick={() => this.onClickPrioridade()}> Próximo Prioridade</Button>
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
                                                <Statistic.Value>{totalNormal}</Statistic.Value>
                                                <Statistic.Label>Fila Normal</Statistic.Label>
                                            </Statistic>
                                        </Segment>

                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='black' inverted>
                                        <Statistic color='green' inverted>
                                            <Statistic.Value>NR{normalCodigo}</Statistic.Value>
                                            <Statistic.Label>Código Atual</Statistic.Label>
                                        </Statistic>

                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='black' inverted>
                                        <Button size="big" inverted color="green" onClick={() => this.onClickNormal()}> Próximo Normal</Button>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>

                </Segment>
            </div>
        )
    }
};

export default Index;