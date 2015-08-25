$(document).ready(function() {
    var t = $('#example').DataTable({
        "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.8/i18n/Spanish.json"
            }
           } );
    var counter = 1;

    $('#addRow').on( 'click', function () {
        t.row.add( [
           '1',
           '2',
           '002-0540-221',
           'Teclado',
            '65,000',
            '130,000'
        ] ).draw();
        
         t.row.add( [
           '2',
           '2',
           '002-0222-005',
           'Mouse',
            '25,000',
            '50,000'
        ] ).draw();

        counter++;
    } );
 
    // Automatically add a first row of data
    $('#addRow').click();
} );