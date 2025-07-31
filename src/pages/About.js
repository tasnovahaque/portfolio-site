import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Award, 
  Code, 
  Brain, 
  Target, 
  Lightbulb,
  BookOpen,
  Star,
  TrendingUp,
  Users,
  MapPin,
  Calendar
} from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { id: 'journey', label: 'My Journey', icon: BookOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Users },
    { id: 'passion', label: 'Passion & Goals', icon: Target }
  ];

  const achievements = [
    {
      year: '2024',
      title: '100% Tuition Free Merit Scholarship',
      description: 'CGPA 3.94 for three consecutive semesters',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2023',
      title: '100% Tuition Free Merit Scholarship',
      description: 'CGPA 4.00 for three consecutive semesters',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2025',
      title: 'CSE Graduate',
      description: 'Overall CGPA: 3.81/4.00',
      icon: GraduationCap,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const skills = [
    { category: 'AI/ML', items: ['Machine Learning', 'Deep Learning', 'Explainable AI', 'SHAP & LIME'], color: 'purple' },
    { category: 'Programming', items: ['Python', 'C/C++', 'MATLAB', 'PHP-Laravel'], color: 'blue' },
    { category: 'Tools & Tech', items: ['Data Analysis', 'Web Development', 'Excel', 'PowerPoint'], color: 'emerald' },
    { category: 'Languages', items: ['Bengali (Native)', 'English (Fluent)'], color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 py-20 px-6 sm:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-purple-300 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Dhaka, Bangladesh</span>
              <span>•</span>
              <GraduationCap className="w-5 h-5" />
              <span>CSE Graduate 2025</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A passionate Computer Science graduate with a deep fascination for transforming complex data into meaningful insights through AI and Machine Learning.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {section.label}
                </button>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="transition-all duration-500">
            
            {/* My Journey */}
            {activeSection === 'journey' && (
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">My Story</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      My journey in Computer Science began with curiosity and has evolved into a passionate pursuit of artificial intelligence and machine learning. As a dedicated learner with a strong drive for growth and excellence, I've always been eager to explore new ideas, embrace challenges, and expand my knowledge.
                    </p>
                    <p>
                      Throughout my academic career at East West University, I've maintained exceptional performance while diving deep into the fascinating world of AI. My focus on explainable AI stems from a belief that machine learning should not be a black box – it should be transparent, interpretable, and trustworthy.
                    </p>
                    <p>
                      With a strong work ethic and commitment to both personal and professional success, I'm now seeking research-intensive or engineering-focused roles that blend algorithmic efficiency with impactful real-world applications.
                    </p>
                  </div>
                </div>

                {/* Achievements Timeline */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">Key Achievements</h3>
                  <div className="grid gap-6">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">{achievement.year}</span>
                                <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                              </div>
                              <p className="text-gray-300">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Educational Background</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">2021 – 2025</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Bachelor of Computer Science and Engineering</h3>
                      <p className="text-gray-300 mb-2">East West University, Dhaka, Bangladesh</p>
                      <div className="flex items-center gap-4">
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">CGPA: 3.81/4.00</span>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Credits: 140/140</span>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">2017 – 2019</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Higher Secondary Certificate (HSC)</h3>
                      <p className="text-gray-300 mb-2">Comilla Govt. Women's College, Cumilla, Bangladesh</p>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">GPA: 4.67/5.00</span>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 font-semibold">2014 – 2017</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Secondary School Certificate</h3>
                      <p className="text-gray-300 mb-2">Amratali C.Ali High School, Cumilla, Bangladesh</p>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">GPA: 4.58/5.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6 pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">Fall 2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Undergraduate Teaching Assistant</h3>
                      <p className="text-gray-300 mb-3">Department of CSE, East West University</p>
                      <p className="text-gray-400">Currently mentoring students in advanced computing topics and research, sharing knowledge in computer science fundamentals and emerging technologies.</p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">Summer 2023 to Summer 2024</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Undergraduate Teaching Assistant</h3>
                      <p className="text-gray-300 mb-3">Department of MPS, East West University</p>
                      <p className="text-gray-400">Served for three consecutive semesters, supporting students in mathematical and statistical concepts crucial for data science and machine learning applications.</p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                      <h3 className={`text-lg font-bold text-${skillGroup.color}-400 mb-4`}>{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`bg-${skillGroup.color}-500/20 text-${skillGroup.color}-300 px-3 py-1 rounded-full text-sm`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Passion & Goals */}
            {activeSection === 'passion' && (
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">My Passion</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      My passion lies in the intersection of artificial intelligence and real-world problem solving. I'm particularly fascinated by <strong className="text-purple-400">explainable AI</strong> – the idea that machine learning models should not be mysterious black boxes, but transparent systems that we can understand and trust.
                    </p>
                    <p>
                      I believe in building AI systems that are not just accurate, but also interpretable and accessible. Using tools like <strong className="text-blue-400">SHAP and LIME</strong>, I strive to make AI decisions transparent, especially in critical domains like medical diagnosis and decision support systems.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Career Goals</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    <p>
                      I'm seeking <strong className="text-emerald-400">research-intensive or engineering-focused roles</strong> that allow me to blend algorithmic efficiency with impactful real-world applications. My goal is to contribute to projects that push the boundaries of what's possible with AI while maintaining ethical and interpretable approaches.
                    </p>
                    <p>
                      I'm particularly interested in roles involving:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg">
                        <Code className="w-5 h-5 text-purple-400" />
                        <span>ML Engineering & Model Development</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg">
                        <Brain className="w-5 h-5 text-blue-400" />
                        <span>AI Research & Innovation</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        <span>Data Science & Analytics</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-orange-500/10 rounded-lg">
                        <Lightbulb className="w-5 h-5 text-orange-400" />
                        <span>Explainable AI Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;