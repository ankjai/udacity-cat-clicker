var cat1 = {
    "name": "Xuxa",
    "imgLoc": "./images/xuxa_cat.jpg",
    "counter": 0
};

var cat2 = {
    "name": "Chewie",
    "imgLoc": "./images/chewie_cat.jpg",
    "counter": 0
};

var cat3 = {
    "name": "Conjunctivitis",
    "imgLoc": "./images/cat-conjunctivitis-causes.jpg",
    "counter": 0
};

var cat4 = {
    "name": "Cutie",
    "imgLoc": "./images/cute-little-cat.jpg",
    "counter": 0
};

var cat5 = {
    "name": "Jetske",
    "imgLoc": "./images/jetske.jpg",
    "counter": 0
};

var cats = [cat1, cat2, cat3, cat4, cat5];
var catName;

function displayCat() {
    var catImg;
    var catCounter;
    catName = $('#selectCat').val();

    console.log('cat selected:' + catName);

    for (var cat in cats) {
        if (catName === cats[cat].name) {
            catImg = cats[cat].imgLoc;
            catCounter = cats[cat].counter;
            break;
        } else {
            catImg = "";
            catCounter = 0;
        };
    }

    // display cat
    $('#catImg').attr('src', catImg);
    $('#clickCounter').text(catCounter);
};

function incCounter() {
    // body...
    console.log('Cat being clicked:' + catName);

    for (var cat in cats) {
        if (catName === cats[cat].name) {
            cats[cat].counter++;
            $('#clickCounter').text(cats[cat].counter);
            break;
        };
    }
};
