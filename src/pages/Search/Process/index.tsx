import React, { useState } from 'react';

import Progress from './Progress';
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

      <ul>{mostrar && <Progress />}</ul>
    </>
  );
};

export default Process;
