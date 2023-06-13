import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImage from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImage} alt="Desenho: logomarca" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
