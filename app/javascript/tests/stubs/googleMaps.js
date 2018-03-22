export default function() {
  function MVCArray(p) {
    return {
      getLength: () => {
        return p.length
      },
      getArray: () => {
        return p.length
      },
      getAt: i => {
        return p[i]
      },
    }
  }

  function GoogleMap() {
    return {
      fitBounds: b => {},
      setTilt: function() {},
      mapTypes: {
        set: function() {},
      },
      overlayMapTypes: {
        insertAt: function() {},
        removeAt: function() {},
      },
      setCenter: () => {},
      setZoom: () => {},
    }
  }

  return (window.google = {
    maps: {
      getMap: () => {
        return GoogleMap()
      },
      Map: () => {
        return GoogleMap()
      },
      Point: function() {},
      Marker: function(p) {
        return {
          map: p.map,
          position: p.position,
          icon: p.icon,
          label: p.label,
        }
      },
      SymbolPath: {},
      event: {
        addListener: function() {},
      },
      LatLng: function(lat, lng) {
        return {
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        }
      },
      LatLngBounds: function() {
        return {
          extend: p => {},
          isEmpty: () => {
            return false
          },
        }
      },
    },
  })
}
