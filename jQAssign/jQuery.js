$('#submit').click(function(event){
    let required = []
    required.push($('#name').val())
    required.push($('#phone').val())
    required.push($('#email').val())
    required.push($('#message-area').val())
    console.log(required)

    for (let i=0; i< required.length; i++){
        if (required[i] === ''){
            let empty = $('#message')
            empty.text("Please Fill Out Required Fields")
            $('label').addClass('warning')
        }  
    }

    $('#name, #phone, #email, #message-area').on('keyup', function() {
        if ($(this).val() !== '') {
          $(this).prev('label').removeClass('warning');
        }
        else{
            $(this).prev('label').addClass('warning');
        }
      });

    if ( $('label').hasClass('warning') == false)
    {
        $('#form').remove()
        $('h3').remove()
        $('h2').text("Thanks for your feedback!")
    }
})

