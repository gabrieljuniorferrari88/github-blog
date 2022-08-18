import Image from 'next/image';
import * as S from './styles';

import logo from '../../../public/Logo.svg';

export function Header() {
  return (
    <S.HeaderContainer>
      {/* <img src="/logo.svg" alt="GitHub Blog" /> */}
      <Image src={logo} alt="GitHub Logo" />
    </S.HeaderContainer>
  );
}
