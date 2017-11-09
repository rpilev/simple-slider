/**
 * Simple Slider Plugin
 * Author: Raul Špilev
 * License: MIT
 */

(function() {
  this.Slider = function() {
    var defaults = {
      path: './',
      images: [],
      targetId: 'slider'
    }
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  Slider.prototype.initialize = function() {

    this.current_index = this.options.images.length - 1;

    setUpStructure.call(this);

    document.getElementsByClassName("arrow-container-left")[0].addEventListener('click', function () {
      navigateSlider.call(this, 'previous');
    }.bind(this));
    document.getElementsByClassName("arrow-container-right")[0].addEventListener('click', function () {
      navigateSlider.call(this, 'next');
    }.bind(this));

    loadImages.call(this);
  };

  function setUpStructure() {
    document.getElementById(this.options.targetId).className = 'slider';
    document.getElementById(this.options.targetId).innerHTML = 
      '\
      <div class="slider-img-container">\
        <div class="slider-loader">Loading...</div>\
          <span class="arrow-container arrow-container-left">\
            <span class="arrow-left"></span>\
          </span>\
          <span class="arrow-container arrow-container-right">\
            <span class="arrow-right"></span>\
          </span>\
      </div>\
      ';
  }

  function loadImg(index, display){

    var img = document.createElement("img");
    img.src = this.options.path + this.options.images[index];
    img.className = "slider-img";
    img.dataset.index = index;
    if(display == 'hide'){
      img.style.display = 'none';
      img.style.opacity = '0';
    }

    document.getElementsByClassName('slider-img-container')[0].appendChild(img);

    //when the first image is loaded remove the loader overlay
    if(index === 0){
      img.onload = function() { 
        document.getElementsByClassName('slider-loader')[0].style.opacity = '0';    
      }
    }
  }

  function loadImages() {
    for(var i = 0; i < this.options.images.length; i++) {
      if(i == this.options.images.length-1){
        loadImg.call(this, i, 'show');
      }else{
        loadImg.call(this, i, 'hide');
      }
    }

  }

  function navigateSlider(direction) {
    var new_index;

    if(direction === 'next'){
      if(this.current_index === this.options.images.length-1){
        new_index = 0;
      }else{
        new_index = this.current_index + 1;
      }
    }else if (direction === 'previous') {
      if(this.current_index == 0){
        new_index = this.options.images.length-1;
      }else{
        new_index = this.current_index- 1;
      }
    }

    document.querySelectorAll('[data-index="'+this.current_index+'"]')[0].style.opacity = '0';

    var all_images = document.getElementsByClassName('slider-img');

    setTimeout(function() { 
      Array.prototype.forEach.call(all_images, function(image) {
        image.style.display = 'none';
      });
      document.querySelectorAll('[data-index="'+new_index+'"]')[0].style.display = 'block';
    }, 500);
     setTimeout(function() { 
      document.querySelectorAll('[data-index="'+new_index+'"]')[0].style.opacity = '1';
    }, 550); 

    this.current_index = new_index;
  }

}())