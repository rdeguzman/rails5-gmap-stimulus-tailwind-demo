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

  function GMap() {
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
        return GMap()
      },
      Map: () => {
        return GMap()
      },
      Point: function() {},
      Marker: function(params) {
        return {
          map: params.map,
          position: params.position,
          icon: params.icon,
          label: params.label,
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
      Circle: function(params) {
        var latLng = params.center
        var radius = params.radius
        var editable = null

        return {
          getCenter: () => {
            return {
              lat: () => latLng.lat,
              lng: () => latLng.lng,
            }
          },
          getBounds: () => {
            return {
              getCenter: () => {},
            }
          },
          getEditable: () => {
            return editable
          },
          getRadius: () => radius,
          set: (key, val) => {},
          setEditable: c => {
            editable = c
            return editable
          },
        }
      },
      places: {
        Autocomplete: i => {
          return {
            getPlace: () => {
              return {
                geometry: {
                  location: {
                    lat: () => {},
                    lng: () => {},
                  },
                },
                address_components: [],
              }
            },
          }
        },
        location: {},
      },
      Polygon: function(params) {
        var paths = params.paths
        var editable = null
        return {
          getPath: () => {
            return MVCArray(paths)
          },
          getEditable: () => {
            return editable
          },
          getBounds: () => {
            return {
              getCenter: () => {},
            }
          },
          set: (key, val) => {},
          setEditable: c => {
            editable = c
            return editable
          },
        }
      },
      drawing: {
        DrawingManager: options => {
          return {
            setMap: m => {},
            drawingControl: false,
          }
        },
        OverlayType: {
          RECTANGLE: 'rectangle',
          CIRCLE: 'circle',
          POLYGON: 'polygon',
        },
      },
      ControlPosition: {
        TOP_CENTER: 2,
      },
    },
  })
}
