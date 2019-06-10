import { LitElement, html, property } from 'lit-element';

class XDropdown extends LitElement {
  @property() visible = false;
  @property() title = 'dropdown';

  constructor() {
    super();
    this.visible = false;
    this.title = 'dropdown';
  }

  render() {
    return html`
      <style>
        .dropdown div {
          border: 1px solid #ccc;
          padding: 12px;
        }
      </style>
      <div class="dropdown">
        <button @click="${() => this.toggle()}">${this.title}</button>
        ${this.visible ?
          html`
            <div>
              <slot></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visible', { detail: this.visible }))
  }
}

customElements.define('x-dropdown', XDropdown);
