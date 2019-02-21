// when user hits the search-btn
$("#search-btn").on("click", function() {
  let searchedCharacter = $("#character-search")
    .val()
    .trim();

  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  $.get("/api/" + searchedCharacter, function(data) {
    console.log(data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").append("<h2> The force is not strong with this one. Your character was not found. </h2>");
    }
    else {
      $("#well-section").append("<h2>" + data.name + "</h2>");
      $("#well-section").append("<h3>Secret Identity: " + data.secretIdentity + "</h3>");
      $("#well-section").append("<h3>Early Life: " + data.earlyLife + "</h3>");
      $("#well-section").append("<h3>Current History: " + data.currentHistory + "</h3>");
      $("#well-section").append("<h3>Personal Life: " + data.personalLife + "</h3>");
    }
  });
});
