const URL = "https://api.themoviedb.org/3/tv/";
const KEY = "api_key=3f9e5e0018e0fa36c3f8f765c2edc968";

const showService = {
  getTVShows: kindShows => {
    return fetch(URL + kindShows + "?" + KEY + "&language=en-US&page=1")
      .then(response => response.json())
      .then(response => response.results)
      .catch(error => {
        console.log(error);
      });
  },

  getSeasons: async id => {
    return fetch(URL + id + "?" + KEY + "&language=en-US&page=1")
      .then(response => response.json())
      .then(response => response.seasons)
      .catch(error => {
        console.log(error);
      });
  },

  getEpisodes: async (serialId, seasonId) => {
    return fetch(
      URL + serialId + "/season/" + seasonId + "?" + KEY + "&language=en-US"
    )
      .then(response => response.json())
      .then(response => response.episodes)
      .catch(error => {
        console.log(error);
      });
  },

  getEpisode: async (serialId, seasonId, episodeId) => {
    return fetch(
      URL +
        serialId +
        "/season/" +
        seasonId +
        "/episode/" +
        episodeId +
        "?" +
        KEY +
        "&language=en-US"
    )
      .then(response => response.json())
      .catch(error => {
        console.log(error);
      });
  }
};

export default showService;
