function execute(url) {
    url = url.replace("http://", "https://");
    let response = fetch(url);
    
    if (response.ok) {
        let doc = response.html();
        
        // Xóa các thành phần không cần thiết (quảng cáo, script)
        doc.select("script, style, .ads").remove();
        
        // Lấy nội dung chính từ thẻ .chapter-content
        let content = doc.select(".chapter-content").html();
        
        if (content) {
            // Làm sạch HTML, chỉ giữ lại thẻ xuống dòng
            content = Html.clean(content, ["p", "br", "div"]);
            return Response.success(content);
        }
    }
    return Response.error("Không thể tải nội dung chương");
}