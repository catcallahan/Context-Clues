var friends = ['Billy', 'Bobby', 'Carter', 'Jill', 'Norton'];
var locations = ['Kitchen', 'Upstairs Bathroom', 'Master Bedroom', 'Pool House', 'Linen Closet', 'Basement', 'Backyard', 'Nursery', 'Cellar', 'Cupboard'];
var weapons = ['stapler', 'solo cup', 'doilly', 'butcher knife', 'wooden spoon', 'keyboard', 'laptop', 'cell phone charger', 'screwdriver', 'mousepad', 'throw pillow', 'lamp', 'toothbrush', 'fridge', 'mason jar', 'lawn mower', 'shovel', 'ps4 controller', 'remote'];

for (i = 0; i < 100; i++) {
    var header = $('<h3 class= "accusation"> Accusation ' + (i + 1) + '</h3>');
    $('body').append(header);
    header.click(accuClick(i));
    
}
        function accuClick(index) {
            return function () {
                var name = friends[index % friends.length];
                var place = locations[index % locations.length];
                var thing = weapons[index % weapons.length];
                alert('I think it was ' + name + ', in the ' + place + ' with the ' + thing + '!')
            }
        }
