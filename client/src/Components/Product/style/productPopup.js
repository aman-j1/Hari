import styled from 'styled-components';

export const ProductPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ProductPopupContainer = styled.div`
  background: white;
  padding: 20px;
  max-width: 1100px;
  width: 100%;
  position: relative;
`;

export const ProductPopupClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

export const ProductPopupImage = styled.img`
  width: 100%;
`;

export const ProductPopupTitle = styled.h2`
  font-size: 24px;
  margin-top: 10px;
`;

export const ProductPopupDescription = styled.p`
  margin-top: 10px;
`;

export const ProductPopupPrice = styled.p`
  font-size: 18px;
  color: green;
  margin-top: 10px;
`;
