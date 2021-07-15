import styled from 'styled-components';

export const StUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StUserProfilePhoto = styled.img`
  width: 75px;
  height: 75px;
  src: ${(src) => src};
`;

export const StUserInfoDiv = styled.div`
  text-align: center;
  margin: 10px;
  span{
    margin-top: 5px;
    display: inline-block;
  }
`;
export const StOnline = styled.span`
  margin-top: 5px;
  color: #55667B;
  font-size: 14px;
`;
