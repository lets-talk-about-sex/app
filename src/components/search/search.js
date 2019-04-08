import React, { Component} from 'react'
import styled from '@emotion/styled/macro';
import {css} from 'emotion'


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
    justify-content:flex-start;
    padding-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap; 
    & ::-webkit-scrollbar {
        display: none;   
    }
      li {
        display: inline-block;  
        padding: 14px;
        text-decoration: none;
    } 
         li.active {
            color:#000;
        }
`

// const li = css `
//     display: inline-block;  
//     padding: 14px;
//     text-decoration: none;
// `

// const active = css `
//     color:green;
// `

// const activeButton = css `
//     ${li};
//     ${active};
// `


const CheckIfMatchesSearch = (tagsArray, activefilter) => {
    if(activefilter === ''){
        return true
    }

 for ( let i = 0;  i < tagsArray.length;i++) {
     console.log(tagsArray[i])
    if(activefilter === tagsArray[i]) {
         return true;
    } 
 }
}


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            'activeCategory': ''
        }
    }

    handleClick(category) {
        this.setState({
            'activeCategory': category
        })

        this.props.renderbyfilter(category, "")
    }

    // const className = "test";
    render() {
        return (
            <div>
                <SearchContainer>
                    <SearchInput id="search" onKeyUp="CheckIfMatchesSearch()" type="text" placeholder="Sláðu inn leitarorð"/>
                </SearchContainer>
                <div>
                    <CategoryWrapper>
                        <li className={this.state.activeCategory==''?'active':''} onClick={() => { this.handleClick('') }}>Allt</li>
                        <li className={this.state.activeCategory=='kynlíf'?'active':''} onClick={() => { this.handleClick('kynlíf') }}>Kynlíf</li>
                        <li className={this.state.activeCategory=='kynþroski'?'active':''} onClick={() => { this.handleClick('kynþroski') }}>Kynþroski</li>
                        <li className={this.state.activeCategory=='samskipti'?'active':''} onClick={() => { this.handleClick('samskipti') }}>Samskipti</li>
                        <li className={this.state.activeCategory=='kynhneigð'?'active':''} onClick={() => { this.handleClick('kynhneigð') }}>Kynhneigð</li>
                    </CategoryWrapper> 
                </div>
            </div> 
        );
    }
};

export default Search;







// className={`${li} ${active}`}


// var travel = document.getElementById("travel"); //object, sækja elment úr index skjalinu sem hefur id travel

// var search = function () {
// travel.innerHTML="" //hreinsar út öll gögn i travel
//   for ( var i = 0; i < tours.length; i++) {
//     if(tours[i].TourName.toUpperCase().includes(mySearch.value.toUpperCase()) ||  tours[i].PickUp.includes(mySearch.value)) {
//       travel.innerHTML+=