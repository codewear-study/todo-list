
function enterkey(){
    let input = document.getElementById("createToDo");

    if(window.event.keyCode == 13){
        console.log(input.value);
        if(localStorage.getItem(input.value) == null && input.value != "")
        {    
            localStorage.setItem(input.value,JSON.stringify(input.value));
            draw(makecontent(input.value));
        }
        
        input.value = "";
    }
}

function makecontent(val){
    let content = document.createElement("div");
    let h = document.createElement("h1");
    let txtNode = document.createTextNode(val);
    let button = document.createElement("button");
    
    button.setAttribute("class","destory");
    button.setAttribute("onclick", "remove(" +"\""+val+"\""+")")
    content.setAttribute("class", "content");
    content.setAttribute("id", val);

    h.appendChild(txtNode);
    button.appendChild(document.createTextNode("X"));

    content.appendChild(h);
    content.appendChild(button);

    return content;
}

function draw(content){
    let contents = document.getElementById("contents");
    contents.appendChild(content);
}

function remove(item_id){
    let content = document.getElementById(item_id);
    let contents = document.getElementById("contents");

    localStorage.removeItem(item_id);
    contents.removeChild(content);
}


(function load(){
    
    for(var i = 0; i < localStorage.length; i++){
        draw(makecontent(localStorage.key(i)));
    }
})()