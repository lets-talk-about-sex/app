import React, { Component} from 'react'
import styled from '@emotion/styled/macro';
// import {css} from 'emotion'
import search from 'assets/icon/search.svg';


const SearchContainer = styled.div`
  display: inline-block;
  position: relative;
  height: 50px;
  float: right;
  margin-top: 30px;
  padding-right: 20px;
  margin-right: 30px;
`

const SearchInput = styled.input`
    &[type="text"] {
        height: 40px;
        font-size: 20px;
        display: inline-block;
        font-weight: 600;
        border: none;
        outline: none;
        color: #000;
        padding: 3px;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 3;
        transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
        cursor: pointer;
    }

    &[type="text"]:focus {
        width: 353px;
        z-index: 1;
        cursor: text;
    }

    &[type="submit"] {
        height: 40px;
        width: 40px;
        display: inline-block;
        color: red;
        background: url(${search}) no-repeat;
        background-position: 50% 50%;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        cursor: grab;
        opacity: 0.4;
        transition: opacity .4s ease;
        text-indent: -10000px;
    }

    &[type="submit"]:hover {
        opacity: 0.8;
    }
`

const CategoryWrapper = styled.div`
    display:flex;
    width: 100%;
    list-style-type: none;
    justify-content:flex-start;
    /* padding-top: 20px; */
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap;
    margin-bottom: 25px;
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

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            'activeCategory': '',
        }
    }

    handleClick(category) {
        this.setState({
            'activeCategory': category,
        })

        this.props.renderbyfilter(category, "")
    }

    render() {
        return (
            <div>
                <SearchContainer>
                    <form action="">
                        <SearchInput onKeyUp={this.props.update}  id="search" name="search" type="text" placeholder="Sláðu inn leitarorð"/>
                        <SearchInput  id="search_submit"  type="submit"/>
                    </form>
                    {/* <SearchIcon src={search} alt=""/> */}
                </SearchContainer>
               
                <div>
                    <CategoryWrapper>
                        <li className={this.state.activeCategory===''?'active':''} onClick={() => { this.handleClick('') }}>Allt</li>
                        <li className={this.state.activeCategory==='kynlíf'?'active':''} onClick={() => { this.handleClick('kynlíf') }}>Kynlíf</li>
                        <li className={this.state.activeCategory==='kynþroski'?'active':''} onClick={() => { this.handleClick('kynþroski') }}>Kynþroski</li>
                        <li className={this.state.activeCategory==='samskipti'?'active':''} onClick={() => { this.handleClick('samskipti') }}>Samskipti</li>
                        <li className={this.state.activeCategory==='kynhneigð'?'active':''} onClick={() => { this.handleClick('kynhneigð') }}>Kynverund</li>
                        {/* <li className={this.state.activeCategory==='myndefni'?'active':''} onClick={() => { this.handleClick('myndefni') }}>Myndefni</li> */}
                    </CategoryWrapper> 
                </div>
            </div> 
        );
    }
};

export default Search;

