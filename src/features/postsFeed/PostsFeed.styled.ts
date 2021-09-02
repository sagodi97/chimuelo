import styled from "styled-components";

export const FeedGrid = styled.div`
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1em;
`;

export const FeedColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 1em;

  & article {
    vertical-align: middle;
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;
