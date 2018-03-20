import { Controller } from "stimulus"
import MapFiltersUtility from "../utilities/map_filters_utility"

export default class extends Controller {

  initialize() {
    let opts = {
      google: window.google || {},
    }
    this.gmaps = new MapFiltersUtility(opts)
  }

  connect() {
    this.gmaps.initMap("mapdiv")

    this.load()
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.json())
      .then(json => {
        this.gmaps.addMarkers(json)
      })
  }

  all() {
    console.log("Show all")
    this.gmaps.showAll()
  }

  available() {
    console.log("Show only available")
    this.gmaps.showAvailable(true)
  }

  inUse() {
    console.log("Show only inUse")
    this.gmaps.showAvailable(false)
  }

}

