//template_m3odffw

//service_j0vole5

//public key TfEdOzUw_Th6TcFQJ

//Browser Script:
/**<script type="text/javascript"
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "TfEdOzUw_Th6TcFQJ",
      });
   })();
</script>
*/

function contact(event) {
    event.preventDefault();
    /**emailjs
    .sendForm(
        "service_j0vole5",
        "template_m3odffw",
        event.target,
        "TfEdOzUw_Th6TcFQJ"
    ).then(() => {
        console.log("this worked")
    })*/
const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible"
setTimeout(() =>{
    console.log("it worked 1")
}, 1000);
    }
