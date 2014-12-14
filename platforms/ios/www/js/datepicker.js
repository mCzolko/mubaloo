function showDatepicker() {

  var options = {
    date: new Date(),
    mode: 'datetime'
  };

  window.datePicker.show(options, function(date) {
    $('#currentDatetime').val(date.toDateString() + " " + date.toLocaleTimeString());
  });

}

document.addEventListener('deviceready', function () {

  $('#currentDatetime').focus(showDatepicker);
  $('#currentDatetime').click(showDatepicker);

}, false);