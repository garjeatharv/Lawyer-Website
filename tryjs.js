

// //Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

function al(){
    alert("this");
}

$(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#toTopBtn').fadeIn();
    } else {
    $('#toTopBtn').fadeOut();
    }
    });
    
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 1000);
    return false;
    });
  

    $('#btnbook').click(function()
    {
        $('alert').show('fade');
    });
});