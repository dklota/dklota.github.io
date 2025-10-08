import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", description: "Proficient - AI/ML, Backend, Data Science" },
        { name: "JavaScript", description: "Proficient - Full-stack Development" },
        { name: "TypeScript", description: "Proficient - Frontend, Type Safety" },
        { name: "SQL", description: "Intermediate - Complex Joins, Subqueries" },
        { name: "C++", description: "Intermediate - Algorithms, Object-Oriented Programming" }
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      skills: [
        { name: "Machine Learning", description: "Experience working with models such as Random Forest, Logistic Regression, and Neural Networks" },
        { name: "Natural Language Processing", description: "Text Processing, Sentiment Analysis" },
        { name: "RAG Systems", description: "Retrieval-Augmented Generation and Vector Databases for grounded knowledge" },
        { name: "LangChain", description: "LLM Integration, Agent Development" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🌐",
      skills: [
        { name: "Google Cloud Platform", description: "Cloud Services, API access"},
        { name: "Vercel", description: "Frontend Deployment, CI/CD"},
        { name: "VS Code", description: "Primary IDE, Extensions"},
        { name: "Git/Github", description: "Version Control, Collaboration"},
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: [
        { name: "React", level: 95, description: "Interactive UI, Frontend" },
        { name: "Flask", level: 80, description: "Web Applications, Backend" },
        { name: "Canva", level: 85, description: "Graphic Design, Marketing Materials" },
        { name: "Streamlit", level: 75, description: "Rapid Prototyping, Data Apps" },
        { name: "MCP Servers", level: 70, description: "Model Context Protocol" }
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Cloud Generative AI Leader",
      issuer: "Google Cloud",
      date: "Sept 2025",
      description: "Advanced certification in Generative AI technologies and applications"
    }
  ];

  const coursework = [
    "Object-Oriented Programming",
    "Data Structures & Algorithms", 
    "Algorithm Design & Analysis",
    "Artificial Intelligence",
    "Database Systems",
    "Machine Learning"
  ];

  return (
    <section id="skills" className="section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-text-primary mb-6">
            Skills & <span className="gradient-text">Knowledge</span>
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto font-light">
            A comprehensive toolkit spanning AI/ML, full-stack development, and leadership
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card card-hover">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-6">{category.icon}</span>
                <h3 className="heading-md text-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb">
                      <span className="text-text-primary font-semibold text-lg">{skill.name}</span>
                    </div>
                    <div className="w-full bg-dark-surface rounded-full h-3 mb">
                    </div>
                    <p className="text-text-muted group-hover:text-text-secondary transition-colors">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="heading-lg text-text-primary mb-12 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card card-hover">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-3">{cert.name}</h4>
                  <p className="accent-text font-semibold text-lg mb-3">{cert.issuer}</p>
                  <p className="text-text-muted mb-4">{cert.date}</p>
                  <p className="text-text-secondary">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="mb-20">
          <h3 className="heading-lg text-text-primary mb-12 text-center">
            Relevant <span className="gradient-text">Coursework</span>
          </h3>
          <div className="card">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {coursework.map((course, index) => (
                <div key={index} className="text-center p-6 bg-dark-surface rounded-xl border border-dark-border hover:border-accent transition-all duration-300">
                  <span className="text-text-secondary font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
            <h3 className="heading-md text-text-primary mb-6">
              Ready to Collaborate?
            </h3>
            <p className="text-text-secondary mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
              I bring a unique combination of technical expertise and leadership experience. 
              Let's discuss how my skills can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:divleen2@gmail.com"
                className="btn-primary text-lg px-10 py-4 focus-ring"
              >
                Let's Connect
              </a>
              <a
                href="https://www.linkedin.com/in/divleen-lota/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-10 py-4 focus-ring"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
