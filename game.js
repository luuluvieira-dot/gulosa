// ==============================
// ELEMENTOS
// ==============================

const universe = document.getElementById("universe");

const music = document.getElementById("music");

const startButton = document.getElementById("startButton");

const introScreen = document.getElementById("introScreen");

const message = document.getElementById("message");

const text = document.getElementById("text");

const core = document.getElementById("core");

const finalScene = document.getElementById("finalScene");

const finalPhrase = document.getElementById("finalPhrase");

const endPhrase = document.getElementById("endPhrase");






// ==============================
// INICIAR EXPERIÊNCIA
// ==============================


startButton.onclick = async()=>{


    introScreen.style.transition="opacity 2s";

    introScreen.style.opacity="0";


    setTimeout(()=>{

        introScreen.style.display="none";

    },2000);



    music.volume=0.25;


    try{

        await music.play();

    }

    catch(error){

        console.log("Erro no áudio:",error);

    }



    setTimeout(showMemory,4000);


};








// ==============================
// CONTADOR DE HORAS
// ==============================


function hoursSince(){


    const start =
    new Date("2025-12-15T00:00:00");


    const now =
    new Date();



    return Math.floor(

        (now-start)

        /

        (1000*60*60)

    );


}









// ==============================
// UNIVERSO
// ==============================


let stars=[];



function createStars(amount){


    for(let i=0;i<amount;i++){


        let star =
        document.createElement("div");



        star.className="star";



        star.innerHTML =

        Math.random()>0.5

        ?

        "✦"

        :

        "·";



        star.x =
        Math.random()*innerWidth;



        star.y =
        Math.random()*innerHeight;



        star.speed =
        Math.random()*2+0.3;



        star.style.left =
        star.x+"px";



        star.style.top =
        star.y+"px";



        star.style.fontSize =

        (Math.random()*15+3)+"px";



        universe.appendChild(star);



        stars.push(star);



    }


}



createStars(250);







function moveStars(){


    stars.forEach(star=>{


        star.y += star.speed;



        if(star.y > innerHeight){


            star.y=-20;


            star.x=Math.random()*innerWidth;


        }



        star.style.top =
        star.y+"px";


        star.style.left =
        star.x+"px";



    });



    requestAnimationFrame(moveStars);


}



moveStars();








// ==============================
// PARTÍCULAS DA ESTRELA
// ==============================


function createParticle(){


    let particle =
    document.createElement("div");



    particle.innerHTML="✦";


    particle.style.position="absolute";


    particle.style.color="white";


    particle.style.left="50%";


    particle.style.top="70%";



    universe.appendChild(particle);



    let x =
    Math.random()*120-60;


    let y =
    Math.random()*150+40;



    particle.animate([

        {
            opacity:1,
            transform:"translate(0,0)"
        },

        {
            opacity:0,
            transform:
            `translate(${x}px,${y}px)`
        }


    ],{


        duration:2000


    });



    setTimeout(()=>{


        particle.remove();


    },2000);



}



setInterval(createParticle,180);









// ==============================
// HISTÓRIA
// ==============================


const story=[


`${hoursSince().toLocaleString()} horas se passaram desde aquele dia...`,


"O dia em que minha vida mudou.",


"Nunca mais fui o mesmo depois que você apareceu.",


"Vieram brigas, discussões e momentos difíceis.",


"Mas nada disso importava, contanto que eu estivesse com você.",


"Porque, pela primeira vez...",


"Eu realmente me senti vivo.",


"E então eu percebi...",


"O mínimo que eu poderia fazer...",


"Era me entregar.",


"Sempre vai ter minha companhia.",


"Meu amor.",


"Minha atenção.",


"A essa altura já não existem palavras que demonstrem seu valor para mim.",


"Você é meu mundo, Laís.",


"Eu te amo."


];





let index=0;








function showMemory(){



    if(index >= story.length){

        return;

    }



    let phrase =
    story[index];



    text.innerHTML="";



    message.style.opacity=1;



    let letter=0;



    let typing=setInterval(()=>{


        if(letter < phrase.length){


            text.innerHTML += phrase[letter];


            letter++;


        }


        else{


            clearInterval(typing);



            let wait=3500;



            if(index===6 || index===14){


                wait=8000;


            }





            setTimeout(()=>{


                message.style.opacity=0;




                if(index===6){


                    core.style.transform="scale(1.5)";


                    core.style.filter="brightness(3)";


                }





                if(index===14){


                    showFinal();

                    return;

                }



                index++;



                setTimeout(showMemory,2500);



            },wait);



        }



    },70);



}









// ==============================
// FINAL
// ==============================


function showFinal(){



    message.style.opacity=0;



    music.volume=0.08;



    setTimeout(()=>{


        finalScene.style.opacity=1;



        setTimeout(()=>{


            finalPhrase.style.opacity=1;


        },4000);



        setTimeout(()=>{


            endPhrase.style.opacity=1;


        },7000);



    },3000);



}
