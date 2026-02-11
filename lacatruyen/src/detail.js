function execute(url) {

  var browser = Engine.newBrowser();
  browser.setUserAgent(UserAgent.android());
  browser.launch(url, 10000);

  var doc = browser.html();

  var name = doc.select("h1").first().text();
  var cover = doc.select("img").first().attr("src");
  var description = doc.select("meta[name=description]").attr("content");

  browser.close();

  return Response.success({
    name: name,
    cover: cover,
    host: "https://lacatruyen.com",
    description: description,
    ongoing: true
  });
}