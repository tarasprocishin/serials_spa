import Component from "../../Component";
import viwe from "./view";
import "../style-for-list.css";

export default class MainList extends Component {
  constructor({ element, shows = [] }) {
    super({ element });
    this._shows = shows;

    this.on("click", '[data-element="link"]', event => {
      let serial = event.target.closest('[data-element="show-element"]');
      const serialId = serial.dataset.showId;
      this.emit("checked-serial", serialId);
    });
  }

  show(serials) {
    this._shows = serials;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = viwe(this._shows);
  }
}
