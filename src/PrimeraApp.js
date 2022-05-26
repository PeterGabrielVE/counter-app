import React from 'react';

const PrimeraApp = ( props )=> {

    const saludo = 'Hola Mundo';

    return (
        <> 
            <h1> { props.saludo } </h1>
            <p>Mi primera aplicacion</p>
        </>
       
    );
}

export default PrimeraApp;