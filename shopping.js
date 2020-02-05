$('.multi-item-carousel').carousel({
        interval: false
});

$('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});


function sConsole(event) {
    event.preventDefault();
    var name = document.getElementById("data");
    console.log(name.value);
    var email = document.getElementById("email");
    console.log(email.value);
}


var itemCount = 0;
var priceTotal = 0;

// Add Item to Cart
$('.add-to-cart').click(function (){
    itemCount ++;

    $('#itemCount').text(itemCount).css('display', 'block');
    $(this).siblings().clone().appendTo('#cartItems');
    
    // Calculate Total Price
    var price = parseInt($(this).siblings().find('.price').text()); 
    priceTotal += price;
    $('#cartTotal').text("Total: $" + priceTotal);
}); 


// Hide and Show Cart Items
$('.openCloseCart').click(function(){
    $('#shoppingCart').toggle();
});

// Empty Cart
$('#emptyCart').click(function() {
    itemCount = 0;
    priceTotal = 0;

    $('#itemCount').css('display', 'none');
    $('#cartItems').text('');
    $('#cartTotal').text("Total: $" + priceTotal);
}); 