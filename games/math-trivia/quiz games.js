function numbersToAdd () {
    var firstNumber = math.floor (math.random()*100);
    var secondNumber = math.floor (math.random()*100);

    var theMath = firstNumber + ' + ' + secondNumber;

    var contentArea = innerHTML.getElementById ('display');

    contentArea.innerHTML = theMath;

     var sum = firstNumber + secondNumber;

     return sum;
    
    function Added () {
    sum = numbersToAdd([1]) + numbersToAdd([2]);

function checkAddition () {
    var u_input = innerHTML.getElementById ('result');
    var summation = numbersToAdd(); 

        if (u_input.value == summation) {
            alert ("The answer is correct");
                    location.reload();
        
    else {
        alert ("answer is incorrect.please try again");
    }

    }

    function numbersToSubstract (){
        var firstNumber = math.floor (math.random() * 100);
        var secondNumber = math.floor (math.random() * 100);

        var theMath = firstNumber - ' - ' - secondNumber;

        var contentArea = document.getElementById('display');

        contentArea.innerHTML = theMath;

        var minus = firstNumber - secondNumber;

        return substaction;
        
        function substaction () {
            minus = numbersToSubstract([7]) - numbersToSubstract([3]);

            function checkSubstraction () {
                var u_input = document.getElementById ('result');
                var substaction = numbersToSubstract() 
                     
                if (u_input.value == substaction) {
                    alert ("The answer is correct");
                    location.reload ();

               else {
                        alert ("answer is incorrect.please try again")
                            
                    }
                    
                }   
                }
            }
        }
    
        function numbersToDivide() {
            var firstNumber = math.floor (math.random() * 100);
            var secondNumber = math.floor (math.random() * 100)

            var theMath = firstNumber / ' / ' / secondNumber;

            var contentArea = document.getElementById('display');

            contentArea.innerHTML = theMath;

            var divide = firstNumber / secondNumber;

            return division;

            function division(){
                division = numbersToDivide([36]) / numbersToDivide([4]);

                function checkdivision() {
                    var u_input = document.getElementById ('result')
                    var division = numbersToDivide();

                    if (u_input.value == division) {
                        alert ("The answer is correct");
                        location.reload();

                        else{
                            alert ("answer is incorrect.please try again");
                        }
                    }
                }


            }
        }

        function numberToMultiply(){
            var firstNumber = math.floor (math.random() * 100);
            var secondNumber = math.floor (math.random() * 100);

            var theMath = firstNumber * ' * ' * secondNumber;

            var contentArea = document.getElementById('display');

            contentArea.innerHTML = theMath;

            var multiply = firstNumber * secondNumber;

            return multiplication;

            function multiplication(){
                multiplication = numberToMultiply([56]) * ([7]);

                function checkmultiplication() {
                    var u_input = document.getElementById ('result');
                    var multiplication = numberToMultiply();

                    if (u_input.value == multiplication) {
                        alert ("The answer is coreect");
                        location.reload();

                        else {
                            alert ("answer is incorrect.please try again");
                        }
                    }
                    
                }
                
            }
            
        }