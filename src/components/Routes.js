import React from 'react';
import Recientes from '../views/Recientes'
import Deportes from '../views/Deportes'
import Economia from '../views/Economia';
import Salud from '../views/Salud';
import { Route } from 'react-router-dom';
import Covid from '../views/Covid';

export default function Routes(props){
    const {region} = props 
    return (
        <>
          <Route path="/Deportes" >
              <Deportes
                region={region}
              />
            </Route>
            <Route path="/Salud" >
              <Salud
                region={region}
              />
            </Route>
            <Route path="/Economia" >
              <Economia
                region={region}
              />
            </Route>
            <Route path="/Covid" >
              <Covid
                region={region}
              />
            </Route>
            <Route path="/" exact >
              <Recientes
                region={region}

              />
            </Route>
        </>
    )

}