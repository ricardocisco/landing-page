import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterBox = styled.div`
    padding: 0 22px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f7;
`

const FooterSection = styled.section`
    display: flex;
    padding: 17px 0 11px;
    max-width: 980px;
    margin: 0 auto;
    @media (max-width: 764px) {
        width: 100%;
    }
`

const FooterList = styled.ul`
    border-bottom: 1px solid #d2d2d7;
`

const FooterLi = styled.li`
    color: #6e6e73;
    font-size: 12px;
    margin: 10px;
    list-style: none;
    letter-spacing: -.01em;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #6e6e73;
    border-bottom: 1px solid;
`

// Parte da navegação 

const NavFooter = styled.nav`
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto;
    @media (max-width: 764px) {
        display: block;
        width: 100%;
    } 
`

const NavDiv = styled.div` 
    flex-basis: 25%;
    @media (max-width: 764px) {
        flex-direction: column;
        flex-basis: 100%;
    }
`

const NavDivList = styled.div`
    color: #6e6e73;
    font-size: 12px;
    padding: 10px;
    @media (max-width: 764px) {
        border-bottom: 1px solid #d2d2d7;
    }
    li {
        list-style: none;
        margin-top: 10px;
        @media (max-width: 764px) {
            display: none;
        }
    }
`

// Ultimo footer

const LastFooter = styled.section`
    margin: 0 auto;
    max-width: 980px;
    padding-top: 34px;
    border-top: none;
`

const LastFtBox = styled.div`
    color: #6e6e73;
    font-size: 12px;
    line-height: 1.33337;
    margin-bottom: 7px;
    padding-bottom: 8px;
    border-bottom: 1px solid #d2d2d7;
    @media (max-width: 764px) {
        border-bottom: none;
    }
`

const TitleFooter = styled.p`

`

const Span = styled.span`

`

const LinkBlue = styled(Link)`
    text-decoration: none;
    color: #06c;
    border-bottom: 1px solid;
`

const ListFooter = styled.ul`
    display: flex;
    list-style:none;
    text-decoration: none;
    li {
        margin-right: 7px;
        margin-top: 5px;
        border-right: 1px solid #d2d2d7;
    }
`
const LinkFooter = styled(Link)`
    color: #6e6e73;
    padding-right: 10px;
    text-decoration: none;
    &:hover{
        border-bottom: 1px solid #d2d2d7;
    }
`

