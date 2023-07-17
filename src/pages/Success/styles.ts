import { styled } from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const SuccessText = styled.div`
  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: ${(props) => props.theme.fontSizes['title-L']};
    font-family: ${(props) => props.theme.fonts.title};
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fontSizes['text-L']};
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SuccessInfo = styled.div`
  min-width: 526px;
  padding: 4rem;
  gap: 3.2rem;

  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
export const SuccessInfoCard = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;

  p {
    font-size: ${(props) => props.theme.fontSizes['text-M']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes['text-M']};
    color: ${(props) => props.theme.colors['base-text']};
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`
const SUCCESS_ICON_COLOR = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

interface SuccessIcon {
  color: keyof typeof SUCCESS_ICON_COLOR
}

export const SuccessIcon = styled.div<SuccessIcon>`
  margin-top: 0.4rem;
  padding: 0.8rem;
  border-radius: 9999px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors[SUCCESS_ICON_COLOR[props.color]]};
`

export const SuccessInfoIllustration = styled.div``
