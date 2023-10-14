export enum Attributes {
"titlecat"= "titlecat",
"img"= "img",
"phase"= "phase",

}

class Card extends HTMLElement{
titlecat?: string;
img?: string;
phase?: string;
constructor(){
    super();
    this.attachShadow({mode:"open"});
}
static get observedAttributes(){
    const attrs: Record <Attributes,null> = {
        titlecat:null,
        img:null,
       phase:null,
    }
    return Object.keys(attrs)
}

attributeChangedCallback(propName: Attributes, oldValue: string |undefined, newValue: string ){
switch (Attributes) {
    default:
        this[propName]= newValue;
        break;
}
this.render();
}

connectedCallback(){
    this.render();
}

render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML=  `

        <div>
        <h1>${this.titlecat}</h1>
        <img src="${this.img}></img>
        <p>${this.phase}</p>
        </div>
        `
    }

}
}
customElements.define("my-card",Card);
export default Card
