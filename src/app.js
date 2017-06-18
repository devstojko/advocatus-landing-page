import css from './styles/app.sass';
import 'babel-polyfill';

{

  class FaqToggler {

    constructor (targetContainer = 'faqList', contentContainer = 'faqContent', faqOptions = {}) {
      this.targetContainer = targetContainer;
      this.contentContainer = contentContainer;
      this.init(faqOptions);
    }

    init(faqOptions) {
      this.options = this.getOptions(faqOptions);

      this.onTargetClick();
    }

    build() {

      const DOMelements = {
        faqList: document.getElementById(this.targetContainer),
        faqContent: document.getElementById(this.contentContainer)
      }

      return DOMelements;
    }

    onTargetClick() {
      const DOMel = this.build();

      DOMel.faqList.addEventListener('click', (event) => {
        const faqTarget = event.target.dataset.faqTarget || event.srcElement.dataset.faqTarget;

        this.toggleFaq(faqTarget);
      });
    }

    toggleFaq(selected) {
      const targetActiveClass = this.options.listActiveClassName;
      const contentActiveClass = this.options.contentActiveClassName;
      const targetDataAttr = this.options.listDataAttr;
      const contentDataAttr = this.options.contDataAttr;

      const selectedTargetElement = document.querySelector(`[${targetDataAttr}="${selected}"]`);
      const selectedContentElement = document.querySelector(`[${contentDataAttr}="${selected}"]`);

      const sections = document.querySelectorAll(`[${targetDataAttr}]`);
      const contents = document.querySelectorAll(`[${contentDataAttr}]`);

      const hasClass = selectedTargetElement.classList.contains(targetActiveClass);

      function addClass() {
        selectedTargetElement.classList.add(targetActiveClass);
        selectedContentElement.classList.add(contentActiveClass);
      }

      function removeClass() {
        selectedTargetElement.classList.remove(targetActiveClass);
        selectedContentElement.classList.remove(contentActiveClass);
      }

      function closeAll() {
        for (let i = 0; i < sections.length; i++) {

          if (selectedTargetElement.classList.contains(targetActiveClass)) {
            continue;
          }

          sections[i].classList.remove(targetActiveClass);
          contents[i].classList.remove(contentActiveClass);
        }
      }

      closeAll();

      return !hasClass ? addClass() : removeClass();
    }

    getOptions(options) {
      const defaultOptions = {
        listActiveClassName: 'faq__list-item--selected',
        contentActiveClassName: 'faq__item--visible',
        listDataAttr: 'data-faq-target',
        contDataAttr: 'data-faq-id'
      };

      return Object.assign(defaultOptions, options);
    }

  }


  const faq = new FaqToggler();

}
