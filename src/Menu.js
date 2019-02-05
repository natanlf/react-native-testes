import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Legenda from './componentes/Legenda'
import Exemplo from './componentes/Exemplo'
import Calendario from './componentes/Calendario';

export default createDrawerNavigator ({
    Legenda: {
        screen: () => <Legenda/>
    },
    Calendario: {
        screen: () => <Calendario/>
    },
    Exemplo: {
        screen: () => <Exemplo/>,
        navigationOptions: { title: 'Accordion' }
    }
}, { drawerWidth: 300 })