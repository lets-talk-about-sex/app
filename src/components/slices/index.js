import React from 'react';
import SliceTextSub from './text+sub';
import SliceMedia from './media';
import SliceText from './text';
import SliceRepeatFact from './repeatFact';
import SliceRepeatDYK from './repeatDYK';
import SliceVideo from './video';
import SliceLink from './outsideLinks';
import { RichText, Link } from 'prismic-reactjs';

export const renderSlices = (body) => {
    body=body?body:[]
    const slices = body.map(sliceItem => {
        console.log("halló", sliceItem)
        if(sliceItem){
        switch(sliceItem && sliceItem.type)
        {

            case 'content___heading':
                return <SliceTextSub subheader={RichText.asText(sliceItem.primary.subheading)} paragraph={RichText.asText(sliceItem.primary.text)}/>;

            case 'content':
                return <SliceText text={RichText.render(sliceItem.primary.text)}/>;

            case 'media':
                return <SliceMedia image={sliceItem.primary.media.url}/>;

            case 'video':
                return <SliceVideo url={sliceItem.primary.link2.embed_url} iframe={sliceItem.primary.link2.html}/>;

            case 'links':
                console.log(sliceItem)
                return <SliceLink link={sliceItem.primary.link3.url} heading={sliceItem.primary.title1[0].text}/>;

            case 'repeat':
                switch(sliceItem.primary.repeat.__typename){
                    case 'PRISMIC_Facts':
                        return <SliceRepeatFact repeat={sliceItem.primary.repeat.fact[0].text}/>
                    case 'PRISMIC_Did_you_know':
                        return <SliceRepeatDYK repeat={sliceItem.primary.repeat.didyouknow[0].text}/>;
                }

        }
    }
    }).filter(item => !!item)


    console.log("slices:", slices);
    return slices;
}