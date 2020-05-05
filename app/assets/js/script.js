$( document ).ready(function() {
    console.log('Ready to load the file');
  
    let data_zip_code = $.ajax({

      url: "docs/laposte_hexasmal.csv",
      type : 'GET',

      statusCode: {
        404: function() {
          alert( "ressources not found" );
        }
      },
     
      // Expect a `text` back from server
      dataType: 'text',

      success: function(data){
        //return $('#result').html(JSON.stringify(data)); // Afficher les données en dur
      },
      error : function(jqXHR, textStatus){
        console.log(jqXHR);
        console.log(textStatus);
        alert("Il s'est produit une erreur");
      }
    });

    let zip_code = $("#zip_code").change(function(){
      zip_code = $(this).val();
      console.log(zip_code);
      return zip_code;
    });

    function CreateArrayZipCode(data_zip_code){
      var data_city = this.split('/\r?\n|\r');
      var array_zip_code = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<data_city.length; count ++){
        var cell_column= data_city[count].split(";");
        console.log(cell_column);
        array_zip_code += '<tr>';
        for(var cell_column_count=0; cell_column_count<cell_column.length; cell_count++){
          if (count==0){
            array_zip_code+='<th><i>'+Cell_column[cell_column_count]+'</i></th>'
          }
          /*else{
            if (cell_column[2]==zip_code){


            }
          }*/
        }
      }
    };


})  

