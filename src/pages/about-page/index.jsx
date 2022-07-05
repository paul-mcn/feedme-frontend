import React from 'react';
import DefaultLayout from '../../components/page-templates/DefaultLayout';
import H3 from '../../components/headings/H3';
import BackgroundImage from '../../assets/images/about-page-image-bg-rotated.jpg'

const AboutPage = props => {
    const divStyle = { height: "63vh", background: `url(${BackgroundImage}) center/cover` }
    return (
        <div style={divStyle}>
            <DefaultLayout welcomeMessage={"About"}>
                <div className='w-1/2 pt-2 box-border pb-10' >
                    <H3 text='Sick of planning meals for the week?' />
                    <div className='flex flex-col gap-4 mt-2'>
                        <p>
                            OrganiseMyMeals <b>simplifies</b> the weekly meal deciding process. It is a food ideas service that suggests meals based on factors that <b>you decide</b>.
                        </p>
                        <p>
                            Do you know that <b>you want to eat something healthy on Monday, but dont know what</b>? No worries, just tell us you want something healthy, and we'll do the rest.
                        </p>
                        <p>
                            OrganiseMyMeals <b>removes</b> the <b>stress</b> of meal planning and frees up time
                        </p>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default AboutPage;