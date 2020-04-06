
var answer;
var score = 0;
var backgroungImages = [];

function nextQuestion()
{
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);

    document.getElementById("n1").innerHTML = n1;
    document.getElementById("n2").innerHTML = n2;

    answer = n1 + n2;
}

function checkAnswer()
{
    const prediction = predictImage();
    console.log(`Answer : ${answer} Prediction : ${prediction}`);

    if(prediction == answer){
        score++;
        console.log(`Correct ${score}`);
        if(score <= 6)
        {
            backgroungImages.push(`url('images/background${score}.svg')`)
        }
        else{
            backgroungImages = [];
            score = 0;
            alert("You have won Seed the Garden Again..")
        }
        document.body.style.backgroundImage = backgroungImages;
    }
    else
    {
        if(score != 0){
            score--;
        }
        setTimeout(function(){
            backgroungImages.pop();
            document.body.style.backgroundImage = backgroungImages;
        },1000)
        console.log(`Wrong ${score}`);
    }
}