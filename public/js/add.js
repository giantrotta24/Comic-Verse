/* eslint-disable no-undef */
// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function (event) {
  event.preventDefault();
  // make a newCharacter obj
  let newCharacter = {
    // name from name input
    name: $("#name").val().
      trim(),
    // role from role input
    secretIdentity: $("#secretIdentity").val().
      trim(),
    // age from age input
    earlyLife: $("#earlyLife").val().
      trim(),
    // points from force-points input
    currentHistory: $("#currentHistory").val().
      trim(),
    personalLife: $("#personalLife").val().
      trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/heroes", newCharacter).
    // on success, run this callback
    then((data) => {
      // log the data we found
      // eslint-disable-next-line no-console
      console.log(data);
      // tell the user we're adding a character with an alert window
      // eslint-disable-next-line no-alert
      alert("Adding character...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#secretIdentity").val("");
  $("#earlyLife").val("");
  $("#currentHistory").val("");
  $("#personalLife").val("");

});
