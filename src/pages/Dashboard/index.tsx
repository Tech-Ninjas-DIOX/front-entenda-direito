import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Search from '../Search';
import Dictionary from '../Dictionary';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Section,
  Calendar,
  Schedule,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Entenda Direito" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <Section>
            <Search />
          </Section>
        </Schedule>

        <Calendar>
          <Section>
            <Dictionary />
          </Section>
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
