import React from 'react';
import { Segment, Table, Menu, Label, Icon, Divider } from 'semantic-ui-react';
import MenuPrincipal from '../components/menu-principal';

const Historico = () => (
    <div>
        <MenuPrincipal/>
    <Segment inverted padded className="painel-shadow" stacked>
        <Segment inverted padded >
            <Divider horizontal inverted>
                Histórico Atendimento
            </Divider>
            <br />
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Código</Table.HeaderCell>
                        <Table.HeaderCell>Mesa</Table.HeaderCell>
                        <Table.HeaderCell>Horário</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Label color="red" size="big" ribbon>NR124</Label>
                        </Table.Cell>
                        <Table.Cell>2</Table.Cell>
                        <Table.Cell>14:22</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>PR4456</Table.Cell>
                        <Table.Cell>4</Table.Cell>
                        <Table.Cell>12:34</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>NR9485</Table.Cell>
                        <Table.Cell>3</Table.Cell>
                        <Table.Cell>16:45</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu inverted floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        </Segment>
    </Segment>
    </div>
);

export default Historico;