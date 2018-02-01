  
  var varRoleDetailPDFlocation ;
var urlPDF = 'config/config.xml';
alert("Tesring");
  $(document).ready(function() {
                $.ajax({
                type: "GET" ,
                //url: "https://raw.githubusercontent.com/poc-org/initiative/itg/resource/config/config.xml" ,
                url: urlPDF,
                dataType: "xml" ,
                success: function(xml) {
                    $(xml).find('configurationLink').each(function() {
                        varRoleDetailPDFlocation =   $.trim($(this).find('pdfrolefile').text());

                    });
                },
            });
        });
