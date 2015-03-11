$(function() {
    var $provincias = $('#provincias');
    var $municipios = $('#municipios');

    $.getJSON('../servidor/cargaProvinciasJSON.php', null,
        function(provincias, textStatus, jqXHR) {
            var options = [];

            for (var cp in provincias) {
                options.push(new Option(provincias[cp]));
            }

            $provincias.append(options);
        });

    $provincias.on('change', function(e) {
        var cp = $provincias.val();

        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method: 'POST',
            data: {
                provincia: cp
            },
            datatype: 'json',
            success: function(municipios) {
                $municipios.children().remove();

                var options = [];

                for (var cp in municipios) {
                    options.push(new Option(municipios[cp]));
                }

                $municipios.append(options);

                console.log(municipios);
            }
        });
    });
});
