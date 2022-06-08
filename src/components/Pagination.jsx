import React from "react";
import styled from "styled-components";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <PaginationContainer>
      <GrFormPreviousLink className="GrForms" onClick={onLeftClick} />
      <div>
        {page} de {totalPages}
      </div>
      <GrFormNextLink className="GrForms" onClick={onRightClick} />
    </PaginationContainer>
  );
};

export default Pagination;
