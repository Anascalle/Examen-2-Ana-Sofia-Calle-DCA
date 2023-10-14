import "./components/export"
import Card,{ Attributes } from "./components/card/card";
import { getCats, getFacts } from "./services/data";
import * as components from "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const facts = await getFacts();
        console.log('jo',facts.fact);
        this.render(facts.fact)
    }

    render(facts:any) {
       

        const card= this.ownerDocument.createElement("my-card") as Card;
        card.setAttribute(Attributes.phase, facts.fact)
       
        this.shadowRoot?.appendChild(card)

        const btn=this.ownerDocument.createElement("button")
        btn.innerHTML= `get new cat`
        this.shadowRoot?.appendChild(btn)
      
        btn.addEventListener("click", async()=>{
            const factss = facts.split(' ');
            console.log(factss)
            const cats = await getCats(factss[0])
           
            console.log(cats?.url)

            const card= this.ownerDocument.createElement("my-card") as Card;
            card.setAttribute(Attributes.img, cats!.url)
            this.shadowRoot?.appendChild(card)

       
        


        })
    }
}

customElements.define('app-container', AppContainer)