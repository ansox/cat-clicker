catList = [
    {
      name: 'Gato 1',
      image: 'assets/images/cat.jpg',
      counter: 0
    }, 
  
    {
      name: 'Gato 2',
      image: 'assets/images/cat2.jpg',
      counter: 0
    },
  
    {
      name: 'Gato 3',
      image: 'assets/images/cat3.jpg',
      counter: 0
    },
  
    {
      name: 'Gato 4',
      image: 'assets/images/cat4.jpg',
      counter: 0
    },
  
    {
      name: 'Gato 5',
      image: 'assets/images/cat5.jpg',
      counter: 0
    }
  ];
  
  var selected;
  
  var onCounterClick = function() {
    var catCounter = document.getElementById('cat-counter');
  
    catCounter.innerText = ++selected.counter;
  }
  
  var catSelected = function(item) {
    var catName = document.getElementById('cat-name');
    var catImage = document.getElementById('cat-image');
    var catCounter = document.getElementById('cat-counter');
  
    catName.innerText = item.name;
    catImage.setAttribute('src', item.image);
    catCounter.innerText = item.counter;
  
    selected = item;
  
    catImage.removeEventListener('click', onCounterClick);
  
    catImage.addEventListener('click', onCounterClick);
  }
  
  var getNodeItem = function(item, index) {
    var link = document.createElement('A');
    link.setAttribute('href', '#');
    link.setAttribute('class', 'collection-item');
  
    var textNode = document.createTextNode(item.name);
   
    link.appendChild(textNode);
  
    link.addEventListener('click', function() {
      catSelected(item);
    })
  
    return link;
  } 
  
  var catListEl = document.getElementById('cat-list');
  
  for (var i = 0; i < catList.length; i++) {
    catListEl.appendChild(getNodeItem(catList[i], i));
  }
  
  catSelected(catList[0]);