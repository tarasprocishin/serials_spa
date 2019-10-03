import Component from "../../Component";
import viwe from "./view";
import "../style-for-list.css";

export default class EpisodesList extends Component {
  constructor({ element }) {
    super({ element });

    this.on("click", '[data-element="link"]', event => {
      let episode = event.target.closest('[data-element="episode-element"]');
      const episodeId = episode.dataset.episodeId;
      this.emit("checked-episode", episodeId);
    });
  }

  show(episodes) {
    this._episodes = episodes;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = viwe(this._episodes);
  }
}
