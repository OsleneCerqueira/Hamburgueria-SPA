import styled from 'styled-components';
import { device } from '../../styles/device';

export const ItensStyle = styled.main`
  width: 30%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  background-color: #E5E5E5;

  &::-webkit-scrollbar {
    width: 2px;
    background: transparent
  }

  .itensContainer{
    gap: 3.5rem;
    width: fit-content;
    display: flex;
    flex-direction: column;
  }

  .title{
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
  }

  .itens{
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 270px);
    gap: 2rem;
    padding-bottom: 2rem;
  }

  @media ${device.laptopL}{
    .itens{
      grid-template-columns: repeat(2, 270px);
    }
  }
  @media ${device.mobileM}{
    width: 100%;
    .itens{
      grid-template-columns: 270px;

    }
  }
  `;
