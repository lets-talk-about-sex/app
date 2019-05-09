import React, { Component} from 'react'
import styled from '@emotion/styled/macro';
import search from 'assets/icon/search.svg';
import closeButton from '../../assets/icon/article/close.svg';

const SearchContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    position: fixed;
    left: 30px;
    right: 30px;
    top: 0;
    padding: 15px 0;
    width: calc(100vw - 60px);
    height: 80px;
    margin: 0;
    overflow: hidden;
    z-index:999;
    &.searchOnScroll {
        [type="text"], [type="submit"] {
            background-color: #fff;
        }
    }
    &.active {
        [type="text"] {
            opacity: 1;   
            transform: translateX(25px);
            color: #000;
        }
        [type="submit"] {
            background-image: url(${closeButton});
            background-repeat: no-repeat;
            background-position: 50% 50%; 
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
`
const SearchInput = styled.input`
    position: relative;
    z-index: 1;
    &[type="text"] {
        height: 100%;
        width: calc(100% - 25px);
        flex-shrink: 0;
        display: inline-block;
        border: none;
        outline: none;
        padding: 3px 0 0 14px;
        color: #fff;
        margin: 0;
        background: none;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        cursor: pointer;
        opacity: 0;
        transform: translateX(100%);
        transform: translateX(25px);
        transform-origin: right center;
        transition: transform .9s ease,
                    opacity .5s ease,
                    color .5s ease;
    }
    &[type="submit"] {
        z-index: 2;
        flex-shrink: 0;
        height: 50px;
        width: 50px;
        margin: 0;
        display: inline-block;
        background: url(${search}) no-repeat;
        background-position: 50% 50%;
        border: none;
        cursor: grab;
        transition: opacity .4s ease, border-radius 0.2s ease;
        text-indent: -10000px;
        outline: none;
        border-radius: 50%;
        background-color: ${props => props.theme.baseColors.bodyBackground};
    }
    &[type="submit"]:hover {
        opacity: 1;
    }
`
const SearchResults = styled.li`
  & span {
      color:#FC4255;
  }
`
const CategoryWrapper = styled.div`
    position:relative;
    display:flex;
    padding-left: 25px;
    list-style-type: none;
    justify-content:flex-start;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 600;
    overflow-x: scroll;
    overflow: auto;
    white-space: nowrap;
    margin-bottom: 25px;
    padding-top: 60px;
    -webkit-overflow-scrolling: touch;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 10px;
        background-color: ${props => props.theme.baseColors.bodyBackground};
        position: absolute;
        left: 0;
        bottom: 0;
    }
    &::-webkit-scrollbar , &::-webkit-scrollbar-thumb {
            display: none;        
    }
    ul {
        height: calc(92px - 20px);
        padding-bottom: 20px;
        overflow-y: hidden;
    }
      li {
        display: inline-block;  
        padding: 14px;
        text-decoration: none;
        color: #C7C7C7;
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
            'searchContainerClasses': {
                active: false,
                searchOnScroll: false,
            },
            'isSearching': false
        }

        this.searchInput = React.createRef();
        //verðum að nota bind hér til þess að this sem notum í update function muni vísa í class Search
        this.toggleSearch = this.toggleSearch.bind(this)
        this.update = this.update.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if (this.props.linkState&&this.props.linkState.categoryTag){
            this.setState({
                activeCategory:this.props.linkState.categoryTag
            },() => {
                this.handleClick(this.props.linkState.categoryTag);
            });
        }
    }



    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    //     if ("categoryTag" in this.props.linkState){
    //         this.setState({
    //             activeCategory:this.props.linkState.categoryTag
    //         },() => {
    //             this.handleClick(this.props.linkState.categoryTag);
    //         });
    //     }
    // }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll (event) {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        if ( (scrollTop < 30) && !this.state.isSearching ){
            this.setState( state => {
                return {
                    searchContainerClasses: {
                        ...state.searchContainerClasses,
                        searchOnScroll: false,
                    }
                }
            })
        } else {
            this.setState( state => {
                return {
                    searchContainerClasses: {
                        ...state.searchContainerClasses,
                        searchOnScroll: true,
                    }
                }
            })
        }
    }  

    handleClick(category) {
        this.setState({
            'activeCategory': category,
        })

        this.props.renderbyfilter(category, "")
    }
   
    update () {
        this.props.update(this.searchInput.current.value)

        window.scrollTo(0, 0);
        setTimeout(()=>{
            window.addEventListener('scroll', this.handleScroll)
        },400);
    }

    classNames(classes) {
        var classesArr = [];
        for (const className in classes) {
            if (classes[className]){
                classesArr.push(className)
            }
        } 
        return classesArr.join(" ")
    }

    toggleSearch () {
        const searchOpen = ! this.state.searchOpen
        var searchContainerClasses;
        var isSearching = false;

        //ef search inniheldur engan texta í input þá sýna öll spjöldin (update sýnir öll)
        //búa til function setTimeout sem setur focus á input field(músarbendill sé auo í input field) eftir að hann er búin að animate-ast inn, því setum 400 millisec.
        if ( searchOpen ) {
            searchContainerClasses = {
                ...this.state.searchContainerClasses,
                active: true,
            }

            isSearching = true;

            setTimeout(()=> {
                this.searchInput.current.focus();
            }, 1000) 
            
        }
        else {
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            
            searchContainerClasses = {
                searchOnScroll: this.state.isSearching&&scrollTop==0?false:true,
                active: false,
            }
            
            setTimeout(()=>{
                this.searchInput.current.value = "";
                this.update();
            }, 100)
        }

        this.setState({
            'searchOpen': searchOpen,
            'searchContainerClasses': searchContainerClasses,
            'isSearching': isSearching
        })
    }

    render() {
        return (
            <div>
                <SearchContainer
                className={this.classNames(this.state.searchContainerClasses)}> 
                    <SearchInput 
                    onKeyUp={this.update}
                    ref={this.searchInput}
                    id="search"
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
                        <ul>
                            <li className={this.state.activeCategory===''?'active':''} onClick={() => { this.handleClick('') }}>Allt</li>
                            <li className={this.state.activeCategory==='kynlíf'?'active':''} onClick={() => { this.handleClick('kynlíf') }}>Kynlíf</li>
                            <li className={this.state.activeCategory==='kynþroski'?'active':''} onClick={() => { this.handleClick('kynþroski') }}>Kynþroski</li>
                            <li className={this.state.activeCategory==='samskipti'?'active':''} onClick={() => { this.handleClick('samskipti') }}>Samskipti</li>
                            <li className={this.state.activeCategory==='kynhneigð'?'active':''} onClick={() => { this.handleClick('kynhneigð') }}>Kynverund</li>
                            {/* <li className={this.state.activeCategory==='myndefni'?'active':''} onClick={() => { this.handleClick('myndefni') }}>Myndefni</li> */} 
                        </ul>:
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

