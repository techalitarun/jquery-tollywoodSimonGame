

var level =0, flag=0, ind=-1;
var gamePattern = [];
var userClickedPattern = [];
var buttonActors = ["pk","mb","rc","aa","ntr","pb"];


    
$(".btn").click(function(){
    
    var userChosenActor = $(this).attr("id");
    ind++;
    animatPress(userChosenActor);
    playsound(userChosenActor);
    console.log(userChosenActor);
    
    userClickedPattern.push(userChosenActor);
    
    console.log(userClickedPattern);
    console.log(gamePattern);
    check();
});


function nextSequence(){
    
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*6);
    var randomChosenActor = buttonActors[randomNumber];
    
    gamePattern.push(randomChosenActor);
    $("#"+randomChosenActor).animate({opacity:0.25},200).animate({opacity:1},200);
    userClickedPattern.length=0;
    ind=-1;
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
    if(gamePattern[ind]!=userClickedPattern[ind]){
        gamePattern.length=0;
        level=0;
        $("h1").text("Game Over");
        $("h1").css("color","red");
        var wrong = new Audio("sounds/error-sound.mp3.mp3");
        wrong.play();
        $(".btn").hide();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("h1").text("Press any key to start");
            $("h1").css("color","#FEF2BF");
            $("body").removeClass("game-over");
            $(".btn").show();
        },1000);

        flag=0;
    }
    if(flag!=0 && userClickedPattern.length===gamePattern.length){
        nextSequence();
    }
}

$(document).keydown(function(){
if(flag===0){
    flag=1;
    nextSequence();
}
});



