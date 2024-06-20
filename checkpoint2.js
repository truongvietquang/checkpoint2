const order = document.querySelector(".order")
const name = document.querySelector(".name")
const email = document.querySelector(".email")
const phone = document.querySelector(".phone")
const address = document.querySelector(".address")
const message = document.querySelector(".message")

emailjs.init({
    publicKey: '6nZdbBWhDOPWhnQXv',
});
function params() {
    const name = document.querySelector(".name").value
    const email = document.querySelector(".email").value
    const phone = document.querySelector(".phone").value
    const address = document.querySelector(".address").value
    const message = document.querySelector(".message").value

    return {
        name: name,
        email: email,
        phone: phone,
        address: address,
        message: message
    }
}
order.addEventListener("click", () => {
    emailjs.send('service_v34bsxg', 'template_6x5b1ck', params()).then(
        (response) => {
          window.location.href = "./confirm.html"
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
})
