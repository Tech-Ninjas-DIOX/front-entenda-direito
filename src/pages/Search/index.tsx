import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
// import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FiBookOpen } from 'react-icons/fi';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import Process from './Process';
import Button from '../../components/Button';

import { FormStyled, Section } from './styles';

interface SearchFormData {
  processNum: number;
}

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast, getView, setView } = useToast();

  const handleSubmit = useCallback(
    async (data: SearchFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          processNum: Yup.string()
            .max(20, 'Nº de Processo tem no máximo 20 dígitos')
            .required('Campo obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        addToast({
          type: 'success',
          title: 'Busca realizada! ⚖️',
        });

        setView();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro 🥴',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, setView],
  );

  return (
    <>
      <strong>Pesquisa de Processos</strong>

      <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="processNum"
          icon={FiBookOpen}
          maxLength={20}
          placeholder="Digite: 0001890-62.2020.8.26.0037"
        />

        <p>
          Digite o número do processo e clique no botão &quot;Pesquisar&quot;.
        </p>

        <Button type="submit" style={{ width: 200 }}>
          Pesquisar
        </Button>
      </FormStyled>

      <Section>{getView() && <Process />}</Section>
    </>
  );
};

export default Search;
