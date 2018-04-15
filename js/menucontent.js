$(document).ready(function() {
  $("#myModal").modal("show");

  $(".modal").on("hidden.bs.modal", function() {
    window.location = "https://www.google.com/";
  });
});
