
let message = prompt("Привіт(Привіт або Пака)");
if(message == "привіт"){
  let answer = prompt("Хочеш повідповідати на мої запитання?(так або ні)");
  if(answer == 'так'){
      let kakaxa = prompt('ти мав сьогодні хороший день?(так або ні)')
      if(kakaxa == 'так' || kakaxa == 'ні'){
        let poco = prompt('а з рештою мені не цікаво. Тобі цікаво зі мною розмоляти?(так або ні)');
        if (poco == 'так'){
            
            let zzz = prompt('Ураааааааааааааааааааааа!!!! Хочеш зі мною попрощатися? ');
            if (zzz == 'так'){

            }else {
                alert('^-^')
            }
        }else{
            alert('добре папа');
        }

      }
      else{
        alert('error');
      }
  }else{
      alert('добре папа');
  }
}else{
    alert('(<_>)');
}