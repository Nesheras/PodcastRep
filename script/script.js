let cards = [
    {  image: 'images/imag_section_card/star.svg',
        frames:"I can’t recommend this podcast enough",
        name: "Betty Lacey"
    },
    {image: 'images/imag_section_card/star.svg',
    frames:"Jacob is the best in the business",
    name: "Adam Driver"},
    {image: 'images/imag_section_card/star.svg',
    frames:"A wealth of audio knowledge",
    name: "Marcus Brown"},
    {image: 'images/imag_section_card/star.svg',
    frames:"Every episode is a gem!",
    name: "Jessica Knowl"},
    {image: 'images/imag_section_card/star.svg',
    frames:"Whoa whoa, let me take some notes!",
    name: "Scott Adams"},
    {image:'images/imag_section_card/star.svg',
    frames:"I’ve upped my game considerably since I started listening",
    name: "Steven Blast"},
    
]
let sect = document.querySelector('.section__cards');
let div = document.createElement("div");

sect.appendChild(div);

for(let i = 0; i < cards.length; i++){
    let divElem = document.createElement("div");
    let img_container = document.createElement("div");
    div.appendChild(divElem);
    for(j=0;j<5;j++){
        let img = document.createElement("img");
    img.src = cards[i].image; 
    
    img_container.appendChild(img);
    
    img.setAttribute('style','margin-right: 5px;');
    }
    
    divElem.appendChild(img_container);
    

    let h3 = document.createElement("h3");
    h3.innerHTML =cards[i].frames;
    divElem.appendChild(h3);

    let p = document.createElement("p");
    p.innerHTML =cards[i].name;
    divElem.appendChild(p);
    h3.classList.add('section__cards__element__frase');
    p.classList.add('section__cards__element__name');
    divElem.classList.add('section__cards__element');
   
    divElem.setAttribute('style','width: 423px;  border-radius: 32px;background-color: black;')
    img_container.setAttribute('style','margin-top:54px;margin-left:50px;')
}

div.classList.add('section__cards__main');