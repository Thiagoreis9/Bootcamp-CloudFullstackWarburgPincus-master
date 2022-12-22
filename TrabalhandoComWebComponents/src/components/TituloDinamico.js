class TituloDinamico extends HTMLElement{
    constructor(){
        super();
    
        const shadow = this. attachShadow({mode:"open"});

        //base do component <h1>Thiago</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilo do component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        //Enviar para a shadow 
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
        
    }
}

customElements.define("titulo-dinamico", TituloDinamico);