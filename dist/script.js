$(document).ready( () => {
  //Cache reference to window
  let $window = $(window);

  function check_if_in_view() {
    let window_height = $window.height();
    let window_top_position = $window.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $('.animate-element').each(function(index) {
      let $tile = $(this);
      let tile_height = $tile.outerHeight();
      let tile_top_position = $tile.offset().top;
      let tile_bottom_position = (tile_top_position + tile_height);

      //check to see if this current tile is within viewport
      if ((tile_bottom_position >= window_top_position) &&
          (tile_top_position <= window_bottom_position)) {
        $tile.addClass('in-view');
      } else {
        $tile.removeClass('in-view');
      }
    });
  }

  function add_animation_classes() {
    //assign animation class to technical skills
    $('#technical-skills li').each(function() {
      let $li = $(this);
      $li.addClass('animate-element bounce-up');
    })
                                   
    //assign animation class to project tiles
    $('.projSection').each((i, section) => {
      $(section).children('.project-tile').each((index, tile) => {
      //check if odd or even child and then slide either from left or right
        if (index % 2)
          $(tile).addClass('slide-right');
        else
          $(tile).addClass('slide-left');
      });
    });
  }
  
  add_animation_classes();
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});