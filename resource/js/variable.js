  
  var varRoleDetailPDFlocation ;
alert("test 123456");
  $(document).ready(function() {
                $.ajax({
                type: "GET" ,
                //url: "https://raw.githubusercontent.com/poc-org/initiative/itg/resource/config/config.xml" ,                
                url: "config.xml" ,                
                dataType: "xml" ,
                success: function(xml) {
                    $(xml).find('configurationLink').each(function() {
                        varRoleDetailPDFlocation =   $.trim($(this).find('pdfrolefile').text());

                    });
                },
            });
        });
