import html from '../core.js'
import { connect } from '../store.js'

function FooterItem({ type, filter }) {
  return html`
    <li>
      <a 
        class="${type === filter && 'selected'}" 
        href="#/" 
        onclick="dispatch('swapFilter', '${type}')"
      >${type[0].toUpperCase() + type.slice(1)}</a>
    </li>
  `
}

export default connect()(FooterItem)