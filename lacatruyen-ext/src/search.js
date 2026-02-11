function execute(key, page) {
    page = page || '1';
    // Link search của lacatruyen (ví dụ: ?s=ten-truyen&page=1)
    let url = "https://lacatruyen.com/search?q=" + key + "&page=" + page;
    
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        
        doc.select(".list-stories .story-item").forEach(e => {
            data.push({
                name: e.select(".title").text(),
                link: e.select("a").attr("href"),
                cover: e.select("img").attr("src"),
                description: e.select(".author").text(),
                host: "https://lacatruyen.com"
            });
        });
        
        let next = (parseInt(page) + 1).toString();
        return Response.success(data, next);
    }
    return null;
}