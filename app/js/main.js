$(document).on('ready', function() {
      $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });      
    $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
      });
      $(".center-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
    
    

    $('.float-content__catalog_item').equalHeights();
    $('.float-content__catalog_item_t').equalHeights();
    
    
    });
