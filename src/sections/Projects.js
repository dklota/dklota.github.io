import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Google Sheets AI Task Agent",
      status: "Ongoing",
      description: "Built a full-stack task management system processing user audio via React/TypeScript frontend to automate data entry into Google Sheets Task List. Integrating Google Speech-to-Text API for audio transcription and gspread for Google Sheets API access.",
      features: [
        "Audio-to-text transcription using Google Cloud Speech-to-Text API",
        "NLP parsing with Google Gemini API for intelligent task extraction",
        "Flask backend handling CORS and API integration",
        "React/TypeScript frontend for intuitive user interface",
        "Progressive Web App (PWA) capabilities in development",
        "Multi-user deployment architecture planned"
      ],
      technologies: ["Python", "Flask", "Gemini API", "Google Cloud Speech-to-Text", "TypeScript", "React", "PWA"],
      github: "#",
      demo: "#",
      image: "/img/ai-task-agent.png"
    },
    {
      title: "Receipt Recipe Recommender",
      status: "Completed",
      description: "Developed a recipe recommender system used by 100+ testers to upload receipts, parse them using Google Cloud Vision API, and generate recipe suggestions. Optimized LLM accuracy through advanced prompt engineering techniques.",
      features: [
        "Receipt image upload and processing via Google Cloud Vision API",
        "Intelligent recipe suggestion generation using OpenAI",
        "Google Cloud Storage integration for scalable image storage",
        "Advanced prompt engineering (few-shot and role prompting)",
        "Collaborative development with 4-person team using GitHub",
        "React frontend deployed on Vercel"
      ],
      technologies: ["JavaScript", "React", "Google Cloud Vision API", "OpenAI", "Python", "GCP", "Vercel", "GitHub"],
      github: "#",
      demo: "#",
      image: "/img/recipe-recommender.png"
    },
    {
      title: "Walmart Supply Chain RAG Chatbot",
      status: "Completed",
      description: "Engineered and deployed an end-to-end Natural Language to SQL Chatbot for Walmart's internal supply chain data. Achieved 92% accuracy through comprehensive testing and optimization.",
      features: [
        "Natural Language to SQL conversion using OpenAI LLM and LangChain",
        "RAG-based agent accessing Google BigQuery for real-time data",
        "Tenant-specific data redirection and user workflow management",
        "TypeScript frontend integrating as standalone page in internal platform",
        "Comprehensive testing with manually created golden SQL statement sets",
        "Presented to VP of Transportation Technology and SVP of Supply Chain Technology"
      ],
      technologies: ["Python", "LangChain", "OpenAI", "TypeScript", "Google BigQuery", "RAG", "Streamlit", "MCP Servers"],
      image: "/img/rag-chatbot.png"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Completed':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="section-spacing bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-text-primary mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto font-light">
            Innovative solutions combining AI/ML, full-stack development, and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="card card-hover group">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="heading-md text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                      project.status
                    )}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-text-secondary mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="heading-sm text-text-primary mb-6">Key Features:</h4>
                <ul className="space-y-3">
                  {project.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></span>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-text-muted italic">
                      +{project.features.length - 4} more features...
                    </li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="heading-sm text-text-primary mb-6">Technologies:</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-dark-surface text-text-secondary rounded-lg text-sm border border-dark-border hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center space-x-3 px-6 py-3 bg-dark-surface text-text-secondary rounded-lg border border-dark-border hover:border-accent hover:text-accent transition-all duration-300 focus-ring"
                >
                  <span className="text-lg">📁</span>
                  <span>Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-3 px-6 py-3 btn-primary focus-ring"
                >
                  <span className="text-lg">🚀</span>
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
