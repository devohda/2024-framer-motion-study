import './App.css';
import Ball from './component/Ball.tsx';
import SlideText from './component/SlideText.tsx';
import Text from './component/Text.tsx';

function App() {
  return (
    <main>
      <section>
        <div className="title">
          {'ZERO STUDIOS is an integrated creative agency.'
            .split('')
            .map((char, index) => (
              <SlideText key={index} position={index}>
                {char}
              </SlideText>
            ))}
        </div>
        <div className="wrapper">
          <Ball />
          <Text delay={0.6}>Z</Text>
          <Text delay={0.4}>E</Text>
          <Text delay={0.2}>R</Text>
          <Text delay={0}>O</Text>
        </div>
      </section>
      <div className="content">scrollable content</div>
    </main>
  );
}

export default App;
