import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class VlocityDCCarousel extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        span {
          color: blue;
        }
        :host {
          display: inline-block;
        }
      </style>
  
      <!-- shadow DOM goes here -->
      <span>Not much here yet.</span>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('vlocity-dc-carousel', VlocityDCCarousel);
