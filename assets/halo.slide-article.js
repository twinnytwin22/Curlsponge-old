(() => {
    var halo = {
        init: () => {
            var block = $('[data-article-block]');

            block.each((index, element) => {
                var slider = $(element).find('.halo-row-carousel'),
                    sliderMobile = $(element).find('.halo-row-carousel--mobile'),
                    itemToShow = slider.data('item-to-show'),
                    itemDots = slider.data('item-dots'),
                    itemArrows = slider.data('item-arrows');

                if(slider.length > 0){
                    if(sliderMobile.length > 0){
                        if(!slider.hasClass('slick-initialized')){
                            slider.slick({
                                mobileFirst: true,
                                adaptiveHeight: true,
                                infinite: false,
                                vertical: false,
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="'+ window.accessibility.next_slide +'">' + window.slick.nextArrow + '</button>',
                                prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="'+ window.accessibility.previous_slide +'">' + window.slick.prevArrow + '</button>',
                                responsive: [
                                    {
                                        breakpoint: 1599,
                                        settings: {
                                            arrows: itemArrows,
                                            dots: itemDots,
                                            get slidesToShow() {
                                                if(itemToShow !== undefined && itemToShow !== null && itemToShow !== ''){
                                                    return this.slidesToShow = itemToShow;
                                                } else {
                                                    return this.slidesToShow = 1;
                                                }
                                            }
                                        }
                                    },
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            arrows: itemArrows,
                                            dots: itemDots,
                                            get slidesToShow() {
                                                if(itemToShow !== undefined && itemToShow !== null && itemToShow !== ''){
                                                    if(itemToShow == 5 || itemToShow == 6){
                                                        return this.slidesToShow = itemToShow - 1;
                                                    } else {
                                                        return this.slidesToShow = itemToShow;
                                                    }
                                                } else {
                                                    return this.slidesToShow = 1;
                                                }
                                            }
                                        }
                                    },
                                    {
                                        breakpoint: 767,
                                        settings: {
                                            slidesToShow: 3,
                                            slidesToScroll: 1
                                        }
                                    },
                                    {
                                        breakpoint: 550,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 1
                                        }
                                    }
                                ]
                            });
                        }
                    } else {
                        if (window.innerWidth >= 1025) {
                            if(!slider.hasClass('slick-initialized')){
                                slider.slick({
                                    mobileFirst: true,
                                    adaptiveHeight: true,
                                    infinite: false,
                                    vertical: false,
                                    arrows: false,
                                    dots: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="'+ window.accessibility.next_slide +'">' + window.slick.nextArrow + '</button>',
                                    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="'+ window.accessibility.previous_slide +'">' + window.slick.prevArrow + '</button>',
                                    responsive: [
                                        {
                                            breakpoint: 1599,
                                            settings: {
                                                arrows: itemArrows,
                                                dots: itemDots,
                                                get slidesToShow() {
                                                    if(itemToShow !== undefined && itemToShow !== null && itemToShow !== ''){
                                                        return this.slidesToShow = itemToShow;
                                                    } else {
                                                        return this.slidesToShow = 1;
                                                    }
                                                }
                                            }
                                        },
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                arrows: itemArrows,
                                                dots: itemDots,
                                                get slidesToShow() {
                                                    if(itemToShow !== undefined && itemToShow !== null && itemToShow !== ''){
                                                        if(itemToShow == 5 || itemToShow == 6){
                                                            return this.slidesToShow = itemToShow - 1;
                                                        } else {
                                                            return this.slidesToShow = itemToShow;
                                                        }
                                                    } else {
                                                        return this.slidesToShow = 1;
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                });
                            }
                        } else {
                            if(slider.hasClass('slick-initialized')){
                                slider.slick('unslick');
                            }
                        }
                    }
                } else if(sliderMobile.length > 0){
                    if (window.innerWidth < 1025) {
                        if(!sliderMobile.hasClass('slick-initialized')){
                            sliderMobile.slick({
                                mobileFirst: true,
                                adaptiveHeight: true,
                                infinite: false,
                                vertical: false,
                                arrows: false,
                                dots: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="'+ window.accessibility.next_slide +'">' + window.slick.nextArrow + '</button>',
                                prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="'+ window.accessibility.previous_slide +'">' + window.slick.prevArrow + '</button>',
                                responsive: [
                                {
                                    breakpoint: 767,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1
                                    }
                                },
                                {
                                    breakpoint: 550,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 1
                                    }
                                }]
                            });
                        }
                    } else {
                        if(sliderMobile.hasClass('slick-initialized')){
                            sliderMobile.slick('unslick');
                        }
                    }
                }
            });
        }
    }

    $(window).on('resize', () => {
        halo.init();
    });

    halo.init();
})();