useShallow: hàm so sánh shallow equality (so sánh từng key của object). Nếu bất kỳ thay đổi nào trong các giá trị, component sẽ render lại.
    + truyền toàn bộ hoặc các thuộc tính bạn muốn lấy state trong store.
    + Select tạo ra các đối tượng mới với các thuộc tính.
useStoreWithEqualityFn: chỉ re-render khi giá trị count thực sự thay đổi(tối ưu hoá việc re-render)
    + store: Nguồn dữ liệu
    + select: chọn đúng phần state muốn lấy
    + function quality : hàm so sánh value cũ và value mới (===)

useStore: viết state và select rõ ràng hơn