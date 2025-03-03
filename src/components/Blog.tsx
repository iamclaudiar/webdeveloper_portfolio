function Blog() {
  return (
    <div
      className="bg-body-tertiary text-white min-vh-100"
      data-bs-theme="dark"
    >
      <p className="text-center fs-1 fw-bold">BLOG</p>
      <p>
        <p className="container-fluid px-4">
          🚀 My Favorite Tech Stack for Web Development When building web
          applications, choosing the right tech stack is crucial. Over time,
          I’ve experimented with various technologies and frameworks, refining
          my stack to one that provides both performance and developer
          efficiency. In this article, I’ll share my go-to tech stack for web
          development, why I use it, and how it helps me build scalable,
          maintainable applications.
        </p>
        <h3 className="text-success container-fluid px-4">
          Frontend: React + Bootstrap 🎨
        </h3>
        <h4 className="container-fluid px-4">Why React?</h4>
        <ul>
          <li>
            <strong>Component-based architecture</strong> makes UI development
            modular and reusable.
          </li>
          <li>
            <strong>Virtual DOM</strong> enhances performance by reducing
            unnecessary re-renders.
          </li>
          <li>
            <strong>Thriving ecosystem</strong> with a large community and a
            vast number of third-party libraries.
          </li>
          <li>
            <strong>Hooks API</strong> simplifies state management without
            requiring external libraries for many cases.
          </li>
        </ul>
        <h4 className="container-fluid px-4">Why Bootstrap?</h4>
        <ul>
          <li>
            It offers a <strong>responsive grid system</strong>, making layouts
            easy to implement.
          </li>
          <li>
            It provides <strong>pre-styled components</strong>, speeding up
            development.
          </li>
          <li>
            It ensures <strong>cross-browser compatibility</strong> and a
            consistent UI design.
          </li>
        </ul>
        <hr />
        <h3 className="text-danger container-fluid px-4">
          Backend: Spring Boot (Java) 🛠️
        </h3>
        <h4 className="container-fluid px-4">Why Spring Boot?</h4>
        <ul>
          <li>
            <strong>Rapid development</strong> with built-in features like
            dependency injection, security, and database integration.
          </li>
          <li>
            <strong>Microservices-friendly</strong>, making it easy to scale
            applications.
          </li>
          <li>
            <strong>Strong database integration</strong> with JPA and Hibernate.
          </li>
          <li>
            <strong>Security features</strong> like JWT authentication and
            OAuth2.
          </li>
        </ul>
        <hr />
        <h3 className="text-warning container-fluid px-4">
          Database: PostgreSQL 🗄️
        </h3>
        <h4 className="container-fluid px-4">Why PostgreSQL?</h4>
        <ul>
          <li>
            <strong>ACID compliance</strong> ensures data consistency.
          </li>
          <li>
            <strong>Advanced query capabilities</strong> with JSON support.
          </li>
          <li>
            <strong>Great performance</strong> for handling complex queries and
            relationships.
          </li>
        </ul>
        <hr />
        <h3 className="text-info container-fluid px-4">Conclusion</h3>
        <p className="container-fluid px-4">
          The combination of{" "}
          <strong>React, Bootstrap, Java Spring Boot, and PostgreSQL</strong>{" "}
          allows me to build{" "}
          <strong>
            scalable, maintainable, and high-performance web applications
          </strong>
          . Each technology has its strengths, and depending on project needs, I
          adapt my stack accordingly.
        </p>
        <p className="container-fluid px-4">
          💡 <strong>What’s your favorite tech stack? Let’s discuss! 🚀</strong>
        </p>
      </p>
    </div>
  );
}

export default Blog;
