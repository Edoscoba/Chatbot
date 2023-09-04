 alert("if you like what you see please star my repo , chat with my bot and i hope you enjoy playing around with him");
 alert(" You can ask him Whats your name?,Who designed you?, can you sing, tell me a joke?, who is a blockchain developer,what is web development, what is javascript")

window.onload =()=>{

    let chatbody = document.getElementsByClassName("chat_body")[0],
    inp = document.getElementsByClassName("in")[0],

    send = document.getElementsByClassName("send")[0],
    cc = 0, sender = null,d = 0;

    const res = [
       `I am Simon`,
        "I am just a month old",
        "Yes i will try",
        "Glad 😊 you agree with me",
        "Hello how can i assist you today!",
        "I am fine and you?",
        "happy to here that",
        "i am proudly 👏👏 designed by obi simon populary known as Edoscoba",
        `  Of course! Here's a lighthearted joke for you: <br> <br>

        Why don't scientists trust atoms? <br>
        
        Because they make up everything! 😄 <br>
        
        I hope that brought a smile to your face! If you'd like to hear more jokes just type more or if there's anything else I can assist you with, feel free to let me know.`,
        `Certainly! Here's a classic joke for you: <br> <br>

        Why don't skeletons fight each other? <br>
        
        Because they don't have the guts! <br>
        
        I hope that brought a smile to your face! If you're in the mood for more laughter or if there's anything else I can assist you with, feel free to let me know. Laughter is always the best medicine!`,

        `Web development is the process of creating, building, and maintaining websites and web applications. It involves several aspects such as web design, web programming, web content development, client-side/server-side scripting, web server configuration, network security configuration, and e-commerce development. Web developers use various programming languages, tools, and frameworks to create functional and visually appealing websites. They may work on the front-end (user interface) or back-end (server-side) development, or both. The goal of web development is to create a website or application that is easy to navigate, responsive, and meets the specific requirements of the client or business.`,
        `JavaScript is a high-level, interpreted programming language that is primarily used for building interactive web pages and web applications. It allows developers to add dynamic and interactive elements to a website, such as form validation, user interface enhancements, and dynamic content updates, enabling a more engaging user experience. JavaScript code can be embedded directly into HTML documents and is executed by web browsers on the client-side, meaning it runs locally on the user's device rather than on a remote server.`,

        "A blockchain developer is a professional who has programming skills and specializes in designing and developing applications on blockchain technology. They are responsible for coding smart contracts, creating decentralized applications (DApps), implementing consensus protocols, and building blockchain infrastructure. They have expertise in various programming languages like Solidity, C++, Java, and Python, and are familiar with blockchain platforms such as Ethereum, Hyperledger, and Corda. Blockchain developers play a crucial role in the creation and maintenance of blockchain-based systems.",

    ];
    function msg_div(user,text,pos,temp){

        if (temp) {
            temp = "temp";
        }else{
            temp = "";
        }
        style = "rt";
        if (pos =="left") {
            style = "lf";
        }
   
    return `<div class="msg `+temp+`"> 
    <div class="msg-`+style+` `+pos+`">
    `+text+`
    </div>
    <div class="clear"></div>
    <div class="sender `+pos+`">`+user+`</div>
    <div class="clear"></div>
    </div>  `;
}
function remove_re_typing(){
    let msg = document.getElementsByClassName("msg");
    for(let z = 0; z < msg.length ;z++ ){
        if(msg[z].className.includes("temp")){
        msg[z].remove(); 
        }
       
    }
}

function bot_res(v,t) {
    setTimeout(() =>{
        remove_re_typing();
        chatbody.innerHTML = chatbody.innerHTML +
         msg_div("bot",v,"right",0);
        chatbody.scrollTop = chatbody.scrollHeight;
    },t);
}
function bot_typing() {
    chatbody.innerHTML = chatbody.innerHTML +
    msg_div("bot","typing...","right",1);
    chatbody.scrollTop = chatbody.scrollHeight;
    
}

function AI(i) {
    i = i.toLowerCase();
    const query = [
        [,"what is your name","what's your name" ],
        ["Your age","how old are you","What is your age","What's your age"],
        ["can you", "will you", "sing"],
        ["alright" ,"okay"],
        ["hi","hello","good morning","good afternoon"," good evening","good","hey"],
        ["how are you","how are you doing","what's up","how re you"],
        ["i am","good","cool","fine"],
        ["who created you","who made you","who designed you","who design you","who design you"],
        [" tell me","can you", "joke", "a joke"],
        ["more","tell me more","more joke"],
        ["what is a web development ", "web development"],
        ["what's","what is","javascript"],
        ["who is a blockchain developer","who is blockchain developer","blockchain"],

        
        




    ];

    for(k in query){
        for(g in query[k]){
            if(i.includes(query[k][g])) {
                bot_typing();
                return bot_res(res[k],2000);
                d= 0;
                
            }
        }

    }
    
    switch (d) {
        case 0:
            d += 1;
            bot_typing();
            return bot_res(sender+", Sorry my answers are limited",4000);
            
            break;
        default :
       d = 0;
       bot_typing();

       return bot_res("Here are list of what you can ask me <br> <ul><li>Whats your name?</li><li>How old are you?</li><li>can you sing?</li><li>tell me a joke?</li><li>what is javascript</li><li>who is a blockchain developer?</li></ul>",2000);
    }
}

bot_typing();

bot_res("Hi, i am simon, type your name so we get to know each other.",2000);

send.addEventListener("click",function(){
    this.disabled = true;
    if (inp.value !="") {
        if(cc == 0){
            cc += 1;
            sender = inp.value;
            bot_typing(2000);
            bot_res("Welcome onboard "+inp.value + " so happy to chat with you",2000);
            setTimeout(()=>{
                s = "";
                if(sender != null){
                    s = sender+", ";
                }
                bot_typing(4000);
                bot_res(s+"Incase if you want to clone this project please feel free to do so. Let me know if there is any question",4000);
            },4000)

        }else{
            let tt = inp.value;
        chatbody.innerHTML = chatbody.innerHTML +
        msg_div(sender,inp.value,"left");
        chatbody.scrollTop = chatbody.scrollHeight;
        setTimeout(()=>{
            AI(tt);
        },2000);
        remove_re_typing();
    }
}

this.disabled = false;
inp.value = "";
});

}