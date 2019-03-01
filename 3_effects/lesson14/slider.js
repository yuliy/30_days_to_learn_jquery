
$(function() {
    var sliderUL =  $('div.slider').css('overflow', 'hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs.first().width(), // 150
        imgsLen = imgs.length,   // 4
        current = 1,
        totalImgsWidth = imgWidth * imgsLen; // 600

    $('#slider-nav').show().find('button').on('click', function() {
        var $this = $(this);
        var direction = $this.data('dir'),
            loc = imgWidth; // 150

        // update current value
        (direction === 'next') ? ++current : --current;

        // if first image
        if (current === 0) {
            current = imgsLen;
            loc = totalImgsWidth - imgWidth;
            direction = 'next';
        } else if (current - 1 === imgsLen) { // Are we at the end?
            current = 1;
            loc = 0;
        }

        transition(sliderUL, loc, direction);
    });

    function transition(container, loc, direction) {
        console.log(container);
        console.log(loc);
        console.log(direction);
        var unit; // -= +=

        if (direction && loc !== 0) {
            unit = (direction === 'next') ? '-=' : '+=';
        }

        container.animate({
            'margin-left': unit ? (unit + loc) : loc,
        })
    }

});

