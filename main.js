// - (UI-user interface) input
// - (UI) lista - dodawanie elementów listy
// - (Logic) manager - będzie łączył input z listą

class Manager {
  constructor() {
    const $list = document.querySelector('.todo-list');
    // const $input = document.querySelector('.todo-list-input');
    // poniższa wartość jest również dobrze zdefiniowana

    // 'this.$input' to nowo utworzona zmienna, czyli dodanie przez
    //referencje klasy '.todo-list-input' z modelu DOM.
    this.$input = document.querySelector('.todo-list-input');
    this.$list = $list;
  }

  setup() { //funkcja, która wywoła się, że po kliknięciu przycisku Enter
            //przypisze nam funkcje render(), która dodaje wartość do listy
    const self = this; //przypisujemy this, jako self

    //odwołuje się przez referencje jako 'this.$input' i nakazuje, aby
    //przycisk INPUT nasłuchwiał na wciśnięcie przyciska 'keydown'
    this.$input.addEventListener('keydown', function (event) {
      //tutaj nasluchujemy, że jeśli naciśnimy Enter
      if (event.keyCode === 13) {

        //to wywołamy funkcje render,
        self.render();
      }
    });
  }

  render() {

    //funkcja render tworzy zmienną wartość (value)--> wskazuje, że konkretny
    // input, czyli 'this.$input' oczekuje wartości 'this.$input.value;' , gdzie
    //value to utworzenie tak na prawdę  value w modelu DOM.
    const value = this.$input.value;
    console.log(value);

    //poniżej tworzę stałą $li, która dodaje/tworzy elementy 'li'
    const $li = document.createElement('li');

    //poniżej pobieramy/ustawiamy wartość tekstową na value
    $li.textContent = value;

    //poniżej, dzięki metodzie appendChil wstawiamy dynamicznie element 'li'
    this.$list.appendChild($li);

    // domyślnie wartość inputa to pusty string
    this.$input.value = '';
  }
}

// nasłuchiwanie przez przeglądarkę na zdarzenie
window.addEventListener('load', function () {
  const manager = new Manager(); // podczas tworzenie obiektu Manager wywołuje
  //konstruktor tej klasy
  manager.setup();

});
