(function(){

$(document).ready(function(){
    $('.nav li a').on('click', function(){
    // $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});

    // Toggle the section content
    
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

    $('#rhythmic-foundations').hide();
    $('.rhythmic-foundations').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#rhythmic-foundations').fadeToggle();
    });

    $('#advanced-rhythmic-foundations').hide();
    $('.advanced-rhythmic-foundations').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#advanced-rhythmic-foundations').fadeToggle();
    });   

    $('#digital-readers-theatre').hide();
    $('.digital-readers-theatre').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#digital-readers-theatre').fadeToggle();
    });
    
    $('#drum-circle-event').hide();
    $('.drum-circle-event').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#drum-circle-event').fadeToggle();
    });

    $('#after-school-enrich').hide();
    $('.after-school-enrich').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#after-school-enrich').fadeToggle();
    });

    $('#rhythmic-foundations-instructors').hide();
    $('.rhythmic-foundations-instructors').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#rhythmic-foundations-instructors').fadeToggle();
    });
    // refactor to 1 function for all fadetoggles

});

})();