export default class MapBasicUtility {
  constructor(opts) {
    this.google = opts.google || {}
    this.map = null
  }

  initMap(div_element) {
    const google = this.google

    let uluru = {lat: -25.363, lng: 131.044}
    this.map = new google.maps.Map(div_element, {
      zoom: 4,
      center: uluru,
    })
  }

  addMarkers(json_array) {
    const google = this.google
    let bounds = new google.maps.LatLngBounds()

    json_array.forEach(v => {
      let pos = {lat: v.lat, lng: v.lng}

      new google.maps.Marker({
        position: pos,
        map: this.map,
        title: v.vehicle_name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: v.available ? 'green' : 'red',
          fillOpacity: 1.0,
          strokeColor: 'black',
          strokeWeight: 2,
        },
      })

      bounds.extend(pos)
    })

    this.map.fitBounds(bounds)
  }
}
