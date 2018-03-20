export default class MapsUtility {
  constructor(opts) {
    this.google = opts.google || {}
  }

  initMap(div_element) {
    const google = this.google

    let uluru = {lat: -25.363, lng: 131.044}
    this.map = new google.maps.Map(
      document.getElementById(div_element), {
      zoom: 4,
      center: uluru
    });
  }
}
