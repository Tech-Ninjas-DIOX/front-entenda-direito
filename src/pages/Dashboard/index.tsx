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
import { useModal } from '../../hooks/toastModal';
import { useToast } from '../../hooks/toast';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { addModal } = useModal();
  const { addToast } = useToast();

  const definition = useCallback(() => {
    addToast({
      title: 'Definição',
      description: 'Bananas de Pijamas são ruins',
    });

    addModal({
      title: 'Definição',
      description: 'Bananas de Pijamas são ruins',
    });
  }, [addToast, addModal]);

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
        <span>
          A confissão qualificada não tem o condão de reduzir a pena
          intermediária, pois, conquanto o agente assuma o fato, vincula este a{' '}
          <span onMouseOver={definition} onFocus={definition}>
            circunstância
          </span>{' '}
          justificante ou excludente
        </span>

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
