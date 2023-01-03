import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import {styles} from './about-styles';

import {styles as sharedStyles} from '../../styles/shared-styles';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [sharedStyles, styles];

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>

      <main>about</main>
    `;
  }
}
