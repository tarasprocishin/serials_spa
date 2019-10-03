import Filter from "./components/Filter/Filter";
import MainList from "./components/lists/MainList/MainList";
import SeasonsList from "./components/lists/SesonsList/SesonsList";
import EpisodesList from "./components/lists/EpisodesList/EpisodesList";
import Episode from "./components/Episode/Episode";
import showService from "../../services/TVShows-service";

export default class TVShowsConteiner {
  constructor({ element }) {
    this._element = element;

    this._state = {};

    this._render();

    this._initFilter();
    this._initMainList();
    this._initSeasonsList();
    this._initEpisodesList();
    this._initEpisode();

    this.onRouteChange();
  }

  _initEpisode() {
    this._episode = new Episode({
      element: this._element.querySelector("[data-component='episode']")
    });
  }

  _initEpisodesList() {
    this._episodesList = new EpisodesList({
      element: this._element.querySelector("[data-component='episodes-list']")
    });

    this._episodesList.subscribe("checked-episode", async episodeId => {
      window.location.hash = window.location.hash + "/" + episodeId;
    });
  }

  _initSeasonsList() {
    this._seasonsList = new SeasonsList({
      element: this._element.querySelector("[data-component='seasons-list']")
    });

    this._seasonsList.subscribe("checked-season", async seasonId => {
      window.location.hash = window.location.hash + "/" + seasonId;
    });
  }

  _initMainList() {
    this._mainList = new MainList({
      element: this._element.querySelector('[data-component="main-list"]')
    });

    this._mainList.subscribe("checked-serial", async id => {
      window.location.hash = id;
    });
  }

  _initFilter() {
    this._filter = new Filter({
      element: this._element.querySelector('[data-component="filter"]')
    });

    this._showSerials("popular");

    this._filter.subscribe("checked-filter", filter => {
      window.location.hash = filter;
    });
  }

  async _showEpisode(serialId, seasonId, episodeId) {
    const episode = await showService.getEpisode(serialId, seasonId, episodeId);
    this._episode.show(episode);
    this._episodesList.hide();
  }

  async _showEpisodes(serialId, seasonId) {
    let episodes = await showService.getEpisodes(serialId, seasonId);
    this._episodesList.show(episodes);
    this._seasonsList.hide();
    this._episode.hide();
  }

  async _showSeason(serialId) {
    let seasons = await showService.getSeasons(serialId);
    this._seasonsList.show(seasons);
    this._mainList.hide();
    this._filter.hide();
    this._episodesList.hide();
  }

  async _showSerials(filter) {
    const serials = await showService.getTVShows(filter);
    this._mainList.show(serials);
    this._filter.show();
    this._seasonsList.hide();
  }

  onRouteChange() {
    const regSeasonsList = /^\d+$/;
    const regEpisodeList = /^\d+\/\d+$/;
    const regEpisode = /^\d+\/\d+\/\d+$/;

    window.addEventListener("hashchange", () => {
      const hashLocation = window.location.hash.substr(1);

      if (hashLocation === "popular" || hashLocation === "top_rated") {
        this._showSerials(hashLocation);
      }

      if (regSeasonsList.test(hashLocation)) {
        this._showSeason(hashLocation);
      }

      if (regEpisodeList.test(hashLocation)) {
        let arrIds = hashLocation.split("/");
        this._showEpisodes(arrIds[0], arrIds[1]);
      }

      if (regEpisode.test(hashLocation)) {
        let arrIds = hashLocation.split("/");
        this._showEpisode(arrIds[0], arrIds[1], arrIds[2]);
      }
    });
  }

  _render() {
    this._element.innerHTML = `
    <div data-component="filter">
    </div>
    <div data-component="main-list">
    </div>
    <div data-component="seasons-list">
    </div>
    <div data-component="episodes-list">
    </div>
    <div data-component="episode">
    </div>
    `;
  }
}
