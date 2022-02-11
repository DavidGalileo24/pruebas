import React, {} from 'react';
import Context from './Context';

const ProviderClase({children}) => {
    return(
       <Context.Provider value={
           token,
           setToken,
       }  >,
           {clindren}
       <Context.Provider/>
    );
}
export default ProviderClase