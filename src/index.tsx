import App from 'App'
import { addCustomClickEventListener } from 'utils/addCustomEventListener'
import registerCustomElement from 'utils/register-custom-element'

registerCustomElement({
  name: 'hub-button-app',
  component: App,
})

addCustomClickEventListener('DocNavLink')
