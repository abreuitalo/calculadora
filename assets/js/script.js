function calculadora() {
   return {
      //atributos
      display: document.querySelector('.display'),
      calc: document.querySelector('.calculadora'),

      //metodos
      inicia() {
         this.cliqueBotoes();
      },

      cliqueBotoes() {
         this.calc.addEventListener('click', e => {
            const elemento = e.target;
            console.log(elemento.innerText);

            if (elemento.classList.contains('btn-num'))
               this.btnParaDisplay(elemento.innerText);

            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.delete();
            if (elemento.classList.contains('btn-eq')) this.conta();
         });
      },

      btnParaDisplay(texto) {
         this.display.value += texto;
      },

      clear() {
         this.display.value = '';
      },

      delete() {
         this.display.value = this.display.value.slice(0, -1);
      },

      conta() {
         try {
            const conta = eval(this.display.value);

            if (!conta) {
               alert('Conta Inválida');
               return;
            }

            this.display.value = conta;
         } catch (e) {
            alert('Conta Inválida');
            return;
         }
      }
   };
}

const calc = calculadora();
calc.inicia();
