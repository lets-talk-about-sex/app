import React from 'react'
import styled from '@emotion/styled/macro';

const SearchContainer = styled.div`
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
`

const SearchInput = styled.input`
    width:100%;
    height: 40px; 
    padding-left:15px;
`
const CategoryWrapper = styled.div`
    display:flex;
    width:100%;
    list-style-type:none;
    justify-content:space-around;
    padding-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
        .active {
            color:#000;
        }

`


var travel = document.getElementById("travel"); //object, sækja elment úr index skjalinu sem hefur id travel

// var search = function () {
// travel.innerHTML="" //hreinsar út öll gögn i travel
//   for ( var i = 0; i < tours.length; i++) {
//     if(tours[i].TourName.toUpperCase().includes(mySearch.value.toUpperCase()) ||  tours[i].PickUp.includes(mySearch.value)) {
//       travel.innerHTML+=

const CheckIfMatchesSearch = (tagsArray, activefilter) => {
    if(activefilter === ''){
        return true
    }
let i;
 for ( i = 0;  i < tagsArray.length;i++) {
     console.log(tagsArray[i])
    if(activefilter === tagsArray[i]) {
         return true;
    } 
 }
}


const Search = (props) => {
    // const className = "test";
    return (
        <div>
            <SearchContainer>
                <SearchInput id="search" onKeyUp="CheckIfMatchesSearch()" type="text" placeholder="Sláðu inn leitarorð"/>
            </SearchContainer>
            <div>
                <CategoryWrapper>
                   <li onClick={()=> props.renderbyfilter("")}>Allt</li>
                    <li onClick={()=> props.renderbyfilter("kynlíf")}>Kynlíf</li>
                    <li onClick={()=> props.renderbyfilter("samskipti")}>Samskipti</li>
                </CategoryWrapper> 
            </div>
        </div> 
    );
};

export default Search;