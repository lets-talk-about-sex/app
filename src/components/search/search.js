import React, { Component} from 'react'
import styled from '@emotion/styled/macro';
// import {css} from 'emotion'
import search from 'assets/icon/search.svg';
import closeButton from '../../assets/icon/article/close.svg';

const SearchContainer = styled.div`
  display:block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  margin: 0;
  background-color: ${props => props.theme.baseColors.bodyBackground};
  z-index:333;
`
const SearchInput = styled.input`
    &[type="text"] {
        height: 40px;
        display: inline-block;
        color: #000;
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        margin-top: 24px;
        width: 0px;
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        z-index: 1;
        transition: width 1.4s cubic-bezier(0.000, 0.795, 0.000, 1.000),
                    right 1.4s cubic-bezier(0.000, 0.795, 0.000, 1.000),
                    opacity .2s ease;
        cursor: pointer;
        opacity: 0;
    }

    &[type="text"].active {
        width: 335px;
        max-width: calc(100vw - 100px);
        right: 100px;
        cursor: text;
        opacity: 1;
        padding-left: 42px;        
    }

    &[type="submit"] {
        height: 100%;
        width: 100px;
        margin: 0;
        display: inline-block;
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
        outline: none;
        background-color: ${props => props.theme.baseColors.bodyBackground};
    }

    &[type="submit"]:hover {
        opacity: 0.8;
    }

    /* select submit input that it placed after the text input when it is focused */
    &[type="text"].active ~ [type="submit"] {
        background: url(${closeButton}) no-repeat;
        background-position: 50% 50%; 
    }
`

const SearchResults = styled.li`
  & span {
      color:#FC4255;
  }
`
const CategoryWrapper = styled.div`
    display:flex;
    width: calc(100vw - 60px);
    list-style-type: none;
    justify-content:flex-start;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap;
    margin-bottom: 25px;
    margin-top: 60px;
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
            'searchOpen': false,
        }

        this.searchInput = React.createRef();
        //verðum að nota bind hér til þess að this sem notum í update function muni vísa í class Search
        this.toggleSearch = this.toggleSearch.bind(this)
        this.update = this.update.bind(this)
    }


    handleClick(category) {
        this.setState({
            'activeCategory': category,
        })

        this.props.renderbyfilter(category, "")
    }
   
    update () {
        this.props.update(this.searchInput.current.value)
    }


    toggleSearch () {
        this.setState (state => {
            const searchOpen = ! state.searchOpen;
            //ef search inniheldur engan texta í input þá sýna öll spjöldin (update sýnir öll)
            //búa til function setTimeout sem setur focus á input field(músarbendill sé auo í input field) eftir að hann er búin að animate-ast inn, því setum 400 millisec.
            if ( searchOpen ) {
                setTimeout(()=> {
                    this.searchInput.current.focus();
                },400) 
            }
            else {
                this.searchInput.current.value = "";
                this.update();
            }

            return {
                searchOpen: searchOpen
            }
        })
    }

    render() {
        return (
            <div>
                <SearchContainer> 
                    <SearchInput 
                    onKeyUp={this.update}
                    ref={this.searchInput}
                    id="search"
                    className={this.state.searchOpen ? 'active' : ''}
                    name="search"
                    type="text"
                    placeholder="Sláðu inn leitarorð"/>
                    <SearchInput
                    onClick={this.toggleSearch}
                    id="search_submit"
                    type="submit"/>
                </SearchContainer>    
                <div>
                    <CategoryWrapper>
                        {this.props.searchStringIsEmpty? 
                        <React.Fragment>
                            <li className={this.state.activeCategory===''?'active':''} onClick={() => { this.handleClick('') }}>Allt</li>
                            <li className={this.state.activeCategory==='kynlíf'?'active':''} onClick={() => { this.handleClick('kynlíf') }}>Kynlíf</li>
                            <li className={this.state.activeCategory==='kynþroski'?'active':''} onClick={() => { this.handleClick('kynþroski') }}>Kynþroski</li>
                            <li className={this.state.activeCategory==='samskipti'?'active':''} onClick={() => { this.handleClick('samskipti') }}>Samskipti</li>
                            <li className={this.state.activeCategory==='kynhneigð'?'active':''} onClick={() => { this.handleClick('kynhneigð') }}>Kynverund</li>
                            {/* <li className={this.state.activeCategory==='myndefni'?'active':''} onClick={() => { this.handleClick('myndefni') }}>Myndefni</li> */} 
                        </React.Fragment>:
                        <SearchResults> 
                        <span className="color">{this.props.showResults}</span> orð fundust</SearchResults>
                    }
                    </CategoryWrapper> 
                </div>
            </div> 
        );
    }
};

export default Search;

