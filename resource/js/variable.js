  
  var varRoleDetailPDFlocation ;

alert("Testing with path");

  $(document).ready(function() {
        pathURL= "config/config.xml"
            $.ajax({
                type: "GET" ,
                //url: "https://raw.githubusercontent.com/poc-org/initiative/itg/resource/config/config.xml" ,
               url: pathURL,
                dataType: "xml" ,
                success: function(xml) {
                    $(xml).find('configurationLink').each(function() {
                        varRoleDetailPDFlocation =   $.trim($(this).find('pdfrolefile').text());

                    });
                },
            });
        });
