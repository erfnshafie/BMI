const form = document.querySelector('form');

form.addEventListener('submit' , function (event){
    event.preventDefault();


    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if (height.trim() ==="" || weight.trim() === "") {
        alert('لطفا کامل کنید');

        return false;
    }
    height = parseInt(height);
    weight = parseInt(weight);
    if (isNaN(height) || isNaN(weight)) {
        alert("لطفا عدد وارد کنید")
    return false;
    }
    if ( weight <0 || height<0){
        alert('قد و وزن بزرگ تر از صفر باشد')
        return false ;
    }
   
    height = height / 100 ;
    let result = weight / (height * weight)
result = result.toFixed(2); 
    document.querySelector('#result').innerHTML = result;
})