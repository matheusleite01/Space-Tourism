import {ButtonStyle} from './styled';

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <ButtonStyle>{children}</ButtonStyle>
  )
}

export default Button