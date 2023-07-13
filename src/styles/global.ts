import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

body {
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 1.6rem;
	-webkit-font-smoothing: antialiased;
}

input,
textarea,
button {
	font-size: 1.6rem;
	font-family: 'Roboto', sans-serif;
}

img {
	max-width: 100%;
	display: block;
}
`
