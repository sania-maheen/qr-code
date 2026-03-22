let qrBox = document.getElementById("qr-box");

document.getElementById("generate-btn").addEventListener("click", function(){

let text = document.getElementById("text-input").value.trim();

if(text === ""){
alert("Please enter text or URL");
return;
}

/* fix URL automatically */

if(!text.startsWith("http")){

    if(!text.includes(".")){
        text = "https://" + text + ".com";
    }
    else{
        text = "https://" + text;
    }

}

qrBox.innerHTML = "";

new QRCode(qrBox,{
text: text,
width: 200,
height: 200
});

});


document.getElementById("clear-btn").addEventListener("click", function(){

document.getElementById("text-input").value="";
qrBox.innerHTML="";

});
