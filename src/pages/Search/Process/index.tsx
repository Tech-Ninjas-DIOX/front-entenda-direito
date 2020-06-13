import React, { useState } from 'react';

import Andamento from './Andamento';
import Button from '../../../components/Button';

const Process: React.FC = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <strong>Nº do Processo: 0001890-62.2020.8.26.0037</strong>
      <strong>
        Descrição:
        <span> Aqui será a descrição do Processo</span>
      </strong>

      <Button onClick={() => setMostrar(!mostrar)} style={{ width: 200 }}>
        Mostrar andamento
      </Button>

      <ul>{mostrar && <Andamento />}</ul>
    </>
  );
};

export default Process;
