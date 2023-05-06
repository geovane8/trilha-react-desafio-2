import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 90%;
  max-width: 500px;
  cursor: pointer;
  
  h3 {
    margin: 10px 0 5px 0;
    font-size: 24px;
  }

  p {
    margin: 0;
    font-size: 16px;
    color: #999;
  }

  a {
    margin: 5px 0;
    color: #0077b6;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <br />
      <a href="#" rel="noreferrer" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

ItemRepo.propTypes = {
  repo: PropTypes.object.isRequired,
  handleRemoveRepo: PropTypes.func.isRequired,
};

export default ItemRepo;
