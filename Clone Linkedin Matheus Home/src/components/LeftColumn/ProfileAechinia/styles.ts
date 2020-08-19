import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 12px;
  
  .profile-cover {
    width: 100%;
    height: 44px;
    background: #1C84C4;
  }
  .Aechinia-picture {
    width: 45px;
    height: 45px;
    border-radius: 1%;
    border: 4px solid var(--color-white);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, #696969),
      0 1.5px 8px 0 var(--black-a15);

    display: flex;
    
    margin: -26px 8px 12px;
  }
  .panel-cover{
    width: 217px;
    height: 100%;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin-left: 15px;
    color: var(--color-black);
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: var(--color-gray);
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 0 12px;
  }
  .separators {
    width: 70px;
    border-bottom: 1px solid var(--color-separator);
    margin: 16px 10px 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    font-weight: 600;

    .key {
      color: var(--color-gray);
    }
    .keys {
      color:#000;
      
    }
    .value {
      color: var(--color-link);
    }
    
  }
`;
