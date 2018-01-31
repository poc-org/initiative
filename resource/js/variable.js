  
  var varRoleDetailPDFlocation ;
alert("Varaible js File loading  done");



  $(document).ready(function() {
            var nm;
            $.ajax({
                type: "GET" ,
                //url: "https://raw.githubusercontent.com/poc-org/initiative/itg/resource/config/config.xml" ,
               url: "config/config.xml" ,
                dataType: "xml" ,
                success: function(xml) {
                    $(xml).find('configurationLink').each(function() {
                        varRoleDetailPDFlocation =   $.trim($(this).find('pdfrolefile').text());
                              alert(varRoleDetailPDFlocation);          
                    });
                },
            });
        });
