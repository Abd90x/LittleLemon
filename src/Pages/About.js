import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../Assets/images/Logo.svg";
export default function About() {
  return (
    <section>
      <Container className="mb-5">
        <img src={Logo} alt="Little Lemon Logo" className="about-logo" />
        <h1>Welcome to Little Lemon, Where Tradition Meets Innovation!</h1>
        <p>
          Nestled in the heart of Chicago on Maldove Street, Little Lemon brings
          the vibrant flavors of the Mediterranean to your table. As a
          family-owned establishment, we take immense pride in infusing
          traditional recipes with a modern flair, delivering a dining
          experience that tantalizes the taste buds and warms the soul.
        </p>

        <h2>Our Story</h2>
        <p>
          At Little Lemon, our journey began with a passion for preserving the
          authenticity of Mediterranean cuisine while embracing contemporary
          culinary techniques. Passed down through generations, our recipes are
          steeped in tradition, each dish telling a story of cultural richness
          and time-honored flavors.
        </p>

        <h2>Culinary Excellence</h2>
        <p>
          Led by our expert chefs, our kitchen is a hub of creativity and
          dedication. We source the freshest ingredients, handpicking each
          element to ensure the highest quality in every dish. From the aromatic
          spices to the locally-sourced produce, every ingredient is
          thoughtfully chosen to create a symphony of flavors on your plate.
        </p>

        <h2>Modern Interpretation</h2>
        <p>
          While rooted in tradition, we take pride in our innovative approach.
          Our commitment to culinary artistry allows us to introduce a modern
          twist to classic dishes, presenting a harmonious blend of old-world
          charm and contemporary finesse. Prepare to embark on a culinary
          journey that respects tradition while embracing innovation.
        </p>

        <h2>Experience Little Lemon</h2>
        <p>
          Step into our warm and inviting ambiance, where every corner exudes
          the essence of Mediterranean hospitality. Whether you're indulging in
          our signature dishes, exploring our diverse menu, or simply savoring a
          cup of our freshly brewed coffee, your time at Little Lemon promises
          to be a celebration of flavors and togetherness.
        </p>

        <h2>Our Promise</h2>
        <p>
          At Little Lemon, we pledge to provide not just a meal, but an
          experience steeped in culture, flavor, and heartfelt hospitality. Join
          us on a gastronomic adventure where tradition meets innovation, and
          let us transport you to the sun-kissed shores of the Mediterranean,
          one dish at a time.
        </p>

        <p>
          Come, dine with us at Little Lemon and be part of our family's
          culinary legacy.
        </p>
      </Container>
    </section>
  );
}
