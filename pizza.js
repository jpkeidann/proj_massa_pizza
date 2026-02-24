
export default class Pizza {
    constructor(diametro, espessura) {
        this.raio = diametro / 2
        this.altura = espessura
        this.densidade = 0.85
    }

    calcularAreaBase() {
        let area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume() {
        let volume = this.calcularAreaBase() * this.altura
        return volume
    }

    //Relacionamento entre volume e a densidade da massa indepente do tamanho
    //Regra de negócio da densidade da massa que é: 0.85 g/cm³
    getPesoUnitario() {
        return this.calcularVolume() * this.densidade
    }
}
