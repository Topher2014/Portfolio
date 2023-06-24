import ProjectCard from './ProjectCard';


function TopherEmby() {
    return (
        <ProjectCard
          title='Chess Is Hard'
          description='Play chess with other users and save/view game data. Includes castling, en passant capture, pawn promotion, and
          all win/draw scenarios'
          links={[
            ['GitHub', 'https://github.com/kvschneider0/chess'],
            ['Demo', 'https://youtu.be/43IuuSmvnHs'],
            ['Live Site', 'https://www.chess.kvschneider.com/login']
          ]}
          // image={Logo}
          notes={[
            'Created chess game logic from scratch using Python',
            'Designed a clean and modern website using React with Material UI',
            'Built a server using Flask to support the front-end and handle chess logic'
          ]}
        />
    );
}

export default TopherEmby;