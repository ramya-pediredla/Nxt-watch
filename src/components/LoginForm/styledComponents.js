import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0;
  width: 50%;
`

export const LoginLogo = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  height: 30px;
  color: #ffffff;
  margin-top: 24px;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffob37;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 14px;
  margin-right: 5px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e2913b;
`
