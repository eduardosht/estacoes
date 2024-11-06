import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${(props) => props.theme?.color.secundary};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: normal;
  gap: 10px;
  text-align: justify;
  width: 100%;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding-left: 40px;
`
export const SeasonDates = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 10px;

  p {
    margin: 0 0 5px 0;
  }
`;

export const FeaturedImage = styled.div`
  width: 200px;
  height: 130px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  min-height: 200px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  transition: 0.3s all;
  
  &:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
  }

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
