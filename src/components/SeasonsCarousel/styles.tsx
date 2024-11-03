import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${(props) => props.theme?.color.secundary};
`
export const SeasonDates = styled.div`
  font-size: 14px;
  color: #666;

  p {
    margin: 0;
  }
`;

export const FeaturedImage = styled.div`
  width: 200px;
  height: 130px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
    width: 100%;
  }
`

export const SeasonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  text-align: center;
  cursor: pointer;
`;

export const SeasonTitle = styled.h3`
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: black;
  border-radius: 10px;
  color: #FFF;
  box-sizing: content-box;
  padding: 2px 10px;
  font-size: 14px;
  line-height: 14px;
  margin: 0;
`;
