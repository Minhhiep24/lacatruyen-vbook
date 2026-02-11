function execute(url) {
    url = url.replace("http://", "https://");
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        
        // Selector cho lacatruyen.com
        let name = doc.select("h1.title").text();
        let cover = doc.select(".book-info img").attr("src");
        let author = doc.select(".author a").text();
        let description = doc.select(".description").html();
        
        // Trạng thái truyện
        let status = doc.text().indexOf("Đang ra") !== -1;

        return Response.success({
            name: name,
            cover: cover,
            host: "https://lacatruyen.com",
            author: author,
            description: description,
            ongoing: status
        });
    }
    return null;
}