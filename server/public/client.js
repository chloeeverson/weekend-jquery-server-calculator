console.log('js');

$(readyNow);

function readyNow (){
    console.log('JQ');
    $('#addButton').on('click' , function(event) {
        console.log('add button clicked');
        //prevent refreshing of page
        event.preventDefault();
        //call add numbers function
        addNumbers();
    })
    $('#subtractButton').on('click' , function(event) {
        console.log('subtract button clicked');
        //prevent refreshing of page
        event.preventDefault();
        //call subtract numbers function
        subtractNumbers();
    })
    $('#multiplyButton').on('click' , function(event) {
        console.log('multiply button clicked');
        //prevent refreshing of page
        event.preventDefault();
        //call multiply numbers function
        multiplyNumbers();
    })
    $('#divideButton').on('click' , function(event) {
        console.log('divide button clicked');
        //prevent refreshing of page
        event.preventDefault();
        //call divide numbers function
        divideNumbers();
    })
    $('#clearButton').on('click' , function(event) {
        console.log('clear button clicked');
        //prevent refreshing of page
        event.preventDefault();
        //call clear inputs function
        clearInputs();
    })
    getEquations();
}//end readyNow

function addNumbers(){
    ('#equalButton').on('click' , function (event){
        console.log('equalButton clicked');
        //prevent refreshing page from click
        event.preventDefault();
        //set variable names for input numbers
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();
        //set answer of equation to the addition of two numbers
        let addAnswer = firstNumber + secondNumber
        //create object for equation
        let addEquation = {
            first = firstNumber,
            type = '+',
            second = secondNumber,
            equal = '=',
            answer = addAnswer, 
        }
        
        console.log('adding addition equation' , addEquation);

        postEquations();
    })
    
}//end addNumbers

function postEquations() {
    $.ajax({
        method: 'POST',
        url: '/equations',
        //new equation going in request body
        data: addEquation,
    })
        .then( function(response) {
            console.log('response from server' , response);
            //pass array into rendor method to display
            getEquations(); 
        })
        .catch( function(error) {
            console.log('error from server' , error);
            alert('sorry, could not add your item. try again later.')
    })   
}//end postEquations

function getEquations() {
    
    $.ajax({
        method: 'GET',
        url: '/equations',
        //new equation going in request body
    })
        .then( function(response) {
            console.log('response from server' , response);
            //pass array into rendor method to display
            render(response);
        })
        .catch( function(error) {
            console.log('error from server' , error);
            alert('sorry, could not add your item. try again later.')
        })
    console.log('after making server request...');
        
   
}//end getEquations

function subtractNumbers(){
    ('#equalButton').on('click' , function (event){
        console.log('equalButton clicked');
        //prevent refreshing page from click
        event.preventDefault();
        //set variable names for input numbers
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();
        let subtractAnswer = firstNumber - secondNumber
        let addEquation = {
            first = firstNumber,
            type = '-',
            second = secondNumber,
            equal = '=',
            answer = subtractAnswer, 
        }
        
        console.log('adding subtraction equation' , addEquation);

        postEquations();
    })
}//end subtractNumbers

function multiplyNumbers(){
    ('#equalButton').on('click' , function (event){
        console.log('equalButton clicked');
        //prevent refreshing page from click
        event.preventDefault();
        //set variable names for input numbers
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();
        let multiplyAnswer = firstNumber * secondNumber
        let addEquation = {
            first = firstNumber,
            type = '*',
            second = secondNumber,
            equal = '=',
            answer = multiplyAnswer, 
        }
        
        console.log('adding multiplication equation' , addEquation);

        postEquations();
    })
}//end multiplyNumbers

function divideNumbers(){
    ('#equalButton').on('click' , function (event){
        console.log('equalButton clicked');
        //prevent refreshing page from click
        event.preventDefault();
        //set variable names for input numbers
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();
        let divideAnswer = firstNumber / secondNumber
        let addEquation = {
            first = firstNumber,
            type = '/',
            second = secondNumber,
            equal = '=',
            answer = divideAnswer, 
        }
        
        console.log('adding division equation' , addEquation);

        postEquations();
    })
}

function clearInputs() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}

function render(equationsArray){
    $('#answerNumber').empty();
    for (let i=0; i<equationsArray.length; i++){
        if (i === equationsArray.length-1){
            $('#answerNumber').append(`<h2>
                ${equationsArray[i].answer}</h2>`)
        }
        $('#answerNumber').append(`
            <li>${equationsArray[i].firstNumber} 
            ${equationsArray[i].type} 
            ${equationsArray[i].secondNumber}
            ${equationsArray[i].equal}
            ${equationsArray[i].answer}</li>
            `)    
    }
}//end render