import { LitElement, html } from "lit";

export class SimpleTesting extends LitElement {

    static properties = {
        count: Number
    }
    
    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html`
            ${this.count}<br>
            <button @click=${() => this.count++}>Increment</button>
        `
    }
}

customElements.define('simple-testing', SimpleTesting)