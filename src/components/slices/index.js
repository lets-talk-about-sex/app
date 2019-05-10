import React from 'react';
import SliceTextSub from './text+sub';
import SliceMedia from './media';
import SliceText from './text';
import SliceRepeatFact from './repeatFact';
import SliceRepeatDYK from './repeatDYK';
import SliceVideo from './video';
import SliceLink from './outsideLinks';
import SliceSubtitle from './subtitle';
import { RichText} from 'prismic-reactjs';

export const renderSlices = (body) => {
    body=body?body:[]
    const slices = body.map((sliceItem, i) => {
        if(sliceItem){
        switch(sliceItem && sliceItem.type)
        {

            case 'content___heading':
                return <SliceTextSub key={i} subheader={RichText.asText(sliceItem.primary.subheading)} paragraph={RichText.render(sliceItem.primary.text)}/>;
            case 'content':
                return <SliceText key={i} text={RichText.render(sliceItem.primary.content)}/>;

            case 'media':
                return <SliceMedia key={i} image={sliceItem.primary.media.url}/>;

            case 'video':
                return <SliceVideo key={i} url={sliceItem.primary.link2.embed_url}/>;

            case 'links':
                return <SliceLink key={i} link={sliceItem.primary.link3.url} heading={RichText.render(sliceItem.primary.title1)}/>;

            case 'subtitle':
                return <SliceSubtitle key={i} sub={sliceItem.primary.subtitle[0].text}/>;

            case 'repeat':
                switch(sliceItem.primary.repeat.__typename){
                    case 'PRISMIC_Facts':
                        return <SliceRepeatFact key={i} repeat={sliceItem.primary.repeat.fact[0].text}/>
                    case 'PRISMIC_Did_you_know':
                        return <SliceRepeatDYK key={i} repeat={sliceItem.primary.repeat.didyouknow[0].text}/>;
                    default:
                        return <SliceRepeatFact key={i} repeat={sliceItem.primary.repeat.fact[0].text}/>
                }
            default:
                return <SliceSubtitle key={i} sub={sliceItem.primary.subtitle[0].text}/>;
        }
    }
    return "this should never happen"
    }).filter(item => !!item)

    return slices;
}