import styled from "styled-components";
import theme from "../../../application/utils/Theme";
import { FaSearch } from 'react-icons/fa';

const InputField = styled.input`
  width: 150px;
  height: 35px;
  padding-left: 15px;
  outline:none;
  background-color: #f8fafb;
  border-radius: 4px;

  @media (min-width: ${theme.breakPoint['tablet']}) {
    width: 221.48px;
   height: 37px;
  }
  `

const SearchInput = (props) => {
    const { setFilter, filter, type, placeholder, ...rest } = props;
    return (
        <div className="flex items-center bg-[#f8fafb] rounded">
            <FaSearch size={20} className="mx-2 opacity-[49%] text-[#bdc3cd]" />
            <InputField value={filter} type="search" onChange={e => { setFilter(e.target.value) }} {...rest} placeholder={placeholder ? placeholder : "Search here..."} />
        </div>
    );
}

export default SearchInput;