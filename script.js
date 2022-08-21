
//Função do botão Confirmar.

$(document).ready(function(){

    
    //Função do botão Ok
      
    $("#ok").click(function(e) {
        e.preventDefault();

        let opcao = $('#itens :selected').val();

        
        if (opcao == 2 ) {
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
                
                
                
            
        }
        else if (opcao == 3 ) {
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco2'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd132'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd022'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume2'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material2'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco3'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd133'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd023'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume3'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material3'><br> ")
            
        }
        else if (opcao == 4 ) {
           
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco4'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd134'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }
        else if (opcao == 5 ) {
           
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }
        else if (opcao == 6 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            
        }
        else if (opcao == 7 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }
        else if (opcao == 8 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            
        }
        else if (opcao == 9 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }
        else if (opcao == 10 ) {
            
            $("#lab7").prepend("<label >ÚLTIMO PREÇO:</label><input type='number' name='ultpreco1' id='ultpreco1'> <br> ") 
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")

            .prepend("<label >PREÇO:</label><input type='number' name='preco' id='preco1'> <br> ")
            .prepend("<label >ZD13:</label><input type='number' name='zd131' id='zd131'> <br> ")
            .prepend("<label >ZD02:</label><input type='number' name='zd02' id='zd021'> <br> ")
            .prepend("<label >VOLUME TOTAL:</label><input type='text' name='volume' id='volume1'> <br> ")
            .prepend("<label>MATERIAL:</label><input type='text' name='material1' id='material1'><br> ")
            
        }
        
    
        
    })





    $("#confirmar").click(function(e){
        e.preventDefault();

        /* FORMA SALES
        const array = $("#form").serializeArray();

        

        for (item of array) {
            
           $("#resultado").html("<h3>Lista</h3>")
           .append(`<br>${item.nome}:${item.value}`);
            
        }

        */
        let opcao = $('#itens :selected').val();
        

       
       let CGFOR = $("#cgfor").val();
       let COTACAO = $("#cotacao").val();
       let BP = $("#bp").val();
       let SEGMENTO = $("#segmento").val();
       let MIX = $("#mix").val();
       let MATERIAL = $("#material").val();
       let VOLUME = $("#volume").val();
       let ZD02 = $("#zd02").val();
       let ZD13 = $("#zd13").val();
       let PRECO = $("#preco").val();
       let ULTPRECO = $("#ultpreco").val();
       let PAGAMENTO = $("#pagamento").val();
       let MOTIVO = $("#motivo").val();


        $("#resultado").html(`CGFOR: ${CGFOR}`)
       .append(`<br>COTAÇÃO: ${COTACAO}`)
       .append(`<br>BP: ${BP}`)
       .append(`<br>SEGMENTO: ${SEGMENTO}`)
       .append(`<br>MIX: ${MIX}`)
       .append(`<br>MATERIAL: ${MATERIAL}`)
       .append(`<br>VOLUME: ${VOLUME}`)
       .append(`<br>ZD02: ${ZD02}%`)
       .append(`<br>ZD13: ${ZD13}%`)
       .append(`<br>PREÇO: ${PRECO}`)
       .append(`<br>ÚLTIMO PREÇO: ${ULTPRECO}`)
       .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
       .append(`<br>MOTIVO: ${MOTIVO}`)

       if (opcao == 2) {

        
       
        let material1 = $("#material1").val();
        let volume1 = $("#volume1").val();
        let zd021 = $("#zd021").val();
        let zd131 = $("#zd131").val();
        let preco1 = $("#preco1").val();
        let ultpreco1 = $("#ultpreco1").val();

        $("#resultado").append(`<br>MATERIAL: ${material1}`)
        .append(`<br>VOLUME: ${volume1}`)
        .append(`<br>ZD02: ${zd021}`)
        .append(`<br>ZD13: ${zd131}`)
        .append(`<br>PREÇO: ${preco1}`)
        .append(`<br>ÚLTIMO PREÇO: ${ultpreco1}`)
        .append(`<br>COND. PAGAMENTO: ${PAGAMENTO}`)
        .append(`<br>MOTIVO: ${MOTIVO}`)
        
       
      }

      
     //  .append(`<br>PAGAMENTO: ${PAGAMENTO}`)
     //  .append(`<br>MOTIVO: ${MOTIVO}`)


      
       
      
       //.append(`<br>PAGAMENTO: ${PAGAMENTO}`)
       //.append(`<br>MOTIVO: ${MOTIVO}`)
       

       
       

    
       

      
        
      
      

        
      
       

    });

    

})

    




  


  
