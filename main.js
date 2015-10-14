(function(){

$(document).ready(function(){
    // Toggle the section content 
    $('#about-text').hide();
    $('.about-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#about-text').fadeToggle('slow');
    });
    
    $('#examples-text').hide();
    $('.examples-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#examples-text').fadeToggle();
    }); 
    
    $('#what-i-do-text').hide();
    $('.what-i-do-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#what-i-do-text').fadeToggle();
    }); 
    
    $('#data-extra-text').hide();
    $('.data-section').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#data-extra-text').fadeToggle();
    }); 

    $('#teach-drum-building').hide();
    $('.teach-drum-building').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#teach-drum-building').fadeToggle();
    }); 

    $('#drum-building-workshop').hide();
    $('.drum-building-workshop').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#drum-building-workshop').fadeToggle();
    }); 

});

})();