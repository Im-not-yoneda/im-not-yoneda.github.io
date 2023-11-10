// loading画面
window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};

// slick-slider
$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  dots: false,
  arrows: true,
  infinite: true,
  responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
});