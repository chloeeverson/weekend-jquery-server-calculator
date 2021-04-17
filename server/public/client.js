console.log('js');

$(readyNow);

function readyNow (){
    console.log('JQ');
    $('#addButton').on('click' , addNumbers);
    $('#subtractButton').on('click' , subtractNumbers);
    $('#multiplyButton').on('click' , multiplyNumbers);
    $('#divideButton').on('click' , divideNumbers);
    $('#clearButton').on('click' , clearInputs);
    getEquations();
}

function addNumbers(){
    ('#equalButton').on('click' , function (event){
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();
        let addAnswer = firstNumber + secondNumber
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
}

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

// function subtractNumbers(){
//     ('#equalButton').on('click' , function (event){
//         let firstNumber = $('#firstNumber').val();
//         let secondNumber = $('#secondNumber').val();
//         let addAnswer = firstNumber + secondNumber
//         let addEquation = {
//             first = firstNumber,
//             type = '+',
//             second = secondNumber,
//             equal = '=',
//             answer = addAnswer, 
//         }
        
//         console.log('adding addition equation' , addEquation);

//         postEquations();
//     })
// }

// function multiplyNumbers(){
//     ('#equalButton').on('click' , function (event){
//         let firstNumber = $('#firstNumber').val();
//         let secondNumber = $('#secondNumber').val();
//         let addAnswer = firstNumber + secondNumber
//         let addEquation = {
//             first = firstNumber,
//             type = '+',
//             second = secondNumber,
//             equal = '=',
//             answer = addAnswer, 
//         }
        
//         console.log('adding addition equation' , addEquation);

//         postEquations();
//     })
// }

// function divideNumbers(){
//     ('#equalButton').on('click' , function (event){
//         let firstNumber = $('#firstNumber').val();
//         let secondNumber = $('#secondNumber').val();
//         let addAnswer = firstNumber + secondNumber
//         let addEquation = {
//             first = firstNumber,
//             type = '+',
//             second = secondNumber,
//             equal = '=',
//             answer = addAnswer, 
//         }
        
//         console.log('adding addition equation' , addEquation);

//         postEquations();
//     })

function clearInputs() {
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}//end clearInputs