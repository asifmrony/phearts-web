import PageHeader from '@/components/reusable/PageHeader';
import { poppins } from '@/utils/fonts';
import ReactMarkdown from 'react-markdown';

export default function research(caregiver) {
    const { content, featured_image } = caregiver?.data?.attributes;
    
    return (
        <main className='page-research'>
            <div className={`text-center page-header__w-image relative`} style={{ backgroundImage: `url(${featured_image?.data?.attributes?.url})`}}></div>
            {/* Research Details writeup */}
            <div className='pt-14 pb-14 bg-white'>
                <div className={`hero-width w-full mx-auto text-justify ${poppins.variable} font-poppins page-research__body`}>
                    <h2 className='font-heading text-black text-center mb-8 uppercase'>Phearts Caregiver</h2>
                    <ReactMarkdown>{content}</ReactMarkdown>
                    {/* <div className={`space-y-6 ${poppins.variable} font-poppins`}>
                        <p>The Population Health, Research and training Society conducts research with the aim of discovering and understanding the health effects from all sorts of environmental and biological exposure among the Bangladeshi people and develop effective strategies for prevention and policy development.
                        </p>
                        <p>
                        Most of the researchers of this organisation are from public health, biochemistry, pharmacy and environmental health background who work together in various studies since 2000.
                        </p>
                        <p>
                        Researchers from Columbia University, university of Chicago, New York University, university of New Mexico, Sam Houston state university are regularly conducting their research work in their respective fields collaboration with researchers of this organisation.
                        </p>
                        <p>
                        The population health research and training society previously known as UChicago research Bangladesh was founded in 2009 by Dr. Habibul Ahsan , Dean of and professor of university of Chicago. 
                        </p>
                        <p>
                        The goal of this Centre is to promote global research in Bangladesh and to train young researchers for evidence based research in environmental and biological sciences.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold mt-8'>Team Members</h1>
                        <ul className='list-disc ml-5 mt-3'>
                            <li>Dr Habibul Ahsan</li>
                            <li>Dr Faruque Parvez</li>
                            <li>Dr Khalid khan</li>
                            <li>Dr Alauddin Ahmed</li>
                            <li>Dr Mahbub  Eunus</li>
                            <li>A K M Rabiul Hasan</li>
                            <li>Md Mizanour Rahman</li> 
                            <li>Mrs Alaya Begum</li>
                            <li>Mrs salma akter</li> 
                        </ul>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/caregiver?populate=*`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'Authorization': token
        }
    });
    const caregiver = await res.json();
    return {
        props: caregiver,
        revalidate: 60
    }
}
