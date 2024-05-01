# Workshop_3_

Workshop 3
Goal: how to load, how to manipulate with code, and how to make Computational interventions with pixels

Create file- new folder (name:images) - drag images into folder- create variable

Let img;
function preload(){
img= loadImage( ‘image/ name of image’)


Function draw
…..
image(img,0,0,); 

To resize Image:
Under Function setup
img.resize(xxx,xxx);
*if want proportion, make one variable 0 e.g. 300,0

To relocate the image
Under function draw
image(img, width/x, height/ x, xxx, xxx);
*this way the image will display from the center of the canvas
*if want to place the image in the center of the canvas:
imageMode(CENTER);
image(img, width/x, height/ x, xxx, xxx);

Add filter:
Under function draw, after displaying the image at wanted location.

…….
: filter ()
GRAY
INVERT
BLUR, xxx( how blurry u want)
POSTERIZE, xxx

Or 
: tint (xxx, xxx, xxx); 
RGB value
———————-
Array

let nums = [0️⃣a, 1️⃣b, 2️⃣c, 3️⃣d, 4️⃣e];   
Can use nums[0️⃣] to represent a

Arrays

pixels (stored in an array)
Pixels[R,G,B, A…..]

To find the values of a given pixel on the screen:
(X value+ y Baur * width) *4

URL: https://taropie3sui.github.io/Workshop_3/
