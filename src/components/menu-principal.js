import React from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class MenuPrincipal extends React.Component {

    render() {


        return (
            <div>
                <Grid padded="vertically">
                    <Grid.Column>
                        <Segment inverted className="painel-shadow">
                            <Menu inverted pointing secondary>
                                <Menu.Item name='home' as={NavLink} to='/home' />

                                <Menu.Item
                                    name='histórico'
                                    as={NavLink} to='/historico'
                                />

                                <Menu.Menu position='right'>
                                    <Menu.Item
                                        name='configuração'
                                        as={NavLink} to='/config'
                                    />
                                    <Menu.Item
                                        name='logout'
                                        as={NavLink} to='/logout'
                                    />
                                </Menu.Menu>
                            </Menu>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

