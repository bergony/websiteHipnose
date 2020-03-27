$(function() {

  $("#search").on("click", function() {
    var searchTerm = $("#searchTerm").val();
    var url = "https://www.google.com/search?q="+
    searchTerm
    +"&rlz=1C1GCEA_enBR855BR855&oq=dota&aqs=chrome..69i57j46j0l4j46j0.542j0j7&sourceid=chrome&ie=UTF-8";

    $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",

      async: false,
      dataType: "json",
    data: function(data, status, jqXHR){
        console.log(data);
      },
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });
});