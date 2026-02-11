function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let content = doc.select(".chapter-content").html();
        // Dùng Html.clean để lọc bỏ quảng cáo, chỉ giữ lại thẻ div, p
        content = Html.clean(content, ["div", "p", "br"]);
        return Response.success(content);
    }
    return Response.error("Lỗi tải nội dung");
}