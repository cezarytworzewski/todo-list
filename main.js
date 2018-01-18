// - (UI-user interface) input
// - (UI) lista - dodawanie elementów listy
// - (Logic) manager - będzie łączył input z listą

class Manager {
  constructor() {
    const $list = document.querySelector('.todo-list');
    const $input = document.querySelector('.todo-list-input');
    this.$input = $input;
    this.$list = $list;
  }

  setup() {
    const self = this;
    this.$input.addEventListener('keydown', function (event) {
      if (event.keyCode === 13) {
        self.render();
      }
    });
  }

  render() {
    const value = this.$input.value;
    console.log(value);
    const $li = document.createElement('li');
    $li.textContent = value;
    this.$list.appendChild($li);
    this.$input.value = '';
  }
}

window.addEventListener('load', function () {
  const manager = new Manager(); // podczas tworzenie obiektu Manager wywołuje
  //konstruktor tej klasy
  manager.setup();

});
