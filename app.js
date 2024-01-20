
// document.querySelector('button').addEventListener('click', ()=> {
//     alert()
// })
// $('button').click(()=> {
//     alert('i am function from JQ code')
// })
// $(document).ready(function(){
//     $('button').click(()=> { 
//        $('button').css(
//         'backgroundcolor','green'
//     )
//     })
// })

$(document).ready(function(){
    $('.menuActive').click(function(){
        $('.dropMemu').slideToggle()
    })
    $('.collapse').click(function(){
        $('.menu').slideToggle()
    })

    $('.sidebarbtn').click(function(){
        $('.sidebar').toggleClass('ml0')
    })
})

//  $(document).ready(function() {
//      $('button').click(()=> {
//         $('button').css(
//             'backgroundColor', 'green'
//          )
//      })
//  })

 $(document).ready(function() {
     $('.hide').click(function() {
         $('.box').hide();
     }) 
     $('.show').click(function() {
        $('.box').show()  
        })
       $('.toggle').click(function() {
        $('.box').toggle()
     })
      $('.fadeIn').click(function() {
       $('.box').fadeIn()
        
     })
     $('.fadeOut').click(function() {
       $('.box').fadeOut()
     })
   })