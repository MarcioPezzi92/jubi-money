import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import LogoImage from '../../assets/logo.svg'

export function Header() {
  return(
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImage} alt="Desenho: logomarca" />
          <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}