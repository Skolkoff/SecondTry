import React from "react";
import '../App.css';

const About = () => {
    return(
        <section className="about">
      <div className="about__inner">
        <div className="about__text">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod sapien, in commodo dolor consequat in. Duis a mi faucibus, volutpat tellus vitae, iaculis nulla. In quis urna sagittis, dapibus libero eget, viverra augue. Maecenas nec elit id elit congue pharetra. Sed euismod ligula ut metus egestas, eu posuere quam suscipit. Nulla facilisi. Nullam lobortis, mauris vel pellentesque tincidunt, felis velit faucibus velit, nec euismod nulla quam nec mi. In fringilla risus et eros elementum vestibulum. Donec placerat purus vel augue dignissim sagittis. Nullam in laoreet nisl. Nullam rutrum nulla id ex lacinia hendrerit.</p>
          <p>Etiam hendrerit laoreet tortor vel imperdiet. Etiam bibendum magna non massa eleifend, vel semper est molestie. Sed eu dolor augue. Proin varius arcu vel suscipit faucibus. Aenean eu tellus tincidunt, venenatis quam eu, consectetur tortor. Curabitur nec rutrum massa, eu blandit nunc. Vivamus laoreet metus eget blandit faucibus. Duis bibendum malesuada nisl, vitae dictum nibh tincidunt et. Duis hendrerit euismod erat, in bibendum dolor faucibus eu.</p>
        </div>
        <div className="about__image">
          <img src="https://dummyimage.com/600x400/000/fff" alt="Massage" />
        </div>
      </div>
    </section>
    );
};
export default About;