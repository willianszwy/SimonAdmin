import React from 'react';
import { Segment, Divider, Input } from 'semantic-ui-react';
import MenuPrincipal from '../components/menu-principal';

const Configuracao = () => (
    <div>
        <MenuPrincipal/>
    <Segment inverted padded className="painel-shadow" stacked>
        <Segment inverted>
            <Divider horizontal inverted>
                Configuração de Atendimento
            </Divider>
            <Segment inverted>
                <Input type="number"  inverted action={{ color: 'white', inverted: true, labelPosition: 'left', icon: 'desktop', content: 'Cadastrar' }} placeholder='Código Mesa...' />
            </Segment>
        </Segment>
    </Segment>
    </div>
);

export default Configuracao;