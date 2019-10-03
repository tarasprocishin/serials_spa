import Component from "../../Component";
import viwe from "./view";
import "../style-for-list.css";

export default class SeasonsList extends Component {
  constructor({ element }) {
    super({ element });

    this.on("click", '[data-element="link"]', event => {
      let serial = event.target.closest('[data-element="season-element"]');
      const seasonId = serial.dataset.seasonId;
      this.emit("checked-season", seasonId);
    });
  }

  show(seasons) {
    this._seasons = seasons;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = viwe(this._seasons);
  }
}
