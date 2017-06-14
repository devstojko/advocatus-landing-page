import css from './styles/app.sass';

console.log('index page');


const listItem = document.querySelector('.faq__list-item');

listItem.addEventListener('click', () => {
  listItem.classList.toggle('faq__list-item--selected');
});


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  nameAge() {
    console.log(this.name + this.age);
  }
}


let nemanja = new Person('nemanja', 25);

nemanja.nameAge();
