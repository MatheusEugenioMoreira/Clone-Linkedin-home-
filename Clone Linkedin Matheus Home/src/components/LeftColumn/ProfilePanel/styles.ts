import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 12px;

  .profile-cover {
    width: 100%;
    height: 54px;
    background: var(--color-header);
  }
  .profile-picture {
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 4px solid var(--color-white);
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(222, 222, 222)),
      0 1.5px 3px 0 var(--black-a15, rgba(222, 222, 222));

    display: flex;
    margin: -38px auto 12px;
  }
  .panel-cover{
    width: 217px;
    height: 100%;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
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
    .value {
      color: var(--color-link);
    }
  }
`;
