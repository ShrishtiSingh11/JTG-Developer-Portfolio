
const carousel=document.querySelector(".carousel");
const cards=document.querySelectorAll(".review-card");
const dots=document.querySelectorAll(".dot");

dots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        carousel.scrollTo({
            left: cards[index].offsetLeft-cards[0].offsetLeft,
            behavior: "smooth"
        });
    });
});

carousel.addEventListener("scroll",()=>{
    let activeIndex=0;

    cards.forEach((card,index)=>{
        const cardPosition=card.offsetLeft-cards[0].offsetLeft;

        if (cardPosition<=carousel.scrollLeft+30) {
            activeIndex=index;
        }
    });

    dots.forEach((dot,index)=>{
        dot.classList.toggle("active",index===activeIndex);
    });
});
