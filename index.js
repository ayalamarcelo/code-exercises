function mostrarPrecio () {
    const tipoDeSeguro = document.getElementById("tipoDeSeguro");
    const precioField = document.getElementById("precio");
    
    const selectedOption = tipoDeSeguro.options[tipoDeSeguro.selectedIndex];
    const selectedValue = selectedOption.value;
    
    if (selectedValue === "basico") {
        precioField.value = "Precio: $500";
    } else if (selectedValue === "intermedio") {
        precioField.value = "Precio: $1000";
    } else if (selectedValue === "premium") {
        precioField.value = "Precio: $1500";
    }
}