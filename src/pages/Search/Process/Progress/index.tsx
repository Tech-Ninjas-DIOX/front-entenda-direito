import React from 'react';

import { ModalContainer, Modal, Dismiss } from './styles';
import { useToast } from '../../../../hooks/toast';

interface Props {
  publicacao: string;
  audiencia: string;
  descricao: string;
}

const Progress: React.FC = () => {
  const { getView, setView } = useToast();

  const lista: Props[] = [
    {
      publicacao: '01/06/2020',
      audiencia: '18/06/2020',
      descricao:
        'Bananas de pijamas, Descendo as escadas! Bananas de pijamas, Uma dupla bem levada! Bananas de pijamas, Aprontando pra valer! Brincando com os ursinhos, E cantando pra você',
    },
    {
      publicacao: '05/06/2020',
      audiencia: '20/06/2020',
      descricao: 'Banana de Pijama subindo as escadas',
    },
  ];

  return (
    <>
      {getView && (
        <ModalContainer>
          <Modal>
            <Dismiss onClick={setView}>x</Dismiss>
            {lista.map((item, index) => (
              <li key={String(index)}>
                <div>
                  <div>
                    <strong>Data da Publicação:</strong>
                    <span>{item.publicacao}</span>
                  </div>
                  <div>
                    <strong>Data da Audiência:</strong>
                    <span>{item.audiencia}</span>
                  </div>
                </div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <span>{item.descricao}</span>
              </li>
            ))}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

export default Progress;
