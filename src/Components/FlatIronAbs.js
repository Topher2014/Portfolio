import ProjectCard from './ProjectCard';
import image from '../Assets/FlatIron.png'


function FltIronAbs() {
    return (
        <ProjectCard
          title='Flat & Iron Abs'
          description='Gym web application where trainers and customers can create accounts, add workouts to their schedule, and leave reviews'
          links={[
            ['GitHub', 'https://github.com/Topher2014/flatiron_abs'],
            ['Demo', 'https://vimeo.com/manage/videos/826435338'],
            // ['Live Site', 'https://www.topheremby.com/']
          ]}
          image={image}
          notes={[
            'Utilized agile development lifecycle in a virtual team environment to plan, implement, and sync workflow',
            'Implemented user verification using a password hash and Bcrypt',
            'Developed backend models using many-to-many relationships with Python to allow data sequestration',
            'Designed frontend components with React and CSS to fetch and render backend data'
          ]}
        />
    );
}

export default FltIronAbs;