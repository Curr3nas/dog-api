function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').empty();
  responseJson.message.forEach(element => {
    $('.results').append(`<img src="${element}" class="results-img">`);
    //display the results section
    $('.results').removeClass('hidden');});
}


function watchForm() {
  $('form').on('submit', event => {
    event.preventDefault();
    getDogImage($('.js-how-many').val());
    $('.js-how-many').val(3);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});