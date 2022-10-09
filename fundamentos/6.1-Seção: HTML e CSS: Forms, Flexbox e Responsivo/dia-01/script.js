
const participarConcursoTrybe = document.getElementById('botao1');
const checkbox = document.getElementById('ofertas1');
participarConcursoTrybe.disabled = true;


    checkbox.addEventListener('click', ()=> {
      participarConcursoTrybe.disabled = false;
         }
       
      )
      participarConcursoTrybe.addEventListener('click', verify);

      function verify() {

        const nameSize = document.getElementById('name').value.length;
        const emailSize = document.getElementById('e-mails').value.length;
        const textAraSize = document.getElementById('por que').value.length;
    
               if(nameSize<10 || nameSize>40 || emailSize<10 || emailSize>50 || textAraSize>500){
          alert ('Dados inválidos')
          
                } 
                else{
                  alert('Dados enviados com sucesso!! Obrigado por participar do concurso TrybeTrip');
                }
    
    
      }
  
      



  