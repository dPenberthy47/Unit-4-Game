$(document).ready(function(){

    //DOM buttons and cards
    var hasAttackCard = $("#attacking-area").children().length;
    var hasDefendCard = $("#defender-area").children().length;
    var atkBtn = $(".atkBtn");
    var atkOpt = $(".atkBtnOpt");

    // Pokemon HP buttons
    var hpBtn = $(".hpBtn");
    var compHpBtn = $(".compHpBtn");

    // hide battle buttons initially
    atkBtn.hide();
    atkOpt.hide();
    hpBtn.hide();
    compHpBtn.hide();

    // attack variables
    var userDamage = 25;
    var countTurns = 1;
    var userAttack = Math.floor(Math.random() * userDamage * countTurns);
    var compAttack = Math.floor(Math.random() * 75);

    // user hp variables
    var hpLeft = $("#userHP");
    var currentHP = 200;
    hpLeft.text(currentHP);

    // comp hp variables
    var compHpLeft = $("#compHP");
    var compCurrentHP = 200;
    compHpLeft.text(compCurrentHP);

    //start the game by selecting two pokemon
    $( init );

    function init () {
        $(".card").on("click", function() {
            
            //check to make sure that there isn't a card already in the attaking area
            console.log($("#attacking-area").children(".card"));
            hasAttackCard = $("#attacking-area").children().length;
            hasDefendCard = $("#defender-area").children().length;

            if (hasAttackCard === 0) { //checking what return value it gives back
                $(this).appendTo("#attacking-area");
                
            } else if (hasDefendCard === 0) {
                    
                $(this).appendTo("#defender-area");  /* if there is no card, when we click on a card, 
                                                        we want to pend it to the defender area */
                atkOpt.hide();
                hpBtn.hide();
                compHpBtn.hide();
                $(".atkBtn").show();
                 /* once both pokemon are selected, the attack button shows, 
                                        allowing me to play the game */
                console.log($(this).parent().get( 0 ));
            }
        });
    }

    // click on the start button to begin the game
    $( attackBtn);

    function attackBtn() {
        $(".atkBtn").on("click", function() {
            // show battle buttons, hide start button
            atkOpt.show();
            hpBtn.show();
            atkBtn.hide();
            compHpBtn.show();

            // hide unselected pokemon
            $(".pokeSelector").hide();

        });
    }

    // when you attack your opponent, this function runs
    $( attack );

    function attack() {
        countTurns++;
         $(".atkBtnOpt").on("click", function() {

            //reiterate attack vars in the local function scope
            userDamage = 75;
            countTurns = 1;
            userAttack = (Math.floor(Math.random() * userDamage * countTurns));
            
            //reiterate comp attack var
            compAttack = (Math.floor(Math.random() * 75));
            
            //update user hp
            currentHP = currentHP - compAttack;
            console.log(currentHP);
            hpLeft.text(currentHP);

            //update comp hp
            compCurrentHP = compCurrentHP - userAttack;
            console.log(compCurrentHP);
            compHpLeft.text(compCurrentHP);

            // need to put conditionals on these
            alert("Your attack took away " + userAttack + " HP from your opponent! your opponent has " + compCurrentHP + " HP left!");
            alert("Your opponent struck back, taking " + compAttack + " HP from your pokemon! Your opponent has " + currentHP + " HP left!");

            // check if either pokemon has run out of HP.
            if (currentHP <= 0) {

                alert("Oh no! Your pokemon has fainted, better take it to the PokeCenter!");

                var pokecenter = confirm("would you like to heal your pokemon and try again?");
                
                if (pokecenter) {
                    alert("Your pokemon has restored 100 HP points!");
                    currentHP = 0;
                    currentHP = currentHP + 100;
                    hpLeft.text(currentHP);
                } else {
                    document.reload(forceget);
                }

            } else if (compCurrentHP <= 0) {

                alert("The enemey pokemon fainted! YOU WIN!");
                var replay = confirm("would you like to play again?");
                
                if (replay) {
                     currentHP = 200;
                     commpCurrentHP = 200;
                     hpLeft.text(currentHP);
                     compHpLeft.text(compCurrentHP);
                 }
            }
            
         });
         
    }
    
});