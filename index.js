function slider_chay() {
    var images = document.querySelectorAll("#slideshow img");
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Đảm bảo các hình ảnh được ẩn ban đầu (display: none)
    images.forEach(function (img) {
        img.style.display = "none";
    });

    var currentImageIndex = 0;

    // Tự động chuyển đổi hình ảnh mỗi 3 giây
    function nextImage() {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }

    // Xử lý sự kiện click cho nút Next
    nextBtn.addEventListener('click', () => {
        nextImage();
    });

    // Xử lý sự kiện click cho nút Previous
    prevBtn.addEventListener('click', () => {
        if (currentImageIndex === 0) {
            currentImageIndex = images.length - 1;
        } else {
            currentImageIndex--;
        }
        images[currentImageIndex].style.display = "block";
    });

    setInterval(nextImage, 6000); // Chuyển đổi hình ảnh sau mỗi 6 giây
}

slider_chay();