let menuIcon =  document.querySelector("#menu-icon");
let navbar =  document.querySelector("#navbar");

let section =  document.querySelectorALL("#section");
let navLinks =  document.querySelectorAll("header nav a");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id =    sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                 links.classList.remove("active");
                 document.querySelector("header nav a [href*=" + id + "]").classList.add("active")
            })
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
    
}


    (function() {
        emailjs.init('zd2r3At2-FgwT2KZW')
    })();



    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;

        emailjs.send('service_wes3pdu', 'template_sc0bu1e',{
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
    });