export default function Footer() {
  return (
    <FooterBox>
        <FooterSection>
            <FooterList>
                <FooterLi>1. É necessário um iPhone 8 ou posterior ou um Apple Watch Series 3 ou posterior emparelhado com um iPhone 6s ou posterior. Somente para novos assinantes. R$ 29,90 por mês após o período de teste. A assinatura é renovada automaticamente até que seja cancelada. Aplicam-se <LinkStyled>termos</LinkStyled>.</FooterLi>
                <FooterLi>
                    É preciso ter uma assinatura do Apple Fitness+.
                </FooterLi>
                <FooterLi>
                    O Apple Fitness+ requer iPhone 8 ou posterior com iOS 16.1.
                </FooterLi>
                <FooterLi>
                    O Apple Fitness+ requer Apple Watch Series 3 ou posterior. Disponível quando emparelhado com iPhone 6s ou posterior com iOS 14.3 ou posterior.
                </FooterLi>
                <FooterLi>
                    O app Fitness na Apple TV requer tvOS 14.3 ou posterior.
                </FooterLi>
                <FooterLi>
                    O app Fitness no iPad requer iPadOS 14.3 ou posterior.
                </FooterLi>
                <FooterLi>
                    Para ter acesso aos recursos mais novos, seus aparelhos precisam ter a versão mais recente do software.
                </FooterLi>
                <FooterLi>
                    Os treinos e as meditações do Apple Fitness+ serão em inglês com opção de legendas em português do Brasil, francês, espanhol, alemão, italiano e russo.
                </FooterLi>
                <FooterLi>
                    É preciso ter uma assinatura do Apple TV+. Aplicam-se outros <LinkStyled>termos</LinkStyled> e restrições.
                </FooterLi>
            </FooterList>           
        </FooterSection>
        <NavFooter>
                <NavDiv>
                    <NavDivList>
                        <h3>Descobrir e Comprar</h3>
                        <ul>
                            <li>Loja</li>
                            <li>Mac</li>
                            <li>iPhone</li>
                            <li>iPad</li>
                            <li>Watch</li>
                            <li>AirPods</li>
                        </ul>
                    </NavDivList>
                    <NavDivList>
                        <h3>Carteira da Apple</h3>
                        <ul>
                            <li>Carteira</li>
                            <li>Apple Pay</li>
                        </ul>
                    </NavDivList>  
                </NavDiv>
                <NavDiv>
                    <NavDivList>
                        <h3>Sua Conta</h3>
                        <ul>
                            <li>Gerenciar seu ID Apple</li>
                            <li>Conta da Apple Store</li>
                            <li>iCloud.com</li>
                        </ul>
                    </NavDivList>
                    <NavDivList>
                        <h3>Entretenimento</h3>
                        <ul>
                            <li>Apple One</li>
                            <li>Apple TV+</li>
                            <li>Apple Music</li>
                            <li>Apple Arcade</li>
                            <li>Apple Fitness+</li>
                            <li>Apple Podcasts</li>
                            <li>Apple Books</li>
                            <li>Apple Store</li>
                        </ul>
                    </NavDivList>
                </NavDiv>
                <NavDiv>
                    <NavDivList>
                        <h3>Apple Store</h3>
                        <ul>
                            <li>Encontre uma loja</li>
                            <li>Genius Bar</li>
                            <li>Today at Apple</li>
                            <li>Apple Camp</li>
                            <li>App Apple Store</li>
                            <li>Financiamento</li>
                        </ul>
                    </NavDivList>
                </NavDiv>
                <NavDiv>
                <NavDivList>
                        <h3>Para Empresas</h3>
                        <ul>
                            <li>Apple e os negócios</li>
                            <li>Comprar para a sua empresa</li>
                        </ul>
                    </NavDivList>
                    <NavDivList>
                        <h3>Para a Educação</h3>
                        <ul>
                            <li>Apple a Educação</li>
                            <li>Comprar para Educação Básica</li>
                            <li>Comprar para a faculdade</li>
                        </ul>
                    </NavDivList>
                    <NavDivList>
                        <h3>Para a Saúde</h3>
                        <ul>
                            <li>Apple e a Saúde</li>
                            <li>Saúde no Apple Watch</li>
                        </ul>
                    </NavDivList>
                </NavDiv>
                <NavDiv>
                    <NavDivList>
                        <h3>Valores da Apple</h3>
                        <ul>
                            <li>Acessibilidade</li>
                            <li>Educação</li>
                            <li>Meio Ambiente</li>
                            <li>Privacidade</li>
                            <li>Responsibilidade dos fornecedores</li>
                            <li>AirPods</li>
                        </ul>
                    </NavDivList>
                    <NavDivList>
                        <h3>Sobre a Apple</h3>
                        <ul>
                            <li>Newsroom</li>
                            <li>Liderança da Apple</li>
                            <li>Oportunidade de Carreira</li>
                            <li>Investidores</li>
                            <li>Ética e Compliance</li>
                            <li>Eventos</li>
                            <li>Contatos</li>
                        </ul>
                    </NavDivList>
                </NavDiv>
        </NavFooter>
        <LastFooter>
            <LastFtBox>
                <TitleFooter>
                    {'Outras formas de comprar: '}
                    <LinkBlue>encontre uma Apple Store</LinkBlue>
                    {' ou '}
                    <LinkBlue>revendedor Apple</LinkBlue>
                    {' na sua região.'}
                    <Span>Ou ligue para 0800-761-0867.</Span>
                    {'  Rua Leopoldo Couto de Magalhães Jr., 700, 7º andar, Itaim Bibi. São Paulo, SP. CEP: 04542-000.  '}
                </TitleFooter>
                <TitleFooter>
                    Os Serviços de Mídia da Apple são fornecidos pela Apple Services LATAM LLC.
                </TitleFooter>
            </LastFtBox>
            <LastFtBox>
                <LinkStyled>
                    Brasil
                </LinkStyled>
            </LastFtBox>
            <LastFtBox>
                <TitleFooter>
                Copyright ©2023
				 Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35
                </TitleFooter>
                <ListFooter>
                        <li>
                            <LinkFooter to="https://www.apple.com/br/legal/privacy/">Política de Privacidade</LinkFooter>
                        </li>
                        <li>
                            <LinkFooter>Política de vendas</LinkFooter>
                        </li>
                        <li>
                            <LinkFooter>Avísos Legais</LinkFooter>
                        </li>
                        <li>
                            <LinkFooter>Mapa do Site</LinkFooter>
                        </li>
                </ListFooter>
            </LastFtBox>
        </LastFooter>
    </FooterBox>
  )
}
