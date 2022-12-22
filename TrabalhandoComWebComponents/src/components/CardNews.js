class CardNews extends HTMLElement {
    constructor(){
        super();
    
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        //COMPONENT ROOT
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //CARD LEFT
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor")|| "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        //CARD RIGHT
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-img.jpg";

        cardRight.appendChild(newsImage);
        

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){

        const style = document.createElement("style");
        style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', sans-serif;
            
            }
            
            .card{
                width: 80%;
                margin: 2rem auto;
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                
            }
            
            .cardRight img{
                width: 280px;
                height: 100%;
            }
            
            .cardLeft{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
                text-align:left;
                
            }
            
            .cardLeft a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
                
            }
            
            .cardLeft p{
                color: rgb(70, 70, 70);
            }
            
            .cardLeft span{
                font-weight: 500;
                margin: 0;
            }
        
         `

        return style;

    }

}
customElements.define("card-news", CardNews);