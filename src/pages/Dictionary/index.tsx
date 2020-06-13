import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { FiBookOpen, FiSearch } from 'react-icons/fi';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import LegalTerm from './LegalTerm';
import Button from '../../components/Button';

import { FormStyled, Section } from './styles';

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast, setDictionary, getDictionary } = useToast();

  const handleSubmit = useCallback(
    async (data: string) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          legalTerm: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, { abortEarly: false });

        setDictionary();
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
    [addToast, setDictionary],
  );

  return (
    <>
      <strong>Dicionário Jurídico</strong>

      <FormStyled ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="legalTerm"
          icon={FiBookOpen}
          maxLength={20}
          placeholder="Digite: Carta"
        />

        <p>
          Digite o termo e clique no botão <FiSearch />.
        </p>

        <Button type="submit" style={{ width: 200 }}>
          <FiSearch />
        </Button>
      </FormStyled>

      <Section>{getDictionary() && <LegalTerm />}</Section>
    </>
  );
};

export default Search;
