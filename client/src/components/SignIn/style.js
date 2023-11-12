// Import necessary modules and components
import styled from 'styled-components/macro';

// Styled components for the sign-in page
const SignInContainer = styled.div`
  max-width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Helper = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.red};
`;

// Export the styled components
export { SignInContainer, Title, Form, Helper, ErrorMessage };
