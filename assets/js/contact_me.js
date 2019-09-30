var valdiv = 0
var calc_3 = 0
var val1
$document.ready(function () {
    $('.submit').click(function (event) {
        
        var name = $('.name').val()
        var mail = $('.mail').val()
        var message = $('.message').val();
        var correct = false;
        
        
        if(mail.length > 5 && mail.includes('@') && mail.includes('.') && message.length > 5){
            correct = true
        }
        else{
            correct = false
            $('.mail').css({"background-color":"rgba(144,46,62,.4)"});
            event.preventDefault()
        }      
        
        
    })
    $('.calc').click(function (event) {
        val1 = $('.val1').val()
        var val2 = $('.val2').val()
        var val3 = $('.val3').val()
        
        if(val1 != '' && val2 != '' && val3 != ''){
            var calc = (val1*val2*val3)/100
            valdiv = calc
            document.getElementById('sol1').innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calc)
            document.getElementById('id1').value = parseInt(val1).toLocaleString()
            document.getElementById('id2').value = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val2)
            document.getElementById('id3').value = val3 + " %"
        }
     })
    
     $('.calc1').click(function (event) {
        var val4 = $('.val4').val()
        var val5 = $('.val5').val()
        var val6 = $('.val6').val()
         
       if(val4 != '' && val6 != ''){
            var calc_1 = ((val5*val6*valdiv)/10000) 
            //console.log(calc_1)
            //document.getElementById('sol3').innerHTML = calc_1
            var calc_2 = (val4*val6*valdiv)/10000
            //console.log(calc_2)
           // document.getElementById('sol2').innerHTML = calc_2
            calc_3 = calc_1 - calc_2
           // console.log(calc_3)
            document.getElementById('sol4').innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calc_3)
            document.getElementById('id4').value = val4 + " %"
           document.getElementById('id5').value = val5 + " %"
           document.getElementById('id6').value = val6 + " %"
        }
     })
    
         $('.calc2').click(function (event) {
             var g5 = val1 //G5    
             var g26 = 0
             var o11 = 0
             var g30 = parseInt(830+2500*Math.exp(-2500/g5))
             if(g5 != ''){
                 if(g5 < 1000){
                     g26 = g5*1
                 }
                 else{
                     g26 = g30
                 }
                 
             }
             if(g26 != ''){
                 if(g26 < 1000){
                     o11 = g26*12
                 }
                 else{
                     o11 = g30*12
                 }
                 document.getElementById('sol5').innerHTML = o11 + " €/año"
                 document.getElementById('sol6').innerHTML = parseInt(o11/g5) + " €/cliente/año"
                 document.getElementById('sol7').innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calc_3-o11)
                 document.getElementById('sol8').innerHTML = parseFloat((calc_3-o11)/o11).toFixed(2)
             }
        
     })
})
