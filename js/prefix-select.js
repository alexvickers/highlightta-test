$(document).ready(function () {
  const phonePrefixes = {
    BR: "+55",
    US: "+1",
    FR: "+33",
  };

  const $prefix = $("#prefix");
  const $error = $("#prefix-error");

  $("#country").on("change", function () {
    const countryCode = $(this).val();
    if (!countryCode) {
      $prefix.val("");
      return;
    }
    const prefix = phonePrefixes[countryCode] || "";
    $prefix.val(prefix);
    $error.addClass("d-none");
  });

  $prefix.on("input", function () {
    const value = $(this).val();
    const isValid = /^\+\d+$/.test(value);

    if (!isValid && value !== "") {
      $error.removeClass("d-none");
    } else {
      $error.addClass("d-none");
    }
  });
});
