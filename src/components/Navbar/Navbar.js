import React, { useState } from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs';
import {IoWatch, IoClose} from 'react-icons/io5';
import {FaBars} from 'react-icons/fa';
import {BsArrowRight} from 'react-icons/bs';


const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: #333;
    @media (max-width: 768px) {
    padding: 0 30px;
    justify-content: space-between;
  }
`

const NavMenu = styled.ul`
    display:  flex;
    align-items: center;
    padding: 15px;
    @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

const NavInput = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  height: 35%;
  background-color: #333;
  position: fixed;
  top: 45px;
  left: 0;
  bottom: 0;
  right: 0;
`

const NavInputBox = styled.div`
  justify-content: center;
  height: 90%;
  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
  } 
`

const Input = styled.input`
  width: 80%;
  height: 20px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 20px;
  margin-left: 10px;
  padding: 15px;
  color: #fff;
`

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
`

const BoxLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: rgba(134, 134, 139, 0.3);
    border-radius: 5px;
  }
`

const Title =  styled.h1 `

`

const TitleBag = styled(Title)`
  color: #fff;
`

const TitleNav = styled(Title)`
  justify-content: flex-end;
  color: #86868b;
  font-size: 14px;
  font-weight: 300;
`

const Link = styled.a`

`

const LinkBlue = styled(Link)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  color: #0071e3;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
`

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 3px;
  cursor: pointer;
`

const Text = styled.p`
  margin-left: 10px;
`

const NavList = styled.li`
    list-style: none;
    margin-right: 30px;
    font-size: 12px;
    font-weight: 300;
    color: #e1e1e1;
    cursor: pointer;
    &:hover{
    color: #fff;
    }

    @media (max-width: 768px) {
    font-size: 22px;
    display: block;
    margin: 5px 0;
    margin-top: 10px;
  }
`

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
    z-index: 1;
  }
`

const Icon = styled.i`
`

const IconLogo = styled(Icon)`
  display: flex;
  align-items: center;
  margin-right: 30px;
  color: #fff;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const ButtonSearch = styled(Button)`
  display: flex;
  color: white;
  height: 18px;
  margin-right: 20px;
  align-items: center;
`

const ButtonStyled = styled(Button)`
  color: white;
  display: none;
  height: 18px;
  @media (max-width: 768px) {
    display: block;
    z-index: 1;
  }
`

export default function Navbar() {

  const iconProps = {
    size: '18px'
  }

  const [menu, setMenu] = useState(false)

  const menuInput = () => {
    setMenu(!menu)
  }

  const [bag, setBag] = useState(false)

  const toggleBag = () => {
    setBag(!bag)
  }



  const [mobile, setMobile] = useState(false)

  const toggleMenu = () => {
    setMobile(!mobile)
  }


  return (
    <Menu>
      <IconLogo><IoWatch size={20} /></IconLogo>
      <NavMenu isOpen={mobile}>
        <NavList>Home</NavList>
        <NavList>Produtos</NavList>
        <NavList>Serviços</NavList>
        <NavList>Sobre</NavList>
        <NavList>Suporte</NavList>     
      </NavMenu>

      <NavInput isOpen={menu}>
        <NavInputBox>
          <InputBox>
            <AiOutlineSearch size={24} color='#fff' />
            <Input placeholder='Buscar em ...' />
          </InputBox>
          <InputBox>
              <TitleNav>Caminhos Rapidos</TitleNav>
          </InputBox>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Encontre uma Loja </Text> 
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Acessórios </Text>
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Comprar Online </Text>
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> AirPods </Text>
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> AirTags </Text>
              </LinkStyled>
          </BoxLink>       
        </NavInputBox>      
      </NavInput>
      <NavInput isOpen={bag}>
        <NavInputBox>
          <InputBox>
            <TitleBag>Seu carrinho está vazio</TitleBag>
          </InputBox>
          <InputBox>
            <LinkBlue>Iniciar Sessão</LinkBlue> <TitleNav> para continuar</TitleNav>
          </InputBox>
          <InputBox>
            <TitleNav>Meu perfil</TitleNav>
          </InputBox>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Pedidos </Text> 
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Itens salvos </Text>
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Conta </Text>
              </LinkStyled>
          </BoxLink>
          <BoxLink>              
              <LinkStyled>
                <BsArrowRight /> <Text> Entrar </Text>
              </LinkStyled>
          </BoxLink>      
        </NavInputBox>      
      </NavInput>
      <MenuBar>
        <ButtonSearch onClick={menuInput}>
          <AiOutlineSearch size={20} />
        </ButtonSearch>
        <ButtonSearch onClick={toggleBag}>
          <BsBag size={20} />
        </ButtonSearch>
        <ButtonStyled onClick={toggleMenu}>
        {mobile ? <IoClose {...iconProps} size={20} /> : <FaBars {...iconProps} />}
      </ButtonStyled>
      </MenuBar>
    </Menu>
  )
}
