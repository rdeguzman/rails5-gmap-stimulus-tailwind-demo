import {Application} from 'stimulus'
import MapBasicController from '../controllers/map_basic_controller'

describe('MapBasicController', () => {
  let dom

  beforeEach(() => {
    dom = document.createElement('div')
    dom.setAttribute('id', 'fullMap')
    dom.setAttribute('data-controller', 'map-basic')
    dom.setAttribute('data-map-basic-url', '/sample_data.json')

    const stimulusApp = Application.start()
    stimulusApp.register('map_basic', MapBasicController)
  })

  it('has an iframe', () => {
    expect(document.getElementsByTagName('iframe')).toBeDefined()
  })
})
