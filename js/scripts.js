//Contact.html

//Whatsapp message
const whatsappFormButton = document.getElementById('whatsappFormButton');

whatsappFormButton.addEventListener('click', () => {
    var name = document.getElementById('whatsappFormName').value;
    var subject = document.getElementById('whatsappFormSubject').value;
    var message = document.getElementById('whatsappFormMessage').value;

    // Formatar a mensagem para a URL do WhatsApp
    var completeMessage = "Olá! Meu nome é " + name + " e gostaria de falar sobre " + subject + ":%0a%0a" + message;

    // Número de WhatsApp e link
    var whatsAppNumber = "5521985069581";
    var whatsAppLink = "https://wa.me/" + whatsAppNumber + "?text=" + completeMessage;

    // Redirecionar para o link do WhatsApp
    window.open(whatsAppLink, '_blank');
});