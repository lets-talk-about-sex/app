import React from 'react';
// import Article from 'template/article/article-template';
import Footer from 'components/footer/Footer';


const About = () => {
        return (
            <div>
                <h4>Um verkefnið</h4>
                <p>Samfélagsleg ábyrgð</p>
                <p>Allir eiga rétt á almennilegri kynfræðslu! Texti um okkur og af hverju við fórum í þessa vegferð</p>

                <div>
                    <h5>Teymið</h5>
                    <div>
                        <div>
                            <img src=""></img>
                            <p>Anna Sóley Karlsdóttir</p>
                            <p>Forritari og móðir</p>
                        </div>
                        <div>
                            <img src=""></img>
                            <p>Birgitta Rún Sveinbjörnsdóttir</p>
                            <p>Hönnuður</p>
                        </div>
                        <div>
                            <img src=""></img>
                            <p>Hugrún Rúnarsdóttir</p>
                            <p>Hönnuður</p>
                        </div>
                        <div>
                            <img src=""></img>
                            <p>Ragnhildur Rós Guðmundsdóttir</p>
                            <p>Forritari og móðir</p>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
            
            
        )


};



export default About;