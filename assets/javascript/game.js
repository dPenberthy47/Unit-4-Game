$(document).ready(function(){

    var hasAttackCard = $("#attacking-area").children().length;
    var hasDefendCard = $("#defender-area").children().length;
    var atkBtn = $(".atkBtn")
    var atkBtnOne;
    var atkBtnTwo;

    atkBtn.hide();

// DOM elements

    // Pokemon HP 
    var pikaHealth = document.getElementById("P-HP");
    var charHealth = document.getElementById("C-HP");
    var mewHealth = document.getElementById("M-HP");
    var lucHealth = document.getElementById("L-HP");

/*
// attack variables COME BACK TO THESE BECAUSE I DONT KNOW WHAT THESE DO YET
attackName = '';
curAttack = {};
randInt = 0;
enemyAttack = {};
defendProgressInt = null;
defendProgressComplete = 0;
progressInt = null;
progressComplete = 0;


// put each character into an object with characteristics
characters = [
    {
        //pikachu
        name: "pikachu",
        hp: {
            current: 200,
            total: 200
        },
        attacks: [
            {
                name: "thunderbolt",
                hp: randomNum(60),
                avail: {
                    total: 10,
                    remaining: 10
                }
            },
            {
                name: "iron tail",
                hp: randomNum(60),
                avail: {
                    total: 10,
                    remaining: 10
                }
            }
        ]
    },
    {
        //charizard
        name: "Charizard",
        hp: {
            current: 200,
            total: 200
        },
        attacks: [
            {
                name: "flamethrower",
                hp: randomNum(80),
                avail: {
                    total: 5,
                    remaining: 5
                }
            },
            {
                name: "wing attack",
                hp: randomNum(40),
                avail: {
                    total: 15,
                    remaining: 15
                }
            }
        ]
    },
    {
        //Mewtwo
        name: "Mewtwo",
        hp: {
            current: 200,
            total: 200
        },
        attacks: [
            {
                name: "psychic",
                hp: randomNum(90),
                avail: {
                    total: 5,
                    remaining: 5
                }
            },
            {
                name: "shadow ball",
                hp: randomNum(40),
                avail: {
                    total: 15,
                    remaining: 15
                }
            }
        ]
    },
    {
        //lucario
        name: "Lucario",
        hp: {
            current: 200,
            total: 200
        },
        attacks: [
            {
                name: "psychic",
                hp: randomNum(90),
                avail: {
                    total: 5,
                    remaining: 5
                }
            },
            {
                name: "shadow ball",
                hp: randomNum(40),
                avail: {
                    total: 15,
                    remaining: 15
                }
            }
        ]
    }
] 

function randomNum(max) {
    // generate a random number based on the moves value
    return Math.floor(Math.random() * (max)
  } */
  
    // name

    // HP

    //moves

    //build functionality for two moves per pokemon

        //two moves with unique abilities

        //chance of missing

        //HP

            //PUT A CONDITIONAL HERE WITH $("#-HP").html() to change HP when attacked

        //HP goes down when hit

        //pokemon faints when it runs out of HP

// ability to select a pokemon
  

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

                $(".atkBtn").show(); /* once both pokemon are selected, the attack button shows, 
                                        allowing me to play the game */
                console.log($(this).parent().get( 0 ));
            }
        });
    }

    // add functionality to my attack button
    $( attack);

    // make an .on("click", function {})
    function attack() {
        $(".atkBtn").on("click", function() {
            atkBtnOne = "<button>Attack 1</button>";
            atkBtnTwo = "<button>Attack 2</button 2>";
            atkBtnOne.appendTo("attacking-options-area");
            atkBtnTwo.appendTo("attacking-options-area");
        });
    }
    
    // put functions for the pokemons moves in here

//computer randomly selects an opponent pokemon

    //moves the enemy character into the defender

    //computer randomly selects a move

    // you must select your next opponent after you've defeated your opponent

//press the keys via the buttons to use an attack

    //the attack buttons will appear when you choose a pokemon

    //if no defender pokemon is choosen, a document.write with "no enemy selected" will appear.


//when your HP is reduced to 0, the game is over. 

//you win once you've knocked out every opponent

//when 

//press restart to restart the game

});