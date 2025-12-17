import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
      <h2>About Me</h2>
  About Me

  <p>I’m a junior front-end developer looking for a new role in an exciting company. 
  I focus on writing accessible HTML, using modern CSS practices and writing clean 
  JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
  whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
  and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
  I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
  you to check out my work.</p>

  <button onClick={handlePortfolioClick} className='primary-btn'>Go to Portfolio</button>

  <p>Interested in doing a project together?</p>

  <button onClick={handleContactClick} className='secondary-btn'>Contact Me</button>
  </div>
)};

export default Home;