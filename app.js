var friends = ['Billy', 'Bobby', 'Carter', 'Jill', 'Norton'];
var locations = ['Kitchen', 'Upstairs Bathroom', 'Master Bedroom', 'Pool House', 'Linen Closet', 'Basement', 'Backyard', 'Nursery', 'Cellar', 'Cupboard'];
var weapons = ['stapler', 'solo cup', 'doilly', 'butcher knife', 'wooden spoon', 'keyboard', 'laptop', 'cell phone charger', 'screwdriver', 'mousepad', 'throw pillow', 'lamp', 'toothbrush', 'fridge', 'mason jar', 'lawn mower', 'shovel', 'ps4 controller', 'remote'];

for (var i = 0; i < 100; i++) {
    var h3 = $('<h3> Accusation ' + (i + 1) + '</h3>');
    $('body').append(h3)
    var alertClick = clickedH3(i);
    h3.click(alertClick);
}


function clickedH3() {
    return function () {
        var name = Math.floor(Math.random() * friends.length);
        var place = Math.floor(Math.random() * locations.length);
        var thing = Math.floor(Math.random() * weapons.length);
        alert("I accuse " + friends[name] + " in the " + locations[place] + ' with the ' + weapons[thing])

    }
}