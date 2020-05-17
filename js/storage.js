
// Crearemos un interfaz para diferentes tipos de storage y que el desarrollador elija que tipo quiere

const lStorage = {
  setItem: (key,value) => localStorage.setItem(key, value),
  getItem: key => localStorage.getItem(key),
};

const cookieStorage = {
  setItem: (key, value) => Cookies.set(key, value),
  getItem: key => Cookies.get(key) || '',
};

const storage = (type='lStorage') => {
  const types = {
    lStorage,
    cookieStorage,
  };
    // If para cubrirnos las espaldas con otros navegadores
  if(typeof(Storage) !== 'undefined'){
    //Se acepta localStorage
    return types[type];
  }
  //por defecto
  return types['cookieStorage'];
};

export default storage;
