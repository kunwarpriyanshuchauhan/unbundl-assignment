const screen_size = document.getElementsByClassName('daddy')
const hero_form = document.getElementsByClassName('daddy-1')
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
       
        const question = item.querySelector('p');
        const answer = document.createElement('div');
        answer.className = 'faq-answer';
        
        
        let nextSibling = item.querySelector('span').nextSibling;
        while(nextSibling && nextSibling.nodeType !== 3) {
            nextSibling = nextSibling.nextSibling;
        }
        if (nextSibling && nextSibling.textContent.trim().length > 0) {
            answer.textContent = nextSibling.textContent.trim();
            item.appendChild(answer);
            nextSibling.remove();
        }


        item.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
                currentlyActive.querySelector('span').textContent = '+';
            }

            item.classList.toggle('active');
            const answerDiv = item.querySelector('.faq-answer');
            const icon = item.querySelector('span');

            if (item.classList.contains('active')) {
                answerDiv.style.display = 'block';
                answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
                icon.textContent = '-';
            } else {
                answerDiv.style.maxHeight = 0;
                icon.textContent = '+';
                
                 answerDiv.addEventListener('transitionend', () => {
                    if (!item.classList.contains('active')) {
                         answerDiv.style.display = 'none';
                    }
                }, { once: true });
            }
        });
    });

    const allFaqItems = document.querySelectorAll('.faq .container .faq-item');
    const uniqueFaqItems = new Map();
    allFaqItems.forEach(item => {
        const questionText = item.querySelector('p').textContent.trim();
        if (uniqueFaqItems.has(questionText)) {
            item.remove();
        } else {
            uniqueFaqItems.set(questionText, item);
        }
    });

    const faqData = {
        "Can I choose the dentist on my own for treatment?": "Yes, you can choose your own dentist for the treatment. We have a team of experienced dentists to choose from.",
        "What are your dental clinic timings?": "Our clinics are open from 9 AM to 9 PM, Monday to Saturday. On Sunday, we are open from 10 AM to 6 PM.",
        "Will I get the same doctor each time I visit the same clinic?": "We try our best to ensure you see the same doctor for your follow-up visits to maintain continuity of care.",
        "How can I book an appointment?": "You can book an appointment through our website, mobile app, or by calling our central helpline number.",
        "How you are able to provide less prices than other dental brands?": "We are able to provide competitive prices due to our large network of clinics and efficient operational model, which allows us to pass on the savings to our patients.",
        "How frequently should I visit a dentist?": "For optimal dental health, we recommend visiting a dentist for a regular check-up and cleaning every six months."
    };
    
    uniqueFaqItems.forEach((item, questionText) => {
        const answerDiv = item.querySelector('.faq-answer');
        if (faqData[questionText]) {
            answerDiv.textContent = faqData[questionText];
        }
        
        
        answerDiv.style.maxHeight = '0';
        answerDiv.style.overflow = 'hidden';
        answerDiv.style.transition = 'max-height 0.3s ease-in-out';
    });

    
    function scrollToSection(sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

   
    var bookBtn = document.getElementById('scroll-book');
    var callbackBtn = document.getElementById('scroll-callback');
    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            scrollToSection('book-appointment-section');
        });
    }
    if (callbackBtn) {
        callbackBtn.addEventListener('click', function() {
            scrollToSection('instant-callback-section');
        });
    }
});
