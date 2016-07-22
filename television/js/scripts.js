$(function() {
  
  $("#show-title").keypress(function(e) {
    if (e.which === 13) {
      updateShows();
    }    
  });
  
  function updateShows() {
    
    var baseUrl = "http://api.tvmaze.com/search/shows?q=";
    var query = $("#show-title").val();
    
    $.getJSON(baseUrl + query, function(showData) {
      
      // for (var i = 0; i < showData.length; i++) {
      //   var show = showData[i];        
      // }
      
      var $showContainer = $("#show-container");      
      $showContainer.html("");
      
      var $castContainer = $("#cast-container");      
      $castContainer.html("");
      
      showData.forEach(function(show) {
                
        show = show.show;
        
        var title = "<p class=title>" + show.name + "</p>";        
        
        var castLink = "<p class=cast-link><a href='#' onclick=updateCast(" + show.id + ")>Cast</a></p>";
        
        var summary = show.summary;
        
        // ternary operator
        var rating = show.rating.average ? show.rating.average : "Not Yet Rated";
        
        rating = "<p class=rating>Rating: " + rating + "<p>";
        
        var imgSrc = show.image.medium;                
        var img = "<img src=" + imgSrc + " alt='" + title + "' />";        
        
        var startRow = "<div class=row><div class='col-md-12 text-center'>";
        var endRow = "</div></div>";        
        
        $showContainer.append(startRow + title + castLink + summary + img + rating + "<div class=hr>" + endRow); 
      });
      
      
    });
    
  }
  
  
});

function updateCast(id) {
  var castLink = "http://api.tvmaze.com/shows/" + id + "/cast";
  
  var $castContainer = $("#cast-container");
  
  $castContainer.html("");
  
  $.getJSON(castLink, function(castData) {
    
    if (castData.length > 0) {
      
      castData.forEach(function(cast) {
        
        var personName = cast.person.name;
        var characterName = cast.character.name;
        
        var person = personName + " as " + characterName;
        
        var personImg = "<img src=" + cast.person.image.medium + " alt=" + personName + " />";
        
        var characterImg = "<img src=" + cast.character.image.medium + " alt=" + characterName + " />";
        
        $castContainer.append(person + personImg + characterImg);
        
      });
    } else {
      $castContainer.append("No cast data at this time");
    }
    
    
    
    
    
    
  });    
  
}