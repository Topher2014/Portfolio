import ProjectCard from '../ProjectCard';
import image from '../../Assets/TopherEmby.png'


function TopherEmby() {
    return (
        <ProjectCard
          title='Topher Emby'
          description='Web application to enable movie and television file request consolidation for administrators servicing user created group and friend networks in conjunction with programs like Emby, Plex, and Jellyfin'
          links={[
            ['GitHub', 'https://github.com/Topher2014/TopherEmby'],
            // ['Demo', 'https://youtu.be/43IuuSmvnHs'],
            ['Website', 'https://www.topheremby.com/']
          ]}
          image={image}
          notes={[
            'Designed and implemented fullstack app using Python Flask, JavaScript XML, and MUI',
            'Worked across agile development lifecycle to build and maintain code',
            'Built a search feature to pull from IMDB API to streamline and consolidate user experience'
          ]}
        />
    );
}

export default TopherEmby;