$( document ).ready(function() {
    console.log('Ready to load the file');
  
    $.ajax({

      url: "docs/laposte_hexasmal.csv",
      type : 'GET',

      statusCode: {
        404: function() {
          alert( "ressources not found" );
        }
      },
     
      // Expect a `text` back from server
      dataType: 'text',

      success: function(response){
        //console.log(response);
        CreateArrayZipCode(response);
        //let data_zip_code = $('#result').html(JSON.stringify(data)); // Afficher les données en dur
      },
      error : function(jqXHR, textStatus){
        console.log(jqXHR);
        console.log(textStatus);
        alert("Il s'est produit une erreur");
      }
    });


    // Récupération du Code Postal écrit dans le input
    let zip_code = $("#zip_code").change(function(){
      zip_code = $(this).val();
      //console.log(zip_code);
      zip_code = parseInt(JSON.stringify(zip_code));
      console.log(typeof zip_code);
    });

    zip_code = JSON.stringify(zip_code);
    console.log(typeof zip_code);

    
    //let zip_code = 22400;




    // Creation du tableau en gérant les données CSV
    function CreateArrayZipCode(data_CSV_doc){
      var data_city = data_CSV_doc.split("\r\n");
      //console.log('XXXXXXXXXXXXXXXXXX')
      //console.log(data_city); // BON
      //$('#result').html(JSON.stringify(data_city));

      var array_html_zip_code = '<table class="table table-bordered table-striped">';
      ///console.log(array_html_zip_code);

      for(var count = 0; count<data_city.length; count ++){ //récupération des lignes
        var cell_column= data_city[count].split(";");
        //console.log(cell_column); //BON
        array_html_zip_code += '<tr>';
        //Recupération des colonnes

        for(var cell_column_count=0; cell_column_count<cell_column.length; cell_column_count++){ 
          
          if (count == 0){ // 1ere ligne avec les indicateurs(code postal, commune, ...)
            array_html_zip_code+='<th><i>'+cell_column[cell_column_count]+'</i></th>'
            //$('#result').html(JSON.stringify(array_html_zip_code)); //TEST
          
          }
          else{
            if (cell_column[2]==zip_code){

            array_html_zip_code+='<td>'+cell_column[cell_column_count]+'</td>';
            //console.log(cell_column);
            //console.log("XXXXXXXXXXXXXXXXXXXXXXX")
            //console.log(array_html_zip_code);
            $('#result').html(JSON.stringify(array_html_zip_code));
            }
            
          }
        }
      }
    };



})  

