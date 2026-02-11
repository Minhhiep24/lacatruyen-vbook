function execute(url) {
    url = url.replace("http://", "https://");
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let list = [];
        // Lấy danh sách chương trong thẻ li a
        let listItems = doc.select(".list-chapter li a");
        
        listItems.forEach(e => {
            list.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://lacatruyen.com"
            });
        });
        
        return Response.success(list);
    }
    return null;
}