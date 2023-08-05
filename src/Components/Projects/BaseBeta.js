import ProjectCard from '../ProjectCard';
import image from '../../Assets/BaseBeta.webp'


function BaseBeta() {
    return (
        <ProjectCard
          title='Topher Emby'
          description='Intern at BaseBeta, a mobile and web app that provides jumpers with flight analysis tools and structured information about exit points'
          links={[
            ['Website', 'https://www.BaseBeta.com/'],
            ['Android', 'https://play.google.com/store/apps/details?id=com.basebeta&hl=es_419'],
            ['iOS', 'https://apps.apple.com/us/app/basebetaapp/id1212178753'],
          ]}
          image={image}
          notes={[
          ]}
        />
    );
}

export default BaseBeta;