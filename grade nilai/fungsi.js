function rata2 () {
    var nilai1 = parseFloat(document.getElementById('nilai1').value);
    var nilai2 = parseFloat(document.getElementById('nilai2').value);
    var nilai3 = parseFloat(document.getElementById('nilai3').value);
    var nilai4 = parseFloat(document.getElementById('nilai4').value);
    var hasil  = document.getElementById('hasil');
    var grade = document.getElementById('grade');

    var nilaiRata2 = parseInt((nilai1 + nilai2 + nilai3 + nilai4) /4);
        hasil.innerHTML= nilaiRata2 ;

    if (nilaiRata2 >=90) {
        grade.innerHTML = "<h1>A</h1>" 
        grade.style.color = 'green'  
    }else if (nilaiRata2 >= 80) {
        grade.innerHTML = "<h1>B</h1>"
        grade.style.color = 'blue'
    }else if (nilaiRata2 >= 70 ){
        grade.innerHTML = "<h1>C</h1>"
        grade.style.color = 'yellow'
    }else if (nilaiRata2 >= 50 ) {
        grade.innerHTML = "<h1>D</h1>"
        grade.style.color = 'red'
    }else {
        grade.innerHTML = "<p>Remidial<p>"
        grade.style.color = 'red'
    }
    
};
