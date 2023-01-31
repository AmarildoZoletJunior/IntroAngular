export module LivroJson {

    export interface Categoria {
        tipoCategoria: string;
        id: number;
    }

    export interface Autor {
        nome: string;
        id: number;
    }

    export interface LivroSolo {
        id: number;
        nome: string;
        dataLancamento: Date;
        quantidadePagina: number;
        categoria: Categoria;
        autor: Autor;
        isbn: number;
    }

}

