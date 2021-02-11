new Vue({
    el: "#app",
    data: {
        tipo: "",
        text: '',
        a: true
    },
    methods: {
        gerarBarra() {
            console.log(this.tipo)
            if (this.text.trim() === "" || this.tipo.trim() === "") {
                alert("Error")
                this.a = true

            } else if (this.tipo === "pharmacode") {
                this.a = true
                JsBarcode("#barcode", this.text, {
                    format: "pharmacode",
                    lineColor: "#0aa",
                    width: 4,
                    displayValue: false
                });
            } else if (this.tipo === "codabar") {
                this.a = false
                JsBarcode(".barcode").init();
            } else {
                this.a = true
                JsBarcode("#barcode", this.text, {
                    formato: this.tipo
                });
            }
        }
    }
})
