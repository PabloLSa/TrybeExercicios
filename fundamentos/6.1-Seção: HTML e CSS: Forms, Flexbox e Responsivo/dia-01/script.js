

function textInputValidation() {
    const email = document.getElementById("e-mails" ).value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.getElementById("name" ).value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.getElementById("por que" ).value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }


function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }
  





    
  