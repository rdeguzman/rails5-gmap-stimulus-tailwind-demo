import {Controller} from 'stimulus'
import MapBasicUtility from '../utilities/map_basic_utility'

export default class extends Controller {
  initialize() {
    let opts = {
      google: window.google || {},
    }
    this.gmaps = new MapBasicUtility(opts)
  }

  connect() {
    // const el = this.element.id
    this.gmaps.initMap(this.element)

    this.load()
  }

  load() {
    fetch(this.data.get('url'))
      .then(response => response.json())
      .then(json => {
        this.gmaps.addMarkers(json)
      })
  }
}
