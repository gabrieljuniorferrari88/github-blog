import {
  FaGithub,
  FaBuilding,
  FaExternalLinkAlt,
  FaUserFriends,
} from 'react-icons/fa';

import { Layout } from '../Layout';
import * as S from './styles';

interface User {
  name: string;
  company: string;
  bio: string;
  followers: number;
  url: string;
  avatar: string;
  login: string;
}

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  console.log(user);
  return (
    <Layout>
      <S.UserCardContainer>
        <img src={user.avatar} alt={user.name} />
        <S.UserCardContent>
          <S.UserCardNameContainer>
            <h2>{user.name}</h2>

            <a href={user.url} target="_blank" rel="noopener noreferrer">
              Github
              <FaExternalLinkAlt color="#3294F8" size="12px" />
            </a>
          </S.UserCardNameContainer>
          <p>{user.bio}</p>

          <S.UserCardInfo>
            <span>
              <FaGithub size="18px" color="#3A536B" />

              {user.login}
            </span>

            <span>
              <FaBuilding size="18px" color="#3A536B" />

              {user.company === '' ? user.company : 'sem companhia'}
            </span>

            <span>
              <FaUserFriends size="18px" color="#3A536B" />

              {user.followers}
            </span>
          </S.UserCardInfo>
        </S.UserCardContent>
      </S.UserCardContainer>
    </Layout>
  );
}
