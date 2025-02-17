class CRow extends HTMLElement {
	static get observedAttributes() {
		return ['gutter']
	}

	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = `
        <style>
        :host {
            --gutter:${this.gutter + 'px'};
            display:grid;
            grid-template-columns:repeat(24,1fr);
            grid-gap: var(--gutter,0);
        }
        </style>
        <slot></slot>
        `
	}

	get gutter() {
		return this.getAttribute('gutter')
	}

	set gutter(value) {
		this.setAttribute('gutter', value)
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name == 'gutter' && this.shadowRoot) {
			this.style.setProperty('--gutter', newValue + 'px')
		}
	}
}

if (!customElements.get('c-row')) {
	customElements.define('c-row', CRow)
}

class CCol extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })

		shadowRoot.innerHTML = `
        <style>
        :host {
            grid-column: span 1;
        }
        ${Array.from(
					{ length: 24 },
					(el, i) =>
						':host([span="' +
						(i + 1) +
						'"]) {grid-column: span ' +
						(i + 1) +
						'}\n'
				).join('')}
        </style>
        <slot></slot>
        `
	}
}

if (!customElements.get('c-col')) {
	customElements.define('c-col', CCol)
}

export default class CLayout extends HTMLElement {
	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = `
        <style>
        :host {
            display:flex;
            flex-direction:column;
        }
        :host([row]){
            flex-direction:row;
        }
        :host([column]){
            flex-direction:column;
        }
        :host([expand]){
            flex:1;
        }
        :host([center]:not([center$=Axis])){
            justify-content: center;
            align-items: center;
        }
        :host([center="mainAxis"]){
            justify-content: center;
        }
        :host([center="crosAxis"]){
            align-items: center;
        }

        </style>
        <slot></slot>
        `
	}
}

if (!customElements.get('c-layout')) {
	customElements.define('c-layout', CLayout)
}
