function Carro(marcaAtribuida, precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
};


const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 5000);


function Carro2(marcaAtribuida, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marcaAtribuida;
    this.preco = precoFinal;
};

const ferrari = new Carro2('Ferrari', 5000);