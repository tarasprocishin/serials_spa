import Component from "../Component";
import view from "./view";
import "./style.css";

export default class Filter extends Component {
  constructor({ element }) {
    super({ element });
    this._render();

    this.on("change", '[data-element="filter-select"]', event => {
      window.location.hash = event.target.value;
      this.emit("checked-filter", event.target.value);
    });
  }

  _render() {
    this._element.innerHTML = view();
  }
}
