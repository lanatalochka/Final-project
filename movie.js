document.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.querySelector('.button');
    var movieImage = document.querySelector('.image-container');
    var pictures = [
      'Movies/1.jpg',
      'Movies/3.jpg',
      'Movies/4.jpg',
      'Movies/5.jpg',
      'Movies/6.jpg',
      'Movies/7.jpg',
      'Movies/8.jpg',
      'Movies/9.jpg',
      'Movies/10.jpg',
      'Movies/11.jpg',
      'Movies/12.jpg',
      'Movies/13.jpg',
      'Movies/14.jpg',
      'Movies/15.jpg',
      'Movies/16.jpg',
      'Movies/17.jpg',
      'Movies/18.jpg',

    ];
  
    generateBtn.addEventListener('click', function() {
      var randomIndex = Math.floor(Math.random() * pictures.length);
      var randomPicture = pictures[randomIndex];
      movieImage.querySelector('img').src = randomPicture;
    });
  });
  