
window.addEventListener('load', function(){


   let Sticky = function(options) {
        let stickyEl = document.querySelector(options.stickyEl);
        let stickyStartEl = document.querySelector(options.stickyStartEl);
        let stickyEndEl = document.querySelector(options.stickyEndEl) || stickyStartEl; 
        let stickyCustomClass = options.stickyCustomClass;
        let stickyOffsetY = options.stickyOffsetY || 0;

        let stickyElHeight = stickyEl.getBoundingClientRect().height;
        let coordStickyStart = stickyStartEl.getBoundingClientRect().top;
        
        if (stickyStartEl === stickyEndEl) {
            coordStickyEnd = stickyStartEl.getBoundingClientRect().bottom;
        } else {
            coordStickyEnd = stickyEndEl.getBoundingClientRect().top;
        }

        
        stickyEl.classList.add('fixed');
        stickyEl.style.position = 'fixed';

        // Зона прокрутки
        if (coordStickyStart < 0 && (coordStickyEnd - stickyOffsetY - stickyElHeight) > 0) {
            stickyEl.style.top = stickyOffsetY + 'px';
            stickyEl.classList.add(stickyCustomClass);
        }
        // вище зони прокрутки
        if (coordStickyStart >  stickyOffsetY) {
            stickyEl.style.top = coordStickyStart  + 'px';
            stickyEl.classList.remove(stickyCustomClass);

        } 
        // нижче зони прокрутки
        if (coordStickyEnd - stickyElHeight  <  stickyOffsetY) {
            stickyEl.style.top = coordStickyEnd  - stickyElHeight  + 'px';
            stickyEl.classList.remove(stickyCustomClass);
        }
       
   };

   window.addEventListener('scroll', function() {
       let sticky1 = new Sticky({
            // селектор елемента, який має бути фіксований
            stickyEl: '.target__list',
            // селектор елемента, верхня координата якого є стартовою точкою для фіксації елементу
            stickyStartEl: '.start',
            
            // селектор елемента, верхня координата якого є кінцевою точкою для фіксації елементу
            // якщо не задавати, то кооридината береться з нижньої точки stickyStartEl
            // stickyEndEl: '.end',

            // кастомний клас при фіксації
            stickyCustomClass: 'some-class',
            // кастомний відступ від верхнього краю екрану, default - 0
            stickyOffsetY: 40
        });
    }); 
});  


/*
Обовязкові стилі: 
.fixed {
    position: fixed;
    top: valuepx;
    left: valuepx;
}
*/
