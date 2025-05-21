$(document).ready(function () {
  const $email = $("#email");
  const $error = $("#email-error");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  $email.on("input", function () {
    const value = $(this).val();
    if (value && !isValidEmail(value)) {
      $error.removeClass("d-none");
    } else {
      $error.addClass("d-none");
    }
  });
});
