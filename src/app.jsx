import React from "react";
import CardOfProducts from "./components/cards";
import paiRicoPaiPobre from './assets/img/cover-pai-rico-pai-pobre.jpg'
import ansiedade from './assets/img/ansiedade.png'
import './app.scss'
import './common/index.scss'
import HeaderPagePrincipal from "./components/headerPage";

export default function PrincipalPage(){
    const products =[
        {
            name: "Pai rico pai pobre"
            ,description: `Descubra o segredo para alcançar a independência financeira com o best-seller "Pai Rico, Pai Pobre"! ` //para alcançar a independência financeira com o best-seller "Pai Rico, Pai Pobre"! Neste livro inspirador e transformador, o autor Robert T. Kiyosaki compartilha suas valiosas lições aprendidas com dois pais - um rico e outro pobre - que moldaram sua visão sobre o dinheiro e os investimentos. Através de histórias cativantes e insights perspicazes, você aprenderá a repensar sua abordagem financeira e desenvolver habilidades essenciais para construir riqueza.`
            ,pathToSite: "https://sun.eduzz.com/1962851?a=26087477"
            ,pathToImg: paiRicoPaiPobre
        },
        {
            name: "O fim da ansiedade: O segredo bíblico"
            ,description: `Aprenda a controlar a sua ansiedade e assim, se livrar dos mals trapilhos do dia a dia! ` //para alcançar a independência financeira com o best-seller "Pai Rico, Pai Pobre"! Neste livro inspirador e transformador, o autor Robert T. Kiyosaki compartilha suas valiosas lições aprendidas com dois pais - um rico e outro pobre - que moldaram sua visão sobre o dinheiro e os investimentos. Através de histórias cativantes e insights perspicazes, você aprenderá a repensar sua abordagem financeira e desenvolver habilidades essenciais para construir riqueza.`
            ,pathToSite: "https://sun.eduzz.com/1731159?a=26087477"
            ,pathToImg: ansiedade
        }
    ]
    return(
        <main className="princpalPage">
            <header>
                <HeaderPagePrincipal/>
            </header>
            <div className="msg-sell">
                <h2>Clique no link abaixo e adquira já seu livro ↓</h2>
            </div>
            <div className="cards-princpal-page">
                    {products.map(productsInfo =>
                        <CardOfProducts
                            name={productsInfo.name}
                            description={productsInfo.description}
                            pathToSite={productsInfo.pathToSite}
                            pathToImg={productsInfo.pathToImg}
                            key={productsInfo.name}
                        />
                    )}
            </div>
        </main>
    )
}