  
  var varRoleDetailPDFlocation ;
  $(document).ready(function() {
				$.get('../config/config.xml', function(d){
					$(d).find('configurationLink').each(function(){
							var $configurationLink = $(this)
							  varRoleDetailPDFlocation = $configurationLink.find('pdfrolefile').text();
							 
                          alert(varRoleDetailPDFlocation);
                    });
           
            });
        });
