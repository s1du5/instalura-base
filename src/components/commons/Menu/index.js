import Logo from '../Logo'
import { MenuWrapper } from './styles/MenuWrapper'

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    text: 'Sobre',
    url: '/about'
  }
]

export default function Menu () {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {
          links.map((link) => {
            return (
              <li>
                <a href={link.url}>
                  {link.text}
                </a>
              </li>
            )
          })
        }
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <button>
          Entrar
        </button>
        <button>
          Cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}