export default class Carousel {

    constructor(options){
        // Container info
        this.container = options.container;
        this.icon = options.icon;
        this.title = options.title;
        this.subtitle = options.subtitle;
        // Cards
        this.cards = [];
        // Initialization and properties
        this.div = document.getElementById(this.container);
        this.displayCarouselInfo();
        this.fetchCards();
        this.displayCards();
        this.containerCardsArrows = this.div.querySelector(".container-cards-arrows");
        this.containerCards = this.div.querySelector(".container-cards");
        this.arrowRight = this.div.querySelector(".arrow-right");
        this.arrowLeft = this.div.querySelector(".arrow-left");
        this.hoverListener();
        this.arrowListener();
        this.scrollRightLoop=null;
        this.scrollLeftLoop=null;
    }
    
    // Display Carousel Icon, Title and Subtitle
    displayCarouselInfo(){
        const div = document.createElement('div');
        div.className = 'container-description';
        div.innerHTML = `
            <div class="icon"><i class="material-icons">${this.icon}</i></div>
            <div class="description">
                <h4 class="title">${this.title}</h4>
                <small class="subtitle">${this.subtitle}</small>
            </div>
        `;
        this.div.appendChild(div); 
    }

    // Get Cards (Fake API)
    fetchCards(){
        this.cards.push(
            {
                image: "https://i.picsum.photos/id/191/200/100.jpg",
                type: "elearning",
                duration: 3600,
                title: "Welcome to Effective Time Management",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/192/200/100.jpg",
                type: "elearning",
                duration: 7600,
                title: "Choosing the best audio software for your computer",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/193/200/100.jpg",
                type: "elearning",
                duration: 4900,
                title: "The small change that creates massive results in your life",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/194/200/100.jpg",
                type: "elearning",
                duration: 7800,
                title: "Enhance your brand potential with giant advertising blimps",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/195/200/100.jpg",
                type: "elearning",
                duration: 8000,
                title: "How to write better advertising copy",
                cardinality: "single"
            },
        )
    }

    // Display Cards in the Carousel
    displayCards(){

        const div = document.createElement('div');
        div.className = 'container-cards-arrows';
        let HTML = `
            <div class="arrow-left">
            <
            </div>
        `;
        HTML+= "<div class='container-cards'>";
        this.cards.forEach(item => {
            HTML += `
                <div class="card">
                    <div class="image">
                        <img src="${item.image}">
                        <div class="bottom-left-text"><small>${item.type.toUpperCase()}</small></div>
                        <div class="bottom-right-text"><small>${this.convertDuration(item.duration)}</small></div>
                    </div>
                    <h5 class="title">${item.title}</h5>
                    <div class="card-2"></div>
                </div>
                
            `;

        });
        HTML += "</div>";
        HTML+= `
            <div class="arrow-right">
            >
            </div>
        `;
        div.innerHTML = HTML;
        this.div.appendChild(div); 
    }

    // Convert seconds in Hours and Minutes
    convertDuration (seconds){
        let hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        let minutes = Math.floor(seconds / 60);

        return hours+"h "+minutes+"m";
    }

    // Scroll left or right on arrows click
    arrowListener(){

        // RIGHT ARROW
        // To handle on long press
        this.arrowRight.onmousedown = () =>{
            this.scrollRightLoop = setInterval( () => this.scrollRight(),100);
        }
        
        // Long press stop. Stop interval and scroll
        this.arrowRight.onmouseup = () =>{
            window.clearInterval(this.scrollRightLoop);
            this.canScrollLeft();
        }
        
        // Click on right arrow
        this.arrowRight.onclick = () => {  
            this.canScrollLeft();
            let previousValue = this.containerCards.scrollLeft;
            this.containerCards.scrollLeft += 20;   
            let nextValue = this.containerCards.scrollLeft;
            this.canScrollRight(previousValue,nextValue);  
        }

        // LEFT ARROW
        // To handle on long press
        this.arrowLeft.onmousedown = () =>{
            this.scrollLeftLoop = setInterval( () => this.scrollLeft(),100);
        }
        
        // Long press stop. Stop interval and scroll
        this.arrowLeft.onmouseup = () =>{
            window.clearInterval(this.scrollLeftLoop);
        }

        // Click on left arrow
        this.arrowLeft.onclick = () => {  
            this.canScrollLeft();  
            this.containerCards.scrollLeft -= 20; 
        }

            
    }

