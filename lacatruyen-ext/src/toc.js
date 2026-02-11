function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let list = [];
        // LacaTruyen thường liệt kê chương trong class .list-chapter
        doc.select(".list-chapter li a").forEach(e => {
            list.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://lacatruyen.com"
            });
        });
        return Response.success(list);
    }
    return Response.error("Không thể tải danh sách chương");
}