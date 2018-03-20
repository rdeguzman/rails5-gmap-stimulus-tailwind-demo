export default class MapFiltersUtility {
  constructor(opts) {
    this.google = opts.google || {}
    this.data_array = []
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

      let m = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: v.vehicle_name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: v.available ? "green" : "red",
          fillOpacity: 1.0,
          strokeColor: "black",
          strokeWeight: 2
        }
      })

      this.data_array.push({
        data: v,
        marker: m
      })

      bounds.extend(pos)
    })

    this.map.fitBounds(bounds)
  }

  showAvailable(flag) {
    console.log('utility.showAvailable:', flag)

    this.data_array.forEach( obj => {

      if(obj.data.available == !flag)
        obj.marker.setMap(null)
      else
        obj.marker.setMap(this.map)

    })
  }
}

