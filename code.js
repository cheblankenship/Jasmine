function Card(point, suit){
    this.point = point;
    this.suit = suit;
}
// Card.prototype.show_the_card = function(){
//     console.log("The card point is " + this.point + " and the suit is " + this.suit);
// };

Card.prototype.getImageUrl = function(){
    var card_number = this.point;
    // Define three names as array 0, 1, 2
    var other_three = ['jack','queen','king'];
    // If the number is between 2-10
    if(this.point>=2 && this.point<=10){
        return 'images/' + this.point + '_of_' + this.suit + '.png';
    }
    if(this.point>=11 && this.point<=13){
        // other_three - 11 = 0 == 'jack'
        return 'images/' + other_three[this.point-11] + '_of_' + this.suit + '.png';
    }
    if(this.point == 1){
        return 'images/ace_of_' + this.suit + '.png';
    }

    return 'images/' + this.point +'_of_' + this.suit +'.png';
};

// call the my_card and show the card information
// var card = new Card(5, 'diamonds');
// console.log(card.getImageUrl());

function Hand(){
    this.cardsInHand = [];
}

Hand.prototype.addCard = function(point, suit) {
    var card = new Card(point, suit);
    return this.cardsInHand.push(card);
};

Hand.prototype.getPoints = function() {
    cards = this.cardsInHand.slice(0);
    cards.sort(function (a,b) {
    return b.point - a.point;
    });
    var sum = cards.reduce(function (a,b) {
       if (b.point > 10) {
         b.point = 10;
       }
       if (b.point === 1 && a < 11) {
         b.point = 11;
       }
       return a + b.point;
     }, 0);
     return sum;
};
