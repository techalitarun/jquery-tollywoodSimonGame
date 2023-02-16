
var level =0, flag=0;
var gamePattern = [];
var userClickedPattern = [];
var buttonActors = ["pk","mb","rc","aa","ntr","pb"];


    
$(".btn").click(function(){
    
    var userChosenActor = $(this).attr("id");
    animatPress(userChosenActor);
    playsound(userChosenActor);
    console.log(userChosenActor);
    
    userClickedPattern.push(userChosenActor);
    
    console.log(userClickedPattern);

    if(userClickedPattern.length===gamePattern.length){
        check();
    }
    });


function nextSequence(){
    
    $("h1").text("Level "+level);
    if(level===10){
        var success = new Audio("sounds/success-sound.mp3");
        success.play();
        $(".btn").hide();
        $("body").addClass("success");
        setTimeout(function(){
            $("body").removeClass("success");
            $(".btn").show();
        },1000);
    }
    var randomNumber = Math.floor(Math.random()*6);
    var randomChosenActor = buttonActors[randomNumber];
    
    gamePattern.push(randomChosenActor);
    $("#"+randomChosenActor).animate({opacity:0.25},200).animate({opacity:1},200);
    level++;
}

function playsound(actor){
    switch (actor) {
        case "pk":
            var pks = new Audio("sounds/col1.mp3");
            pks.play();
            break;
        
        case "mb":
            var mbs = new Audio("sounds/col2.mp3");
            mbs.play();
            break;
        
        case "rc":
            var rcs = new Audio("sounds/col3.mp3");
            rcs.play();
            break;

        case "aa":
            var aas = new Audio("sounds/col1.mp3");
            aas.play();
            break;

        case "ntr":
            var ntrs = new Audio("sounds/col2.mp3");
            ntrs.play();
            break;

        case "pb":
            var pbs = new Audio("sounds/col3.mp3");
            pbs.play();
            break;


        default:
            break;
    }
}

function animatPress(currentActor){
    $("#"+currentActor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentActor).removeClass("pressed");
    },100);
}
function check(){
    for(var i=0;i<level;i++){
        if(gamePattern[i]!=userClickedPattern[i] || userClickedPattern.length==0){
            gamePattern.length=0;
            level=0;
            $("h1").text("Game Over,Press any key to start");
            var wrong = new Audio("sounds/error-sound.mp3.mp3");
            wrong.play();
            $(".btn").hide();
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
                $(".btn").show();
            },1000);

            flag=0;
        }

    }
    userClickedPattern.length=0;
    if(gamePattern.length!=0){
        nextSequence();
    }
    
}
    
$(document).keydown(function(){
if(flag===0){
    flag=1;
    nextSequence();
}
});



