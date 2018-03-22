import MapBasicUtility from '../utilities/map_basic_utility'
import googleMaps from './stubs/googleMaps'
const sampleData = require('../../../public/sample_data.json')

const google = new googleMaps()

describe('MapBasicUtility', () => {
  let dom, opts, map, utility

  beforeEach(() => {
    map = new google.maps.Map()
    opts = {
      google: google,
    }
    utility = new MapBasicUtility(opts)
    dom = document.createElement('div')
    dom.id = 'fullname'
  })

  it('return instance of google maps', () => {
    expect(utility.google).toBeDefined()
    expect(utility.google.maps).toBeDefined()
  })

  it('can set element to map', () => {
    utility.initMap(dom)
    expect(utility.map).toBeDefined()
  })

  it('can load json data to maps', () => {
    utility.initMap(dom)
    utility.addMarkers(sampleData)
    expect(utility.map).toBeDefined()
  })
})
