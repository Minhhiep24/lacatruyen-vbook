function execute(key, page) {

  var res = fetch("https://lacatruyen.com/api/stories/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Origin": "https://lacatruyen.com",
      "Referer": "https://lacatruyen.com/search?s=" + encodeURIComponent(key)
    },
    body: JSON.stringify({
      search: key
    })
  });

  if (!res.ok) {
    return Response.error("Search API failed: " + res.status);
  }

  var json = res.json();

  var result = [];

  if (json && json.data) {
    json.data.forEach(function(item) {
      result.push({
        name: item.title,
        link: "https://lacatruyen.com/truyen/" + item.slug,
        host: "https://lacatruyen.com",
        cover: "https://lacatruyen.com/storage/" + item.image,
        description: item.description
      });
    });
  }

  return Response.success(result);
}