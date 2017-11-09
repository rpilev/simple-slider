# simple-slider
A simple slider plugin for javascript with an example template included

## Usage
Include slider.js and slider.css to your project

Create a new instance and set the appropriate options

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
    
## Options

* images - an array containing the file names of the images to be shown by the slider
* path - the path to the images
* targetId - the id of the HTML element to contain the slider

## Live example

A live preview of this project is available at:
[http://simple-slider.surge.sh/](http://simple-slider.surge.sh/)
