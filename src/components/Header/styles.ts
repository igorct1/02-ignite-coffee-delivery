import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3.2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderInfo = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  padding: 0.8rem;

  border-radius: 8px;

  span {
    font-size: ${(props) => props.theme.fontSizes['text-S']};
  }
`

export const HeaderButtonCard = styled.button`
  background: ${(props) => props.theme.colors['yellow-light']};
  border: 0;
  padding: 0.8rem;

  border-radius: 8px;
  line-height: 0;

  color: ${(props) => props.theme.colors['yellow-dark']};

  cursor: pointer;
`
