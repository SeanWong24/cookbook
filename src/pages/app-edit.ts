import {LitElement, css, html} from 'lit';
import {property, customElement, state} from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Card.js';
import '@ui5/webcomponents/dist/CardHeader.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/Link.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '@ui5/webcomponents/dist/Title.js';

import {styles as sharedStyles} from '../styles/shared-styles';

type Item = {
  adjectives?: string[];
  name: string;
  unit: string;
  amount: number;
};

type Step = {
  input?: Item[];
  output?: Item[];
  action?: string;
  tools?: string[];
};

@customElement('app-edit')
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  @state() steps?: Step[] = [
    {
      input: [
        {
          name: 'beef',
          adjectives: ['awesome', 'fresh', 'nice-looking'],
          unit: 'g',
          amount: 100,
        },
        {
          name: 'fish',
          adjectives: ['raw'],
          unit: 'g',
          amount: 200,
        },
      ],
      output: [
        {
          name: 'beef',
          adjectives: ['sliced'],
          unit: 'g',
          amount: 100,
        },
        {
          name: 'fish',
          adjectives: ['sliced'],
          unit: 'g',
          amount: 200,
        },
      ],
      action: 'slice',
      tools: ['knife', 'chopping board'],
    },
    {},
  ];

  static get styles() {
    return [sharedStyles, css``];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header></app-header>

      <awesome-wrap>
        <main class="content">
          ${this.steps?.map(
            (step, i) => html`
              <ui5-card>
                <ui5-card-header
                  slot="header"
                  status=${`Step ${i + 1} of ${this.steps?.length ?? 0}`}
                >
                  <ui5-button
                    slot="action"
                    icon="less"
                    design="Negative"
                    tooltip="Remove step"
                  ></ui5-button>
                </ui5-card-header>
                <div style="padding: 0.5rem;">
                  <ui5-title level="H3">You should prepare</ui5-title>
                  <ui5-list separators="Inner">
                    ${step.input?.map(
                      (item) => html`
                        <ui5-li
                          description=${item?.adjectives?.join(', ') ?? ''}
                          additional-text=${`${item.amount} ${item.unit}`}
                          icon="less"
                          >${item?.name}</ui5-li
                        >
                      `
                    )}
                    <ui5-li icon="add">add item</ui5-li>
                  </ui5-list>
                </div>
                <div style="padding: 0.5rem;">
                  <ui5-title level="H3"
                    >You should
                    <ui5-input
                      value=${step?.action ?? ''}
                      placeholder="Enter the action"
                      show-clear-icon
                    ></ui5-input>
                    with</ui5-title
                  >
                  <ui5-list separators="Inner">
                    ${step.tools?.map(
                      (tool) => html` <ui5-li icon="less">${tool}</ui5-li> `
                    )}
                    <ui5-li icon="add">add item</ui5-li>
                  </ui5-list>
                </div>
                <div style="padding: 0.5rem;">
                  <ui5-title level="H3">You will get</ui5-title>
                  <ui5-list separators="Inner">
                    ${step.output?.map(
                      (item) => html`
                        <ui5-li
                          description=${item.adjectives?.join(', ') ?? ''}
                          additional-text=${`${item.amount} ${item.unit}`}
                          icon="less"
                          >${item.name}</ui5-li
                        >
                      `
                    )}
                    <ui5-li icon="add">add item</ui5-li>
                  </ui5-list>
                </div>
              </ui5-card>
            `
          )}
          <ui5-card>
            <ui5-card-header slot="header" status="New step">
              <ui5-button
                slot="action"
                icon="add"
                design="Positive"
                tooltip="Add step"
              ></ui5-button>
            </ui5-card-header>
          </ui5-card>
        </main>
      </awesome-wrap>
    `;
  }
}
