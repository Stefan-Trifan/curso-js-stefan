document.getElementById('toggleButton').addEventListener('click', function () {
    const scripts = document.querySelectorAll('script');

    scripts.forEach(function (script) {
        if (script.classList.contains('inactivo')) {
            script.remove(); // Elimina la etiqueta <script> con la clase "inactivo"
        } else if (script.classList.contains('activo')) {
            const scriptContent = script.textContent;
            const newScript = document.createElement('script');
            newScript.textContent = scriptContent;
            document.body.appendChild(newScript); // Agrega un nuevo script activo al final del body
        }
    });
});