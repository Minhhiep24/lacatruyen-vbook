function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("h1.title").text(),
            author: doc.select(".author a").text(),
            description: doc.select(".description").html(),
            cover: doc.select(".book-info img").attr("src"),
            host: "https://lacatruyen.com",
            ongoing: doc.text().indexOf("Đang ra") >= 0
        });
    }
    return Response.error("Không thể tải thông tin truyện");
}