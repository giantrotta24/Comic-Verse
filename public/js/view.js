/* eslint-disable no-console */
// eslint-disable-next-line no-undef
$(document).ready(() => {

  $.getJSON("comicverse.herokuapp.com/api/heroes", (results) => {
    console.log(results);
    const randIndex = Math.floor(Math.random() * results.length);
    console.log(randIndex);
  });

});
