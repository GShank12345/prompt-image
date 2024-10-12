
// window.alert("window",window);
var textkey = ""
var decrypt1 = ""
var decrypted = ""
var textkey1 = ""
var decrypt2 = ""
var decrypted2 = ""
var stat = ""
// var genimg;
// var yourprompt;
// window.moveTo(0, 0);
var d = new Date()
var yourprompt;
var i = 0
var value="";
var imga;
var x=" ";
var streaming=false;
var width = 320;
var canvas = null;

var flowers = ["flower/flower-1.png","flower/flower-2.png","flower/flower-3.png","flower/flower-4.png","flower/flower-5.png","flower/flower-6.png","flower/flower-7.png","flower/flower-8.png","flower/flower-9.png","flower/flower-10.png"]



var i1 =  Math.floor(Math.random() * flowers.length);
var  mess=flowers[i1];



var ffm = []
// change Feb 8
var url1 = 'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans'






/// new

        
        window.document.write("<br><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Image Generation for Urban Health" + " " + String(d).substring(0,16) + "</h1>&nbsp;&nbsp;")

        // window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<body onload='enableEditMode()'><style>.dcolor{width:10%;text-align:center}</style><button onclick='bold' title='bold' id='bold'><i class='fa fa-bold'></i></button><textarea id='demo' rows='20' cols='110'></textarea>")
        
        window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + stat + " <br><br><b>Enter a prompt to generate an image for Urban Health :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' id='entername' placeholder='Enter a prompt' title='enter-name' class='dcolorn' onclick='entername()'></input> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br><div><style>.dcolor{width:20%;text-align:center;background-color:lightblue}</style>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='generateimg' onclick='genimage()' class='dcolor1'>Image Generate</button></script></div></center><script 'unsafe-inline'  id='scriptcr' src='./crypto-js/crypto-js.js'></script><br>")

// demo = window.document.getElementById('demo');
genimg = window.document.getElementById('generateimg');

// window.document.write("<br><text id = 'stat'>" + stat + "</text><br>")

genimg.onclick = async function genimage()
{
    var iv = CryptoJS.enc.Base64.parse("");
    await  fetch('Your Backend Fetch URL').then((response) => response.json())
     .then ((data) =>  {
     decrypt1 = data
   // console.log("decrypt1-aut with iv",decrypt1)
    decrypted = CryptoJS.AES.decrypt(decrypt1,"",{});
        // console.log("text key", decrypted)
    textkey =  decrypted.toString(CryptoJS.enc.Utf8)

    });

      printimg()
}

function printimg() {

    yourprompt = document.getElementById('entername').value;
    if (yourprompt == "")
     {

        stat = "Write prompt and click generate image"
     }
     else
     {
        // console.log("Text Key ==============",imgc)
         if (textkey == null)
         {
             Console.log("text key error")
             alert("Try again later")
         }
        // demo.document.body.innerHTML = "<b><h2>Please wait...Analyzing</h2></b>"
        // demo.document.body.innerHTML.editable = false
         stat = "Please wait...Analyzing"

         fetch('https://api.openai.com/v1/images/generations', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + textkey
         },

         body: img = JSON.stringify({
             'model': "dall-e-3",
             'prompt': yourprompt + " Generate image relating to urban health consciousness. ",
             "n": 1,

         })
         })
         .then( (response)=> {
             return response.json()
             .then((img)=> {
                 console.log("ins img",img)
                 if (img.error)
                 {
                     console.log("message error",img.error,img)

                   //  demo.document.body.innerHTML = ""
                     stat = "Error while loading"
                   //  window.location.href = "notes.html"
                 }
                 else
                 {
                     stat = "Please check the next window";
                     var imga = document.createElement("img");
                     imga.src = img.data[0].url;
                     console.log(img.data[0].url);
                    // mess = "<img id='img' alt='health' height='250' width='250' src=" + imga.src + "></img></html>"
                     window.open(imga.src)
                 }
             })
         })
     }
}
