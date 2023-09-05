"use strict";
class Musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
class Playlist {
    constructor() {
        this.musicas = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo: " + this.musicas[this.indiceAtual].titulo + '-'
                + this.musicas[this.indiceAtual].artista;
        }
        else {
            return "A playlist tá vazia :(";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Música pausada!";
        }
        else {
            return "Nenhuma música sendo reproduzida!";
        }
    }
    proxima() {
        if (this.musicas.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.musicas.length;
            return this.reproduzir();
        }
        else {
            return "A playlist tá vazia :(";
        }
    }
}
const musica1 = new Musica("Flamingos", "Baco Exu do Blues", 500);
const musica2 = new Musica("Lunchbox Friends", "Melanie Martinez", 400);
const musica3 = new Musica("Star Shopping", "Lil Peep", 300);
const musica4 = new Musica("I Wanna Yours", "Artic Monkeys", 200);
const minhaPlaylist = new Playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
minhaPlaylist.adicionarMusica(musica3);
minhaPlaylist.adicionarMusica(musica4);
console.log(minhaPlaylist.reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
