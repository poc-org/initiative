  
  var varRoleDetailPDFlocation ;
alert("test Sahkeel");
  $(document).ready(function() {
                $.ajax({
                type: "GET" ,
                //url: "https://raw.githubusercontent.com/poc-org/initiative/itg/resource/config/config.xml" ,                
                url: "../shindig/config/config.xml" ,                
                dataType: "xml" ,
                success: function(xml) {
                    $(xml).find('configurationLink').each(function() {
                        varRoleDetailPDFlocation =   $.trim($(this).find('pdfrolefile').text());

                    });
                },
            });
        });
