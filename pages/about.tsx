import MainTemplate from "../templates/MainTemplate";
import Link from "next/link";

const About = () => {
  return (
    <MainTemplate>
        <h1>Christopher Miller</h1>
        <p>Christopher remembers getting his first introduction to computing in 1985, at around age three. His dad came home from work one day with a box – it contained a soldering iron, a book and some bits. They sat at a table together and built a computer. It was a ZX Spectrum 48k. He vividly remembers the feelings of excitement and joy, as he watched this piece of technology come together, followed by fascination, as it was plugged into the television for the first time and came to life – the sheer ecstasy of watching some blocky graphics move on a screen in eight different colours, the sense of anticipation as the tape loaded a game for him and his dad to play.</p>
        <p>That day changed Christopher’s life for good. He started to learn the concept of typing things to make other things happen on screen and found a love for making computers do what he wanted to do. He learned this was called programming and he liked it. He wrote games that were published in Spectrum magazines and knew he was destined to one day work with computers and create software.</p>
        <p>Today, Christopher is a Full Stack Developer for <Link href="https://jump24.co.uk" target="_blank">Jump Twenty Four</Link>, Working with Laravel, CakePHP, React, Vue, React Native and many other languages. He is often found preparing his next talk, learning about the next new technology, or mentoring newcomers to the technology scene.</p>
        <p>Christopher takes great pride in being able to produce highly efficient code, logical debugging, seeing the bigger picture when looking at a feature request from a client, and suggesting changes that would improve process efficiency for Customers. Customers often comment on Christophers ability to turn tech jargon into easy to understand concepts, helping them to understand the problem, and the solution, often helping them to see the future possibilities of their applications.</p>
    </MainTemplate>
  );
}

export default About;
