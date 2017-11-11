slider = new Slider({
  images: [
    "slide_img_1.jpg",
    "slide_img_2.jpg",
    "slide_img_3.jpg"
  ],
  path: './img/',
  targetId: 'slider'
});
slider.initialize();

slider2 = new Slider({
  images: [
    "slide_img_2.jpg",
    "slide_img_3.jpg",
    "slide_img_1.jpg"
  ],
  path: './img/',
  targetId: 'slider2'
});
slider2.initialize();
