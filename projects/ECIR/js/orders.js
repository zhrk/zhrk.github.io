$(document).ready(function() {
  $('#myTable').DataTable({
    'searching': false,
    'filtering': false,
    'lengthChange': false,
    'info': false,
    'pageLength': 25,
    'ordering': false
  });

  var layoutStyle = 'grid';

  function changeLayout() {
    document.querySelector('.orders__toggler').classList.toggle('orders__toggler--list');

    switch (layoutStyle) {

      case ('grid'):
        layoutStyle = 'list';
        document.querySelector('.orders__list').classList.remove('orders__list--visible');
        document.querySelector('.orders-table').classList.add('orders-table--visible');
        break;

      case ('list'):
        layoutStyle = 'grid';
        document.querySelector('.orders-table').classList.remove('orders-table--visible');
        document.querySelector('.orders__list').classList.add('orders__list--visible');
        break;

    }

  }

  document.querySelector('.orders__toggler').addEventListener('click', changeLayout);




  var table = $('#myTable').DataTable();

  var navBtns = document.querySelectorAll('.orders-table__lenght > nav > div');

  for (var i = 0; i < navBtns.length; i++) {
    navBtns[i].addEventListener('click', function(event){
      for (var j = 0; j < navBtns.length; j++) {
        navBtns[j].classList.remove('active');
      }
      event.target.classList.add('active');
    })
  }

  document.getElementById('l_25').addEventListener('click', function() {
    table.page.len(25).draw();
  });
  document.getElementById('l_50').addEventListener('click', function() {
    table.page.len(50).draw();
  });
  document.getElementById('l_100').addEventListener('click', function() {
    table.page.len(100).draw();
  });


  /*$( ".orders__inner" ).append( $( "#myTable_length" ) );*/




});