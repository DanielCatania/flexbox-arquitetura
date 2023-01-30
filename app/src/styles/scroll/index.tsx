const scroll =
 `
  ::-webkit-scrollbar {
    height: 5px;
  }

  @media screen and (max-width: 500px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  ::-webkit-scrollbar-track {
    background: #D3DBCF;
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #A3C1D9;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5E9FD1; 
  }
`;

export default scroll;