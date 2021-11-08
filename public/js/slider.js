const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
        new Glider(slider, {
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,
            dots: false,
            duration: 5.5,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                }
            ]
        });
    });
