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
  
  MapPin,
  Calendar,
  ArrowLeft,
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

  

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 w-full min-h-full py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back</span>
          </button>
          
          {/* Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-4 text-purple-300 mb-6 sm:mb-8 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <span className="hidden xs:inline">•</span>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>CSE Graduate 2025</span>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              A passionate Computer Science graduate with a deep fascination for transforming complex data into meaningful insights through AI and Machine Learning.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{section.label}</span>
                  <span className="xs:hidden">{section.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="transition-all duration-500">
            
            {/* My Journey */}
            {activeSection === 'journey' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">My Story</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
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
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Key Achievements</h3>
                  <div className="grid gap-4 sm:gap-6">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                                <span className="text-xs sm:text-sm bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full w-fit">{achievement.year}</span>
                                <h4 className="text-base sm:text-lg font-semibold text-white break-words">{achievement.title}</h4>
                              </div>
                              <p className="text-gray-300 text-sm sm:text-base">{achievement.description}</p>
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
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Educational Background</h2>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 pb-4 sm:pb-6">
                      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold text-sm sm:text-base">2021 – 2025</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Bachelor of Computer Science and Engineering</h3>
                      <p className="text-gray-300 mb-2 text-sm sm:text-base">East West University, Dhaka, Bangladesh</p>
                      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4">
                        <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm w-fit">CGPA: 3.81/4.00</span>
                        <span className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm w-fit">Credits: 140/140</span>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 pb-4 sm:pb-6">
                      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold text-sm sm:text-base">2017 – 2019</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Higher Secondary Certificate (HSC)</h3>
                      <p className="text-gray-300 mb-2 text-sm sm:text-base">Comilla Govt. Women's College, Cumilla, Bangladesh</p>
                      <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">GPA: 4.67/5.00</span>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                      <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-400 font-semibold text-sm sm:text-base">2014 – 2017</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Secondary School Certificate</h3>
                      <p className="text-gray-300 mb-2 text-sm sm:text-base">Amratali C.Ali High School, Cumilla, Bangladesh</p>
                      <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">GPA: 4.58/5.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            

               
                         
                       
                      
                    
                

            {/* Passion & Goals */}
            {activeSection === 'passion' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">My Passion</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      My passion lies in the intersection of artificial intelligence and real-world problem solving. I'm particularly fascinated by <strong className="text-purple-400">explainable AI</strong> – the idea that machine learning models should not be mysterious black boxes, but transparent systems that we can understand and trust.
                    </p>
                    <p>
                      I believe in building AI systems that are not just accurate, but also interpretable and accessible. Using tools like <strong className="text-blue-400">SHAP and LIME</strong>, I strive to make AI decisions transparent, especially in critical domains like medical diagnosis and decision support systems.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Career Goals</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      I'm seeking <strong className="text-emerald-400">research-intensive or engineering-focused roles</strong> that allow me to blend algorithmic efficiency with impactful real-world applications. My goal is to contribute to projects that push the boundaries of what's possible with AI while maintaining ethical and interpretable approaches.
                    </p>
                    <p>
                      I'm particularly interested in roles involving:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-purple-500/10 rounded-lg">
                        <Code className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base">ML Engineering & Model Development</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-500/10 rounded-lg">
                        <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base">AI Research & Innovation</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-emerald-500/10 rounded-lg">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Data Science & Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-orange-500/10 rounded-lg">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                        <span className="text-sm sm:text-base">Explainable AI Solutions</span>
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