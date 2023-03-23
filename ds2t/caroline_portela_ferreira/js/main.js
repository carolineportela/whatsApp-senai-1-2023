'use strict'


export const getDadosWhats = async (telefonePerfil) => {

    const url = `http://localhost:8080/v1/whatsapp/perfil/telefone/${telefonePerfil}`

    // o fetch faz a requisicao pela url
    const response = await fetch(url)

    //await é o que aguarda a promessa,ele aguarda pq nem toda promessa é comprida.
    const dado = await response.json()

    return dado

    

}