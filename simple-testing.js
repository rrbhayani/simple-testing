import { LitElement, html } from "lit";

export class SimpleTesting extends LitElement {
    render() {
        return html`Hello World`
    }
}

customElements.define('simple-testing', SimpleTesting)