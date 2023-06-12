import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoImage from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

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

            <Dialog.Portal>
              <Dialog.Overlay />

              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
