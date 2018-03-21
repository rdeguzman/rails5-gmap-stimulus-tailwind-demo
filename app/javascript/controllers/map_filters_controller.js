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
    this.toggleButton("btnAll")
  }

  load() {
    fetch(this.data.get("url"))
      .then(response => response.json())
      .then(json => {
        this.gmaps.addMarkers(json)
      })
  }

  toggleButton(btnId) {
    let btnCollection = this.element.getElementsByClassName("btn")
    Array.from(btnCollection).forEach(el => {
      if(el.id == btnId)
        el.classList.add("btn-active")
      else
        el.classList.remove("btn-active")
    })
  }

  all() {
    console.log("Show all: ", this.element)
    this.gmaps.showAll()
    this.toggleButton("btnAll")
  }

  available() {
    console.log("Show only available")
    this.gmaps.showAvailable(true)
    this.toggleButton("btnAvailable")
  }

  inUse() {
    console.log("Show only inUse")
    this.gmaps.showAvailable(false)
    this.toggleButton("btnInUse")
  }

}

