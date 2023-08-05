import ProjectCard from '../ProjectCard';
import image from '../../Assets/AidSupply.png'


function AidSupply() {
    return (
        <ProjectCard
          title='AidSupply'
          description='Volunteer software engineer at AidSupply, a Ukrainian non-profit with a new transparent digital platform that automates and simplifies logistics to "provide rapid aid to those who need it most" and "to make sure that the money and time spent on the humanitarian needs of the Ukrainian people are utilized in the most efficient way".'
          links={[
            // ['GitHub', 'https://github.com/Topher2014/TopherEmby'],
            // ['Demo', 'https://youtu.be/43IuuSmvnHs'],
            ['Website', 'https://AidSupply.org/']
          ]}
          image={image}
          notes={[
          ]}
        />
    );
}

export default AidSupply;