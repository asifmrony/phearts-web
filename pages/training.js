import PageHeader from '@/components/reusable/PageHeader';
import { poppins } from '@/utils/fonts';
import ReactMarkdown from 'react-markdown';

export default function training(training) {
    const { content } = training?.data.attributes;
    
    return (
        <main className='page-training'>
            <PageHeader title={'Trainings'} subtitle={''} background={'blue'} />
            {/* Research Details writeup */}
            <div className='pt-14 pb-14 bg-white'>
                <div className="hero-width w-full mx-auto text-justify">
                    <div className={`space-y-6 ${poppins.variable} font-poppins`}>
                        <ReactMarkdown>{content}</ReactMarkdown>
                        {/* <p>Population Health, Research and Society Training (PHeaRTs) is a national non-profit organization that
                            conducts health research, training and community service activities for the improvement of human
                            health in Bangladesh. It works closely with scientists, health professionals and policy makers in
                            Bangladesh.
                        </p>
                        <p>
                            The mission of PHeaRTs is to improve equity in health, reduce disease risk, identify determinants of
                            health outcomes and implement appropriate interventions. Medical services are primarily focused on
                            reducing environmental risk factors that cause significant public health problems in Bangladesh.
                        </p>
                        <p>
                            We are committed to building local, regional and international capacity in research and public health.
                            We utilize field sites, hospitals and laboratories to provide education and training. As per need,
                            education and training are designed for long time in different level of participants like rising researchers,
                            physicians, laboratory personnel, managers, teachers, local community people, faculties and student
                            etc.
                        </p> */}
                    </div>

                </div>
            </div>
        </main>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/training`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'Authorization': token
        }
    });
    const training = await res.json();
    return {
        props: training
    }
}
