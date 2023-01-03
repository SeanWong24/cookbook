import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@ui5/webcomponents-fiori/dist/Bar.js';
import '@ui5/webcomponents/dist/Button.js';
import "@ui5/webcomponents-icons/dist/AllIcons.js";
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Cookbook';

  @property({ type: Boolean }) enableBack: boolean = false;

  static get styles() {
    return css`
      ui5-label {
        user-select: none;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <ui5-bar design="Header">
          <ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent" @click=${()=> location.href = (import.meta as any).env.BASE_URL}></ui5-button>
          <ui5-label>${this.title}</ui5-label>
          <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
        </ui5-bar>
      </header>
    `;
  }
}
