const enviarForm = document.getElementById('btn-enviar');
const campos = document.querySelectorAll('.campo');
const txtCamposObrigatorios = document.querySelectorAll('.ativo');

enviarForm.addEventListener('click', () => {
    checarCampos();
})

function checarCampos() {

    campos.forEach(function (input, index) {

        if (input.value !== "") {
            input.classList.remove("campo-vazio");
            input.classList.add("campo-preenchido");
            txtCamposObrigatorios[index].style.display = 'none';


        } else {
            input.classList.remove("campo-preenchido");
            input.classList.add("campo-vazio");
            txtCamposObrigatorios[index].style.display = 'block';

        }
    });
}