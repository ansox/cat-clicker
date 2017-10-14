var model = {
  init: function() {
    this.catList = [
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
  },

  getCatList: function() {
    return this.catList;
  }
}

  var octopus = {
    init: function() {
      model.init();

      viewContent.init();    
      
      octopus.setSelected(octopus.getCatList()[0]);
      
      viewMenu.init();
    },

    getCatList() {
      return model.getCatList();
    },

    setSelected: function(cat) {
      this.selected = cat;
      viewContent.render();
    },

    getSelected: function() {
      return this.selected;
    },

    addClickCounter: function() {
      this.selected.counter++;
    }
  }

var viewMenu = {
  init: function() {
    this.catListEl = document.getElementById('cat-list');
    viewMenu.render();
  },

  render: function() {
    var getNodeItem = function(item, index) {
      var link = document.createElement('A');
      link.setAttribute('href', '#');
      link.setAttribute('class', 'collection-item');
      
      var textNode = document.createTextNode(item.name);
      
      link.appendChild(textNode);
      
      link.addEventListener('click', function() {
        octopus.setSelected(item);
      })

      return link;
    }

    var list = octopus.getCatList();

    for (var i = 0; i < list.length; i++) {
      this.catListEl.appendChild(getNodeItem(list[i], i));
    }
  }
}

var viewContent = {
  init: function() {
    this.catName = document.getElementById('cat-name');
    this.catImage = document.getElementById('cat-image');
    this.catCounter = document.getElementById('cat-counter');

    this.catImage.addEventListener('click', function() {
      octopus.addClickCounter();
      viewContent.render();
    });
    
    viewContent.render;
  },

  render: function() {
    var item = octopus.getSelected();

    this.catName.innerText = item.name;
    this.catImage.setAttribute('src', item.image);
    this.catCounter.innerText = item.counter;
  }
}

octopus.init();