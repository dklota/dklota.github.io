import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "divleen2@gmail.com",
      link: "mailto:divleen2@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "(669) 243-5546",
      link: "tel:+16692435546"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Milpitas, CA",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "divleen-lota",
      link: "https://www.linkedin.com/in/divleen-lota/"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-text-primary mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto font-light"> 
                I'm always excited to work on new projects and collaborate with like-minded individuals!
            </p>

        </div>

          {/* Contact Information */}
          <div className="space-y-8">

          {/* Contact Form */}
          <div className="card">
            <h3 className="heading-md text-text-primary mb-8">
              Send me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-text-primary mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-dark-surface border border-dark-border rounded-xl text-text-primary placeholder-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-text-primary mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-dark-surface border border-dark-border rounded-xl text-text-primary placeholder-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-text-primary mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-dark-surface border border-dark-border rounded-xl text-text-primary placeholder-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300 text-lg"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-text-primary mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-dark-surface border border-dark-border rounded-xl text-text-primary placeholder-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300 resize-none text-lg"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 focus-ring ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'btn-primary'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center text-lg">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
