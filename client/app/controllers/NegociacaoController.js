class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView();
    }
    
    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor = 0;
        this._inputData.focus();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}