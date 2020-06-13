import React, { useState } from 'react';

import PopularTerm from './PopularTerm';
import Button from '../../../components/Button';

const LegalTerm: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);

  const resposta = [
    'CARTA',
    'CARTA AVOCATÓRIA',
    'CARTA DE ADJUDICAÇÃO',
    'CARTA DE ARREMATAÇÃO',
    'CARTA DE GUIA',
    'CARTA DE HOMOLOGAÇÃO DE SENTENÇA ESTRANGEIRA',
    'CARTA DE ORDEM',
    'CARTA DE REMIÇÃO',
    'CARTA PRECATÓRIA',
  ];

  return (
    <>
      <strong>Termos encontrados</strong>
      {resposta.map((item) => (
        <Button
          onClick={() => setMostrar(!mostrar)}
          style={{ width: 230, margin: 8, padding: 8 }}
        >
          {item}
        </Button>
      ))}
      {/*
      <Button onClick={() => setMostrar(!mostrar)} style={{ width: 100 }}>
        Mostrar andamento
      </Button> */}

      <ul>{mostrar && <PopularTerm />}</ul>
    </>
  );
};

export default LegalTerm;
