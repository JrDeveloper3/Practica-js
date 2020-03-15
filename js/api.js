const API_KEY = 'API_KEY';

const api = (API_URL = 'https://api.tvmaze.com/') => {
  const searchAPIEndpoint = `${API_URL}search/shows?q=`;
  const showsAPIEndpoint = `${API_URL}shows`;
  return {
    getShows: async text => {
      try {
        const requestUrl = text ? `${searchAPIEndpoint}${text}` : showsAPIEndpoint;
        const response = await fetch(requestUrl);
        if (!response.ok) {
          throw new Error('Error fetching shows');
        }
        const data = await response.json();
        const formatData = data.map(item => {
          if (item.show) {
            return item.show;
          }
          return item;
        });
        return formatData;
      } catch (err) {
        console.error(err.message);
        throw err;
      }
    },

    };

};

export default api;