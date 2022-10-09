

const botaoUm = document.getElementById('botao1').addEventListener('click',verify);

  function verify() {

    const nameSize = document.getElementById('name').value.length;
    const emailSize = document.getElementById('e-mails').value.length;
    const textAraSize = document.getElementById('por que').value.length;

           if(nameSize<10 || nameSize>40 || emailSize<10 || emailSize>50 || textAraSize>500){
      alert ('Dados inválidos')
      
    } 


  }