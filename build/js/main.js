$(document).ready(function() {

  var downloadLink = {
    'mac': 'ripple-client.dmg',
    'win': 'ripple-client.zip',
    'linux32': 'ripple-client32.tar',
    'linux64': 'ripple-client64.tar'
  };

  $('#download-btn').on('click', function() {
    var selected = $('input[name=optionsRadios]:checked').val();
    console.log(selected);

    if (selected === 'mac') {
      document.getElementById('download-btn').action = downloadLink.mac;
    } else if (selected === 'win') {
      document.getElementById('download-btn').action = downloadLink.win;
    } else if (selected === 'linux32') {
      document.getElementById('download-btn').action = downloadLink.linux32;
    } else {
      document.getElementById('download-btn').action = downloadLink.linux64;
    }
  });
});