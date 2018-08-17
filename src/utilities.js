/* 
This function allows only numbers without decimal to be entered in input box
evt - Keyboard event */
export function isNumber(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (
    (charCode > 31 && (charCode < 48 || charCode > 57)) ||
    charCode === 46
  )
    evt.preventDefault();
}