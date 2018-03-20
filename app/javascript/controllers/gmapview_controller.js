import { Controller } from "stimulus"
import MapsUtility from "../utilities/maps_utility"

export default class extends Controller {

  initialize() {
    let opts = {
      google: window.google || {},
    }
    this.gmaps = new MapsUtility(opts)
    this.gmaps.initMap()
  }

}
