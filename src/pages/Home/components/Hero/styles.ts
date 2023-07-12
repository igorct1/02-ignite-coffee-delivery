import { styled } from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 10rem 0rem;
`

export const HeroInfoText = styled.div`
  h1 {
    font-size: ${(props) => props.theme.fontSizes['title-XL']};
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 130%;
  }

  p {
    font-size: ${(props) => props.theme.fontSizes['text-L']};
    font-family: ${(props) => props.theme.fonts.regular};
    line-height: 130%;
    margin: 1rem 0rem 4rem;
  }
`

export const HeroInfo = styled.div`
  max-width: 600px;
`

export const HeroInfoList = styled.section`
  list-style: none;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem 0;
`
const HERO_LIST_COLOR = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  black: 'base-text',
  purple: 'purple',
} as const

interface HeroListItemProps {
  color: keyof typeof HERO_LIST_COLOR
}

export const HeroListItem = styled.div<HeroListItemProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: ${(props) => props.theme.fontSizes['text-M']};
  color: ${(props) => props.theme.colors['base-text']};
  flex-grow: 0;

  span {
    padding: 0.8rem;
    background: ${(props) => props.theme.colors[HERO_LIST_COLOR[props.color]]};

    color: ${(props) => props.theme.colors.white};
    border-radius: 9999px;
    line-height: 0;
  }
`
