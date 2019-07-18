$(document).ready(function(){
    $('#blanks form').submit(function(event){
        var blanks = ["person1","person2","animal","exclamation","verb","noun"];
        // var person1Input = $('input.person1').val();
        // var person2Input = $('input#person2').val();
        // var animalInput = $('input#animal').val();
        // var exclamationInput = $('input#exclamation').val();
        // var verbInput = $('input#verb').val();
        // var nounInput = $('input#noun').val();

        blanks.forEach(function(blank){
            var userInput = $('input#'+ blank).val();
            $("."+blank).text(userInput);
        })


        // $('.person1').text(person1Input);
        // $('.person2').append(person2Input);
        // $('.animal').append(animalInput);
        // $('.exclamation').append(exclamationInput);
        // $('.verb').append(verbInput);
        // $('.noun').append(nounInput);

        $('#story').show();
        event.preventDefault();
    });
});