export class Slider{
    constructor(){
        this.prevBtn = document.getElementById('btn-prev');
        this.nextBtn = document.getElementById('btn-next');
        this.dots = document.querySelectorAll('.dot');
        this.slides = document.querySelectorAll('.slide');
        this.slides.forEach(el =>{         
        el.addEventListener('touchstart', this.handleTouchStart);
        el.addEventListener('touchmove', this.handleTouchMove);})
        
        this.index = 0;
        
        this.x1 = null;
        this.y1 = null;

        this.clickOnDots = this.clickOnDots();
        this.slider = this.slider();

        this.nextBtn.addEventListener('click', this.nextSlide);
        this.prevBtn.addEventListener('click', this.prevSlide);
        };

    clickOnDots(){
        this.dots.forEach((item, indexDot) => {
            item.addEventListener('click', () => {
                this.index = indexDot;
                this.prepareCurrentSlide(this.index);
            });
        });
    }

    prevSlide = () => {
        if(this.index === 0) {
            this.index = this.slides.length - 1;
            this.prepareCurrentSlide(this.index);
        } else {
            this.index--;
            this.prepareCurrentSlide(this.index);
        };
    };

    nextSlide = () =>{
        if(this.index === this.slides.length - 1) {
            this.index = 0;
            this.prepareCurrentSlide(this.index);
        } else {
            this.index++;
            this.prepareCurrentSlide(this.index);
        };
    }

    prepareCurrentSlide=(ind) =>{
        this.activeSlide(ind);
        this.activeDot(ind);
    }

    activeSlide = (el) => {
        for(let slide of this.slides) {
            slide.classList.remove('active');

        };
        this.slides[el].classList.add('active');
    }

    activeDot = (el) => {
        for(let dot of this.dots) {
            dot.classList.remove('active');
        };
        this.dots[el].classList.add('active');
    };
    
    slider() {
        setInterval(this.nextSlide, 5000);
    };

    handleTouchStart = (event) => {
        const firstTouch = event.touches[0];
        this.x1 = firstTouch.clientX;
        this.y1 = firstTouch.clientY;
    };

    handleTouchMove = (event) => {
        if(!this.x1 || !this.y1){
        return false;
    };
        let x2 =  event.touches[0].clientX;
        let y2 =  event.touches[0].clientY;

        let xDiff = x2 - this.x1;
        let yDiff = y2 - this.y1;

        if(Math.abs(xDiff) > Math.abs(yDiff)){

        if(xDiff > 0 ) {
            this.prevSlide();
        }
        else {
        this.nextSlide();
        }
    }
    this.x1 = null;
    this.y1 = null;
    };
}
