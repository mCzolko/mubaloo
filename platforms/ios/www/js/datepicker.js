function showDatepicker() {

  $('#currentDatetime').blur();

  var options = {
    date: new Date(),
    mode: 'datetime'
  };

  window.datePicker.show(options, function(date) {
    $('#currentDatetime').val(date.toDateString() + " " + date.toLocaleTimeString());
    $('#currentDatetime').change();
  });

}

function datePickerInit() {
  $('#currentDatetime').focus(showDatepicker);
}