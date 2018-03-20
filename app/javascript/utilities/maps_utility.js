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

  addMarkers(json_array) {
    const google = this.google
    let bounds = new google.maps.LatLngBounds()

    json_array.forEach( v => {

      let pos = {lat: parseFloat(v.lat), lng: parseFloat(v.lng)}
      new google.maps.Marker({
        position: pos,
        map: this.map,
        title: v.vehicle_name
      })

      bounds.extend(pos)
    })

    this.map.fitBounds(bounds)
  }
}
