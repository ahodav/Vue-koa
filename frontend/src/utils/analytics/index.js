import Mixpanel from 'mixpanel-browser'
import util from 'util'

const shouldTrack = process.env.NODE_ENV === 'production'

class Analitycs {
  static init() {
    const token = process.env.MIXPANEL_TOKEN
    if (shouldTrack) {
      Mixpanel.init(token)
    } else {
      console.log(`initialising analitycs with token: ${token}`)
    }
  }

  static track(event, properties) {
    if (shouldTrack) {
      Mixpanel.track(event, properties)
    } else {
      if (properties) {
        const props = util.inspect(properties, {
          showHidden: false, depth: null
        })
        console.log(`tracking: ${event} with: ${props}`)
      } else {
        console.log(`tracking: ${event}`)
      }
    }
  }

  static indentify(id) {
    if (shouldTrack) {
      Mixpanel.indentify(id)
    } else {
      console.log(`Analytics: indetyfyng ${id}`)
    }
  }
}

export default Analitycs
