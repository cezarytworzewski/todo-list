// - (UI-user interface) input
// - (UI) lista - dodawanie elementów listy
// - (Logic) manager - będzie łączył input z listą
const ENTER_KEY_CODE = 13;

class Manager {
  constructor() {
    this.$list = document.querySelector('.todo-list');
    this.$input = document.querySelector('.todo-list-input');
    this.$button = document.querySelector('.add-button-to-list');
  }

  setup() {
    this.$input.addEventListener('keydown', (event) => {
      if (event.keyCode === ENTER_KEY_CODE) {
        this.render();
      }
    });
    this.$button.addEventListener('click', () => this.render());
  }

  render() {
    const $li = document.createElement('li');
    $li.textContent = this.$input.value;
    this.$list.appendChild($li);
    this.deleteTask($li);
    this.$input.value = '';
  }

  deleteTask($li) {
    const $x = document.createElement('button');
    $x.style.border = 'white solid';
    $x.textContent = '    x';
    $li.appendChild($x);
    $x.addEventListener('click', function () {
      $li.parentNode.removeChild($li);
    });
  }
}
