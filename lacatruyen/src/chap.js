function execute(url) {

  var response = fetch(url);
  var doc = response.html();

  var content = doc.select(".chapter-content").html();

  content = Html.clean(content, ["p", "br"]);

  return Response.success(content);
}