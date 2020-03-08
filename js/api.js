const API_KEY = 'API_KEY';

const api = (API_URL = 'https://api.tvmaze.com/') => {
    const searchAPIEndpoint = `${API_URL}search/shows?q=`;
    const showsAPIEndpoint = `${API_URL}shows`;
    return {
        getShows: async text => {
            try {
            // Ternario para elegir url si lleva texto o no
            const requestUrl = text ? `${searchAPIEndpoint}${text}`: showsAPIEndpoint;
            const response = await fetch(requestUrl);
                if(!response.ok){
                    throw new Error('Error fetching shows');
                }
                const data = await response.json();
                // por un error de la api donde data devulve diferente tranformamos el data para que siempre devulva el mismo formato el json.
                const formatData = data.map(item => {
                    if(item.show){
                        return item.show
                    } else{
                        return item;
                    }
                });
                return formatData;
            } catch(err){
                console.log(err);
                throw err;
            }
        },
    };

};

export default api;