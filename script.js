alert("if you like what you see please star my repo :), chat with my bot and i hope you enjoy playing around with him ");

window.onload =()=>{

    let chatbody = document.getElementsByClassName("chat_body")[0],
    inp = document.getElementsByClassName("in")[0],
    send = document.getElementsByClassName("send")[0],
    cc = 0, sender = null,d=0;

    const res = [
        "I am Edoscoba bot",
        "I am just a month old",
        "Yes i will try",
        "Glad you agree with me",
        "Hey!",
        "I am fine"
    ];
    function msg_div(user,text,pos,temp){
        if (temp) {
            temp = "temp";
        }else {
            temp = "";
        }
        style = "rt";
    }
    return `div class="msg-`+temp+`"> <div class="msg-`+style+` `+pos+`">
    `+text+`
    </div>
    <div class="clear></div>
    <div class="sender `+pos+`">`+user+`</div>
    div class="clear"></div>
    </div>  `;
}
function remove_re_typing(){
    let msg = document.getElementsByClassName("msg");
    for(let z = 0; z <msg.length.length ;z++ ){
        if (msg[z].className.includes("temp")){
        msg[z].remove(); 
        }
       
    }
}

function bot_res(v,t) {
    setTimeout(() =>{
        remove_re_typing();
        chatbody.innerHTML = chatbody.innerHTML + msg_div("bot","Typing...","right",0);
        chatbody.scrollTop = chatbody.scrollWeight;
    },t);
}

