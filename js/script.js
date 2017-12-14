$('#automateButton').click(ajax);

function ajax(){
        $.ajax({
            url : 'https://ephraimb.github.io/autisticMinyanAutomator/index.htmljs/redirect.js',
            type : 'POST',
            data : $('#form1').serialize(),
            success: function(data){
                $('#resultado').html("<progress value='20' max='100'>20% done</progress>");
                ajax2();
            }
        });
}

function ajax2(){
        $.ajax({
          url : 'https://ephraimb.github.io/autisticMinyanAutomator/index.htmljs/redirect.js',
          type : 'POST',
          data : $('#form2').serialize(),
          success: function(data){
              $('#resultado').html("<progress value='40' max='100'>40% done</progress>");
              ajax3();
          }
      });
}

function ajax3(){
        $.ajax({
          url : 'https://ephraimb.github.io/autisticMinyanAutomator/index.htmljs/redirect.js',
          type : 'POST',
          data : $('#form3').serialize(),
          success: function(data){
              $('#resultado').html("<progress value='60' max='100'>60% done</progress>");
              ajax4();
          }
      });
}

function ajax4(){
        $.ajax({
          url : 'https://ephraimb.github.io/autisticMinyanAutomator/index.htmljs/redirect.js',
          type : 'POST',
          data : $('#form4').serialize(),
          success: function(data){
              $('#resultado').html("<progress value='80' max='100'>80% done</progress>");
              ajax5();
          }
      });
}

function ajax5(){
        $.ajax({
          url : 'https://ephraimb.github.io/autisticMinyanAutomator/index.htmljs/redirect.js',
          type : 'POST',
          data : $('#form5').serialize(),
          success: function(data){
              $('#resultado').html("<progress value='100' max='100'>100% done</progress>");
          }
      });
}
