const getTamplate = () =>{ return `
<div class="select__input" data-type='input'>
  <span>text</span> 
  <i class="fas fa-chevron-down" data-type = 'arrow'></i>
</div>

<div class="select__dropdown">
  <ul class="select__list">
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
    <li class="select__item">1</li>
  </ul>
</div>`}

export class Select{
    constructor(selector, options){
      this.$el = document.querySelector(selector);

    this.#render();
    this.#setup();
    
  }

  #render(){
    this.$el.classList.add('select')
    this.$el.innerHTML = getTamplate()
  }

  #setup(){
    this.сlickHandler = this.clickHandler.bind(this); /////BIND DONT KNOW WHAT IS IT
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow =this.$el.querySelector('[data-type="arrow"]')
  }
  clickHandler(event){
   const {type} =event.target.dataset;
    if (type === "input"){
      this.toggle()
    }
  }

  get isOpen(){
    return this.$el.classList.contains("open")    
  }  

  toggle(){
    this.isOpen ? this.close() : this.open()
  }

  open(){
    this.$el.classList.add('open');

  }

  close(){
    this.$el.classList.remove('open')
  }

  destroy(){
    this.$el.removeEventListener('click', this.clickHandler)
  }
  
}

