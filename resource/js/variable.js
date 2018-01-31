  
  var varRoleDetailPDFlocation ;
alert("Varaible js File loading Shakeel");
  $(document).ready(function() {
				$.get('https://raw.githubusercontent.com/poc-org/initiative/itg/resource/js/variable.js', function(d){
					$(d).find('configurationLink').each(function(){
							var $configurationLink = $(this)
							  varRoleDetailPDFlocation = $configurationLink.find('pdfrolefile').text();
							 
                          alert(varRoleDetailPDFlocation);
                    });
           
            });
        });
