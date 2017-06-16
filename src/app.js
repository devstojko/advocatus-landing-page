import css from './styles/app.sass';

{

  const faqList = document.getElementById('faqList');
  const faqContent = document.getElementById('faqContent');

  faqList.addEventListener('click', function(event) {
    let faqTarget = event.target.dataset.faqTarget;

    toggleFaq(faqTarget);
  });

  function toggleFaq(selected) {

    const targetClass = 'faq__list-item--selected';
    const contentClass = 'faq__item--visible';

    const targetElement = document.querySelector(`[data-faq-target="${selected}"]`);
    const contentElement = document.querySelector(`[data-faq-id="${selected}"]`);

    var sections = document.querySelectorAll('[data-faq-target]');
    var contents = document.querySelectorAll('[data-faq-id]');
    
    for (var i = 0; i < sections.length; i++){

        sections[i].classList.remove(targetClass);
        contents[i].classList.remove(contentClass);

    }

    targetElement.classList.add(targetClass);
    contentElement.classList.add(contentClass);
    // contentElement.classList.add(contentClass);
  }
}
