import { Controller } from "stimulus"
import MapsUtility from "../utilities/maps_utility"

export default class extends Controller {

  initialize() {
  }

  connect() {
    let opts = {
      google: window.google || {},
    }
    const el = this.element.id
    this.gmaps = new MapsUtility(opts)
    this.gmaps.initMap(el)

    this.load()
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.json())
      .then(json => {
        this.gmaps.addMarkers(json)
      })
  }

}
