import Component from "../Component";
import view from "./view";
import "./style.css";

export default class Episode extends Component {
  constructor({ element }) {
    super({ element });
  }

  show(episode) {
    this._episode = episode;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = view(this._episode);
  }
}
