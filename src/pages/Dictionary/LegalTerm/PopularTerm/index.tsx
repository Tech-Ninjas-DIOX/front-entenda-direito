import React from 'react';

import { ModalContainer, Modal, Dismiss } from './styles';
import { useToast } from '../../../../hooks/toast';

interface Props {
  title: string;
  description: string;
}

const PopularTerm: React.FC = () => {
  const { getDictionary, setDictionary } = useToast();

  const lista: Props[] = [
    // {
    //   title: 'BENEFÍCIO DE ORDEM',
    //   description:
    //     'Direito que tem o fiador de exigir, quando acionado para o pagamento da dívida, que sejam excutidos, antes dos seus, os bens do devedor por ele garantido, uma vez que não se tenha obrigado como devedor solidário ou "principal pagador". É alegável até a contestação.',
    // },
    // {
    //   title: 'CARTA',
    //   description:
    //     'Documento ou escrito judicial, ou oficial, por meio do qual se pede a execução de certos atos, fazem-se avisos, contratos, notificações, ou intimações, impõem-se deveres ou obrigações, ou, ainda, atribuem-se ou reconhecem-se direitos.',
    // },
    // {
    //   title: 'CARTA AVOCATÓRIA',
    //   description:
    //     'Carta por meio da qual o juiz competente, de instância superior, ou tribunal, avoca determinado feito aforado em juízo de hierarquia inferior, dentro da sua jurisdição, por atribuir-se competência para o conhecer.',
    // },
    {
      title: 'CARTA DE ADJUDICAÇÃO',
      description:
        'Título de propriedade expedido a favor do exeqüente, ou de qualquer credor, em concurso de preferência ou rateio, após realização deste, ou da praça ou leilão, e antes de assinado o auto de arrematação.',
    },
    // {
    //   title: 'CARTA DE ARREMATAÇÃO',
    //   description:
    //     'Título de propriedade que se expede a favor do arrematante de bens que são vendidos em leilão ou hasta pública.',
    // },
    // {
    //   title: 'CARTA DE GUIA',
    //   description:
    //     'O mesmo que carta de sentença no Cível. Aquela que o juiz criminal logo que transita em julgado a sua decisão condenatória, faz acompanhar o réu, pondo-o à disposição do diretor do estabelecimento em que ele deve cumprir a pena. Aquela pela qual o beneficiado por livramento condicional é mandado pôr em liberdade.',
    // },
    // {
    //   title: 'CARTA DE HOMOLOGAÇÃO DE SENTENÇA ESTRANGEIRA',
    //   description:
    //     'Título expedido pelo Supremo Tribunal Federal, após processo regular, a fim de que a sentença estrangeira possa ser executada no Brasil.',
    // },
    // {
    //   title: 'CARTA DE ORDEM',
    //   description:
    //     'Diz-se daquela pela qual o juiz requisita de outro, de categoria inferior, e de seu subordinado, fora da circunscrição jurisdicional do deprecante e na do deprecado, a realização de certo ato ou diligência, cujo prazo de cumprimento é prefixado.',
    // },
    // {
    //   title: 'CARTA DE REMIÇÃO',
    //   description:
    //     'Título de propriedade expedido a favor do executado que, até a assinatura do auto de arrematação ou até que seja publicada a sentença de adjudicação, libera todos os bens penhorados, ou um deles, oferecendo preço igual ao da avaliação, se não houve licitante, ou de maior lanço feito.',
    // },
    // {
    //   title: 'CARTA PRECATÓRIA',
    //   description:
    //     'É uma carta especial em que um juiz requisita de outro, de igual ou superior categoria, o cumprimento de determinado ato, no lugar ou sobre jurisdição deste, dentro do território nacional. A carta pode ser: a) citatória, quando pede a citação de alguém; b) executória, se por seu meio se promove um executivo ou execução de sentença; c) inquiritória, quando se pede a inquirição de testemunhas; d) instrutória, quando pede diligência para a prática de qualquer ato necessário à instrução duma causa; e) avaliatória, quando depreca a avaliação de certos bens situados em outra comarca; f) de vênia, meio pelo qual um Juiz requer de outro o cumprimento de determinado ato, nos autos de processo de competência deste, na mesma jurisdição de ambos (comarcas onde existem mais de uma Vara).',
    // },
    // {
    //   title: 'CITAÇÃO POR PRECATÓRIA',
    //   description: 'A feita por meio de carta precatória',
    // },
    // {
    //   title: 'CLÁUSULA À ORDEM',
    //   description: 'A que indica títulos transmissíveis por endosso',
    // },
  ];

  return (
    <>
      {getDictionary && (
        <ModalContainer>
          <Modal>
            <Dismiss onClick={setDictionary}>x</Dismiss>
            {lista.map((item, index) => (
              <li key={String(index)}>
                <p>
                  <strong>Termo Popular:</strong>
                </p>
                <span>{item.description}</span>
              </li>
            ))}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
};

export default PopularTerm;
