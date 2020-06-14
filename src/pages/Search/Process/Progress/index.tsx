import React, {useCallback} from 'react';

import { ModalContainer, Modal, Dismiss } from './styles';
import { useToast } from '../../../../hooks/toast';
import { useModal } from '../../../../hooks/toastModal';
interface Props {
  publicacao: string;
  audiencia: string;
  descricao: string;
}

const Progress: React.FC = () => {
  const { getProcess, setProcess } = useToast();
  const { addModal } = useModal();

  const definition = useCallback(() => {
    addModal({
      title: 'Definição',
      description: 'Bananas de Pijamas são ruins',
    });
  }, [addModal]);

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
      {getProcess && (
        <ModalContainer>
          <Modal>
            <Dismiss onClick={setProcess}>x</Dismiss>
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
            <li>
                <div>
                  <div>
                    <strong>Data da Publicação:</strong>
                    <span>12/06/2020</span>
                  </div>
                  <div>
                    <strong>Data da Audiência:</strong>
                    <span>22/06/2020</span>
                  </div>
                </div>
                <p>
                  <strong>Descrição:</strong>
                </p>
                <span>
                  A confissão qualificada não tem o condão de reduzir a pena
                  intermediária, pois, conquanto o agente assuma o fato, vincula este a{' '}
                  <span className="golden" onClick={definition} onFocus={definition}>
                    circunstância justificante ou excludente
                  </span>
                </span>
              </li>
         
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

export default Progress;
