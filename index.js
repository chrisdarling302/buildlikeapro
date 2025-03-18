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
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");

    emailjs
    .sendForm(
        "service_j0vole5",
        "template_eqsig0l",
        event.target,
        "TfEdOzUw_Th6TcFQJ"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at cldarling@gmail.com"
        );
        console.log(event.target);
    })
 }

 let isModalOpen = false;
 function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList.add("modal--open");
 }