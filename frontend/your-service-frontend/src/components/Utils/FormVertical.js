import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import { formatErrorMessages } from '../../utils/errorUtils';
import { toast } from 'react-toastify';
import axiosInstance from '../../services/back/axiosConfig';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormContainer = styled.form`
  max-width: 500px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  animation: ${slideInBottom} 0.5s ease-out forwards;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #0066cc;
    box-shadow: 0 0 8px rgba(0, 102, 204, 0.3);
    outline: none;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 2px solid #333;
  border-radius: 4px;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:checked {
    background-color: #27ae60;
    border-color: #27ae60;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.3);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 2px;
  }
`;

const CheckboxLabel = styled.span`
  font-size: 16px;
`;

const FeedbackMsg = styled.small`
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  text-align: center;
  opacity: 0;
`;

const ErrorMsg = styled(FeedbackMsg)`
  color: #c0392b;
`;

const SuccessMsg = styled(FeedbackMsg)`
  color: #2ecc71;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #005bb5;
    transform: translateY(-2px);
  }
`;

const AdditionalLinks = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const FormVertical = ({ title, fields, submitText, additionalLinks, endpoint }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted] = useState(false);

  useEffect(() => {
    const initialData = {};
    const initialErrors = {};
    fields.forEach(field => {
      initialData[field.name] = field.type === 'checkbox' ? false : '';
      initialErrors[field.name] = '';
    });
    setFormData(initialData);
    setFormErrors(initialErrors);
  }, [fields]);

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setFormData({ ...formData, [fieldName]: value });
    setFormErrors({ ...formErrors, [fieldName]: '' });
  };

  const handleCheckboxChange = (e, fieldName) => {
    const isChecked = e.target.checked;
    setFormData({ ...formData, [fieldName]: isChecked });
    setFormErrors({ ...formErrors, [fieldName]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let errors = {};
    fields.forEach(field => {
      if (field.type !== 'checkbox' && !formData[field.name].trim()) {
        errors[field.name] = `${field.label} é obrigatório.`;
      }
    });
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    try {
      const response = await axiosInstance.post(endpoint, formData);
      console.log('Response from backend:', response.data);

      const clearedData = {};
      fields.forEach(field => {
        clearedData[field.name] = field.type === 'checkbox' ? false : '';
      });
      setFormData(clearedData);

      toast.success('Formulário enviado com sucesso!', {
        onClose: () => {
          console.log("deu certo");
        }
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.data) {
        const errorDetails = error.response.data;
        const formattedErrorMessage = formatErrorMessages(errorDetails);
        toast.error(`Erro ao enviar formulário: ${formattedErrorMessage}`);
      } else {
        toast.error('Erro ao enviar formulário. Por favor, tente novamente.');
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>{title}</h2>
      {fields.map(field => (
        <FormGroup key={field.name}>
          {field.type !== 'checkbox' ? (
            <InputField
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(e, field.name)}
              className={formErrors[field.name] ? 'error' : ''}
              required={!field.optional}
            />
          ) : (
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                id={field.name}
                checked={formData[field.name] || false}
                onChange={(e) => handleCheckboxChange(e, field.name)}
                className={formErrors[field.name] ? 'error' : ''}
              />
              <CheckboxLabel htmlFor={field.name}>{field.label}</CheckboxLabel>
            </CheckboxContainer>
          )}
          {formErrors[field.name] && <ErrorMsg>{formErrors[field.name]}</ErrorMsg>}
          {formSubmitted && !formErrors[field.name] && <SuccessMsg><FiCheckCircle size={18} /> {field.label} válido</SuccessMsg>}
        </FormGroup>
      ))}
      <SubmitButton type="submit">
        {formSubmitted ? (
          <>
            <FiCheckCircle style={{ marginRight: '8px' }} />
            {submitText ? submitText : 'Enviando...'}
          </>
        ) : (
          submitText ? submitText : 'Enviar'
        )}
      </SubmitButton>
      {additionalLinks && (
        <AdditionalLinks>
          {additionalLinks.map((link, index) => (
            <Link key={index} to={link.to} style={{ marginRight: '10px', color: '#0066cc' }}>{link.label}</Link>
          ))}
        </AdditionalLinks>
      )}
    </FormContainer>
  );
};

export default FormVertical;
