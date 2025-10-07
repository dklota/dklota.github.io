import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Walmart Global Tech",
      location: "Sunnyvale, CA",
      period: "Jun 2025 - Aug 2025",
      type: "Internship",
      achievements: [
        "Engineered and deployed an end-to-end Natural Language to SQL Chatbot using Python and OpenAI LLM through LangChain",
        "Directed user workflow that redirected users to their tenant-specific data with RAG-based agent accessing Google BigQuery",
        "Achieved 92% accuracy through manual creation and testing of golden SQL statement sets",
        "Designed user-friendly TypeScript frontend integrating seamlessly as standalone page in internal platform",
        "Presented work to VP of Transportation Technology and SVP of Supply Chain Technology",
        "Built multiple proof-of-concepts strengthening knowledge of MCP Servers, RAG, and Streamlit"
      ],
      technologies: ["Python", "LangChain", "OpenAI", "TypeScript", "Google BigQuery", "RAG", "MCP Servers", "Streamlit"]
    },
    {
      title: "Vice President, Operations",
      company: "Artificial Intelligence Student Collective",
      location: "UC Davis",
      period: "Mar 2024 - Jun 2025",
      type: "Leadership",
      achievements: [
        "Hosted first and second annual Computer Science Research Symposium with 400+ attendees",
        "Outreached to UC Davis professors as panel speakers and facilitated discussions",
        "Increased event attendance by 10% through new marketing strategies including social media and direct outreach",
        "Achieved 96.3% positive feedback from 150+ attendees across disciplines",
        "Managed team of content, creative, and external affair directors",
        "Generated over 10K Instagram interactions through strategic content management"
      ],
      technologies: ["Event Management", "Team Leadership", "Marketing", "Social Media", "Public Speaking"]
    },
    {
      title: "Vice President, External Affairs",
      company: "Girls Who Code, UC Davis",
      location: "Davis, CA",
      period: "Mar 2024 - Jun 2025",
      type: "Leadership",
      achievements: [
        "Spearheaded AI For Financial Good project building emergency fund predictor using ML models",
        "Implemented Random Forest Classifier and Logistic Regression for fund allocation predictions",
        "Hosted first-ever weekend ML workshop for Girls Who Code with Movie Review Sentiment Analysis",
        "Provided guidance on machine learning models, confusion matrix, and libraries (pandas, matplotlib, seaborn)",
        "Organizing HerHacks - UC Davis second hackathon for women in technology"
      ],
      technologies: ["Machine Learning", "Python", "Pandas", "Matplotlib", "Seaborn", "Random Forest", "Logistic Regression"]
    },
    {
      title: "Intern, Brand Ambassador",
      company: "University Credit Union",
      location: "Davis, CA",
      period: "Dec 2024 - Present",
      type: "Part-time",
      achievements: [
        "Drive student membership growth through promotional events and direct student outreach",
        "Educate students on financial products and account benefits to increase sign-ups",
        "Coordinate 1-2 monthly events at school headquarters promoting financial literacy",
        "Target both students and faculty for comprehensive financial education outreach"
      ],
      technologies: ["Marketing", "Event Coordination", "Financial Education", "Student Outreach"]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-accent-blue/20 text-accent-blue border-accent-blue/30';
      case 'Leadership':
        return 'bg-accent-purple/20 text-accent-purple border-accent-purple/30';
      case 'Part-time':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };

  return (
    <section id="experience" className="section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-text-primary mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto font-light">
            Building impactful solutions and leading teams across technology and academia
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="card card-hover">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="heading-md text-text-primary">{exp.title}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-text-secondary mb-4">
                    <span className="text-xl font-semibold accent-text">{exp.company}</span>
                    <span className="hidden sm:block mx-3">•</span>
                    <span className="text-lg">{exp.location}</span>
                  </div>
                  <p className="text-text-muted text-lg">{exp.period}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="heading-sm text-text-primary mb-6">Key Achievements:</h4>
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-4">
                      <span className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></span>
                      <span className="text-text-secondary leading-relaxed text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="heading-sm text-text-primary mb-6">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-dark-surface text-text-secondary rounded-lg text-sm border border-dark-border hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
