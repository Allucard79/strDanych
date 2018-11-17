'use strict';

var data = [{
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
    },
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
    },
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
    },
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
    },
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
    },
];

var boxes = document.querySelectorAll('.box'); //znajdujemy wszystkie boxy
// petla ktora umieszcza dane z tablicy w boxach
for (var i = 0; i < boxes.length; i++) { 
    var headerTitle = boxes[i].querySelector('header');
    headerTitle.innerHTML = data[i].title;
    var boxContent = boxes[i].querySelector('p');
    boxContent.innerHTML = data[i].content;
// petla ktora dodaje klasy do boxow    
    for (var l = 0; l < data[i].categories.length; l++) {
        headerTitle.parentElement.classList.toggle(data[i].categories[l]);
    }
}
