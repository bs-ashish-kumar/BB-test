import React from 'react';
import Image from 'next/image';
import slyStrategistImage from '../../../public/images/sly-strategist.jpg';
import jungleJesterImage from '../../../public/images/jungle-jester.jpg';
import roaringManagerImage from '../../../public/images/roaring-manager.jpg';
import stubbornAccountantImage from '../../../public/images/stubborn-accountant.jpg';
import loyalAssistantImage from '../../../public/images/loyal-assistant.jpg';
import gallopGuruImage from '../../../public/images/gallop-guru.jpg';
import Bubbles from '../common/bubbles';
import Callout from '../common/callout';

const BannerSection: React.FC = () => {
    return (
        <section className='b-banner-section' data-testid='b-banner-section'>
            <div className='b-banner-heading'>
                <div className='container'>
                    <h1 className='b-tagline'>
                        <span>Unlock Your</span>
                        <span className='b-bordered-text'>business potential</span>
                        <span className='d-block'> with Revolutionary Digital Marketing Solutions</span></h1>
                </div>
                <Bubbles />
            </div>
            <div className="b-banner-image-section">
                <div className='b-banner-images'>
                    <Image src={slyStrategistImage} width={455} height={240} alt='sly-strategist' priority className='b-banner-image' />
                    <Image src={jungleJesterImage} width={455} height={240} alt='jungle-jester' priority className='b-banner-image' />
                    <Image src={roaringManagerImage} width={455} height={240} alt='roaring-manager' priority className='b-banner-image' />
                    <Image src={stubbornAccountantImage} width={455} height={240} alt='stubborn-accountant' priority className='b-banner-image' />
                    <Image src={loyalAssistantImage} width={455} height={240} alt='loyal-assistant' priority className='b-banner-image' />
                    <Image src={gallopGuruImage} width={455} height={240} alt='gallop-guru' priority className='b-banner-image' />
                </div>
                <div className='b-callout-container'>
                    <Callout title='Sly Strategist' />
                    <Callout title='Jungle Jester' />
                    <Callout title='Roaring Manager' />
                    <Callout title='Stubborn Accountant' />
                    <Callout title='Loyal Assistant' />
                    <Callout title='Gallop Guru' />
                </div>
                <div className='b-image-caption'>
                    <div className='container'>
                        <p>
                            Our digital marketing solution will increase your online visibility and drive more traffic to your website, delivering measurable results and a higher ROI.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection