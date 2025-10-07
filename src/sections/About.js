import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section id="about" className="section-spacing bg-stripe-surface">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-24 scroll-reveal ${isVisible ? 'revealed' : ''}`} ref={ref}>
          <h2 className="heading-lg text-text-primary mb-8">
            About Me
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
            Hi! I'm a fourth year undergraduate student at UC Davis studying Computer Science at Tehcnology Management. This portfolio highlights a few of my experiences and achievements I'm proud of. Outside of Computer Science, other hobbies of mine include weighlifting, crocheting, and watching basketball (Go Warriors!). Feel free to reach out for anything! :)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-xl text-text-secondary leading-relaxed font-light">
                I'm a Computer Science student at UC Davis with a Technology Management minor. This past summer, I  
                interned as a Software Engineer at Walmart Global Tech. My passion 
                lies in building innovative solutions that combine AI/ML with practical applications.
              </p>
              
              <p className="text-xl text-text-secondary leading-relaxed font-light">
                My goal is to leverage technology to solve real-world problems and create 
                meaningful impact through innovative software solutions.
              </p>
            </div>

            {/* Education Card */}
            <div className="card card-hover">
              <h3 className="text-2xl font-medium text-text-primary mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-text-primary">
                  University of California, Davis
                </h4>
                <p className="text-text-secondary text-lg font-light">
                  BS Computer Science, Technology Management Minor
                </p>
                <p className="text-text-muted">
                  Sep 2022 - Jun 2026
                </p>
              </div>
            </div>

                        {/* Contact Info */}
                        <div className="card border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10">
              <h3 className="heading-sm text-text-primary mb-4">
                Let's Connect!
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:divleen2@gmail.com"
                  className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors text-lg"
                >
                  <span className="text-2xl">📧</span>
                  <span>divleen2@gmail.com</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/divleen-lota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-text-secondary hover:text-accent transition-colors text-lg"
                >
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-12">
            {/* Technical Skills */}
            <div className="card card-hover">
              <h3 className="text-2xl font-medium text-text-primary mb-8">
                Technical Focus
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-blue to-stripe-pink rounded-full"></div>
                    <span className="text-text-secondary text-lg">AI/ML</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-blue to-stripe-pink rounded-full"></div>
                    <span className="text-text-secondary text-lg">Full-Stack</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-blue to-stripe-pink rounded-full"></div>
                    <span className="text-text-secondary text-lg">RAG-based Agents</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-pink to-stripe-blue rounded-full"></div>
                    <span className="text-text-secondary text-lg">Python</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-pink to-stripe-blue rounded-full"></div>
                    <span className="text-text-secondary text-lg">NLP</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-stripe-pink to-stripe-blue rounded-full"></div>
                    <span className="text-text-secondary text-lg">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Impact */}
            <div className="card card-hover">
              <h3 className="heading-sm text-text-primary mb-8 flex items-center">
                <span className="w-3 h-3 bg-accent rounded-full mr-4"></span>
                Leadership & Impact
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <span className="text-text-secondary text-lg">Throughout my leadership roles as both <strong>VP of Operations</strong> for the AI Student Collective and <strong>VP of External Affairs</strong> for Girls Who Code, I have had the chance to make an impact on my community through events and workshops.</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-lg">Tech Mixer</span>
                  <span className="accent-text font-bold text-xl">400+ attendees</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-lg">AI Research Symposium</span>
                  <span className="accent-text font-bold text-xl">200+ attendees/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-lg">CS Research Symposium</span>
                  <div className="text-right">
                    <span className="accent-text font-bold text-xl">8 esteemed professors, 150+ students/year</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary text-lg">Social Media Outreach</span>
                  <span className="accent-text font-bold text-xl">10K+ interactions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
