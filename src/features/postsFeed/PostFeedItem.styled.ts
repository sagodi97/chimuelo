import styled from "styled-components";

export const PostItemCard = styled.article`
  max-width: 20em;
  min-height: 5em;
  display: grid;
  grid-template-rows: 1fr minmax(0.5fr, 1fr) 0.5fr;
  overflow: hidden;
  text-align: justify;
  text-justify: inter-word;
  padding: 1em;
`;
