import createContext from 'react';

const almacenamiento = createContext({
    token = null,
    setToken: () = {}

})

export default almacenamiento;