    // Scroll right
    scrollRight(){    
        this.canScrollLeft();
        let previousValue = this.containerCards.scrollLeft;
        this.containerCards.scrollLeft+=20;   
        let nextValue = this.containerCards.scrollLeft;   
        this.canScrollRight(previousValue,nextValue);  
    }

    // Scroll left
    scrollLeft(){   
        this.containerCards.scrollLeft-=20;          
    }

    // Hide and show arrows when Hover on cards container
    hoverListener(){

       this.containerCardsArrows.onmouseover = () =>{
            
            this.arrowRight.style.visibility = "visible";           
            this.canScrollLeft();         
                
        }

        this.containerCardsArrows.onmouseout = () =>{
            this.arrowRight.style.visibility = "hidden";
            this.arrowLeft.style.visibility = "hidden";
            
        }
    }

    // Check if you can scroll more on left
    canScrollLeft(){
        if(this.containerCards.scrollLeft <=0)
            this.arrowLeft.style.visibility = "hidden";          
        else
            this.arrowLeft.style.visibility = "visible";
    }

    // Check if you can scroll more on right
    canScrollRight(previousValue, nextValue){
        // Load new cards when scroll right is finished
        if(previousValue == nextValue)
          this.updateCards();       
    }

    // Add new cards to the cards container
    updateCards(){

        let newCards = [
            {
                image: "https://i.picsum.photos/id/196/200/100.jpg",
                type: "elearning",
                duration: 3600,
                title: "Introduction to programming",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/197/200/100.jpg",
                type: "elearning",
                duration: 7600,
                title: "How to be a good team leader",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/198/200/100.jpg",
                type: "elearning",
                duration: 4900,
                title: "Organizing team work in smart working",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/199/200/100.jpg",
                type: "elearning",
                duration: 7800,
                title: "Understanding the basics of networking",
                cardinality: "single"
            },
            {
                image: "https://i.picsum.photos/id/200/200/100.jpg",
                type: "elearning",
                duration: 8000,
                title: "How to write perfect blog posts",
                cardinality: "single"
            },
        ];
        let HTML = "";
        newCards.forEach(item => {
            HTML += `
                <div class="card">
                    <div class="image" style="display:none">
                        <img src="${item.image}">
                        <div class="bottom-left-text"><small>${item.type.toUpperCase()}</small></div>
                        <div class="bottom-right-text"><small>${this.convertDuration(item.duration)}</small></div>
                    </div>
                    <div class="image-placeholder"></div>
                    <div class="text-placeholder"></div>
                    <div class="text-placeholder"></div>
                    <h5 class="title" style="display:none">${item.title}</h5>
                </div>
            `;

        });

        this.containerCards.insertAdjacentHTML('beforeend',HTML);
        this.simulateDelay();
    }

    // Simulate Delay and Display Cards information
    simulateDelay (){

        let imagesPlaceholders = this.containerCards.querySelectorAll(".image-placeholder");
        let textPlaceholders = this.containerCards.querySelectorAll(".text-placeholder");
        let images = this.containerCards.querySelectorAll(".image");
        let titles = this.containerCards.querySelectorAll(".title");
        setTimeout( () =>{
            
            imagesPlaceholders.forEach(item => item.style.display = "none");
            textPlaceholders.forEach(item => item.style.display = "none");
            images.forEach(item => item.style.display = "block");
            titles.forEach(item => item.style.display = "block");

        
        }, 4000);


    }
}