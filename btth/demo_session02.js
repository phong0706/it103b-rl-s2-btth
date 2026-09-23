const bookingId = "GRB-99887";
let distanceKm = 5.0; // Đổi giá trị thành 1.5, 5.0, hoặc -3 để thử các Test Case
let isPeakHour = true;

// 1. Kiểm tra điều kiện dữ liệu hợp lệ đầu tiên
if (distanceKm <= 0) {
    console.log("Khoảng cách không hợp lệ");
} else {
    let totalFare = 0;

    // 2. Phân loại cước cơ bản
    if (distanceKm <= 2) {
        totalFare = 12000;
    } else {
        totalFare = 12000 + (distanceKm - 2) * 4500;
    }

    // 3. Áp dụng phụ phí giờ cao điểm
    if (isPeakHour === true) {
        totalFare = totalFare * 1.2;
    }

    // Làm tròn số nguyên theo yêu cầu
    totalFare = Math.round(totalFare);

    // 4. Xuất hóa đơn chi tiết ra console
    console.log("--- HÓA ĐƠN GRABBIKE ---");
    console.log("Mã cuốc xe:", bookingId);
    console.log("Quãng đường:", distanceKm, "km");
    console.log("Giờ cao điểm:", isPeakHour ? "Có" : "Không");
    console.log("Tổng cước:", totalFare.toLocaleString('vi-VN'), "VNĐ");
}