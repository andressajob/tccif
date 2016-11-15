'use strict'


$( document ).ready(function() {
    $(".success").click(function() {
        window.document.location = $(this).data("href");

    });


   $("#teste").on('click', ".salvar", function (e) {

        $(".meu-modal").modal("show").on("click", "#btn-alteracoes", function () {
        });
    });
});

