function a(){
    document.write('Web жобалау')
}
a()
 function name(){
    name = prompt('Атыңызды енгізіңіз')
    if (name){
        alert('Қайта оралуыңызбен' + ' '+ name)
    }
 }

 name()

 function ab(a , b){
    document.write('<br>')
    document.writeln(a + b)
 }
 ab(4,5)

 function b(a){
    document.write('<br>')
    if (a % 5 == 0) {
        document.writeln('YES')
    }
    else{
        document.writeln('NO')
    }
 }
 b(5)

 function ww(a){
    document.write('<br>')
    if (a == a.reversed()){
        document.writeln('YES')
    }
    else{
        document.writeln('NO')
    }
 }

 ww(101)


 var a = document.getElementById('Juz40');
    function mover(){
    a.style.backgroundColor="blue";
    }
    function mout(){
    a.style.backgroundColor="white";
    }