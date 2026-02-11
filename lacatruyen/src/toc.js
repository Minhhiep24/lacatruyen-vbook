function execute(url) {

  var response = fetch(url);
  var doc = response.html();

  var list = [];

  doc.select(".list-chapter a").forEach(e => {
    list.push({
      name: e.text(),
      url: e.attr("href"),
      host: "https://lacatruyen.com"
    });
  });

  return Response.success(list);
}