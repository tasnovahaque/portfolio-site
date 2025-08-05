import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Database, 
  Palette, 
  Globe, 
  BookOpen,
  Heart,
  Lightbulb,
  Target,
  Zap,
  TrendingUp,
  Star,
  Award,
  Cpu,
  BarChart3,
  Languages,
  Music,
  Camera,
  Coffee,
  Gamepad2,
  Microscope,
  ArrowLeft,
} from 'lucide-react';

const SkillsInterests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('technical');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    { id: 'technical', label: 'Technical Skills', icon: Code },
    { id: 'tools', label: 'Tools & Platforms', icon: Database },
    { id: 'soft', label: 'Soft Skills', icon: Heart },
    { id: 'interests', label: 'Interests & Hobbies', icon: Star }
  ];

  const technicalSkills = [
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 90, experience: '2+ years', icon: Brain },
        { name: 'Deep Learning', level: 85, experience: '1.5+ years', icon: Cpu },
        { name: 'Explainable AI (SHAP/LIME)', level: 88, experience: '1+ year', icon: Lightbulb },
        { name: 'Data Analysis', level: 92, experience: '2+ years', icon: BarChart3 }
      ],
      color: 'purple'
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, experience: '3+ years', icon: Code },
        { name: 'C/C++', level: 85, experience: '2+ years', icon: Code },
        { name: 'MATLAB', level: 80, experience: '1+ year', icon: Code },
        { name: 'HTML/CSS', level: 88, experience: '2+ years', icon: Globe }
      ],
      color: 'blue'
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'TensorFlow/Keras', level: 82, experience: '1+ year', icon: Brain },
        { name: 'Scikit-learn', level: 90, experience: '2+ years', icon: Target },
        { name: 'Pandas/NumPy', level: 92, experience: '2+ years', icon: Database },
        { name: 'PHP Laravel', level: 75, experience: '6+ months', icon: Globe }
      ],
      color: 'emerald'
    },
    {
      category: 'Data & Visualization',
      skills: [
        { name: 'Data Preprocessing', level: 90, experience: '2+ years', icon: Database },
        { name: 'Statistical Analysis', level: 88, experience: '2+ years', icon: BarChart3 },
        { name: 'Matplotlib/Seaborn', level: 85, experience: '1.5+ years', icon: Palette },
        { name: 'Excel (Advanced)', level: 95, experience: '3+ years', icon: BarChart3 }
      ],
      color: 'orange'
    }
  ];

  const toolsPlatforms = [
    { name: 'Jupyter Notebook', level: 95, category: 'Development', icon: Code },
    { name: 'Git/GitHub', level: 88, category: 'Version Control', icon: Code },
    { name: 'Google Colab', level: 90, category: 'Cloud Computing', icon: Globe },
    { name: 'VS Code', level: 92, category: 'IDE', icon: Code },
    { name: 'Microsoft Office Suite', level: 95, category: 'Productivity', icon: BarChart3 },
    { name: 'PowerPoint (Advanced)', level: 98, category: 'Presentation', icon: Palette },
    { name: 'Web Development', level: 80, category: 'Frontend', icon: Globe },
    { name: 'Database Management', level: 82, category: 'Backend', icon: Database }
  ];

  const softSkills = [
    { name: 'Communication', level: 95, description: 'Excellent written and verbal communication', icon: Languages },
    { name: 'Problem Solving', level: 92, description: 'Analytical thinking and creative solutions', icon: Lightbulb },
    { name: 'Teaching & Mentoring', level: 90, description: 'Experience guiding 100+ students', icon: BookOpen },
    { name: 'Leadership', level: 85, description: 'Team coordination and project management', icon: Target },
    { name: 'Time Management', level: 88, description: 'Efficient task prioritization', icon: TrendingUp },
    { name: 'Research Skills', level: 90, description: 'Academic research and analysis', icon: Microscope },
    { name: 'Adaptability', level: 92, description: 'Quick learning and flexibility', icon: Zap },
    { name: 'Critical Thinking', level: 90, description: 'Data-driven decision making', icon: Brain }
  ];

  const interests = [
    {
      category: 'Professional Interests',
      items: [
        { name: 'Artificial Intelligence Research', icon: Brain, description: 'Exploring cutting-edge AI technologies' },
        { name: 'Medical AI Applications', icon: Microscope, description: 'AI for healthcare and diagnosis' },
        { name: 'Explainable AI', icon: Lightbulb, description: 'Making AI transparent and trustworthy' },
        { name: 'Deep Learning', icon: Cpu, description: 'Neural networks and advanced ML' },
        { name: 'Data Science', icon: BarChart3, description: 'Extracting insights from complex data' },
        { name: 'Machine Learning Ethics', icon: Heart, description: 'Responsible AI development' }
      ],
      color: 'purple'
    },
    {
      category: 'Personal Hobbies',
      items: [
        { name: 'Reading Tech Books', icon: BookOpen, description: 'Staying updated with latest tech trends' },
        { name: 'Online Learning', icon: Globe, description: 'Continuous skill development' },
        { name: 'Music', icon: Music, description: 'Relaxation and creativity boost' },
        { name: 'Photography', icon: Camera, description: 'Capturing moments and patterns' },
        { name: 'Coffee & Coding', icon: Coffee, description: 'Perfect combination for productivity' },
        { name: 'Tech Podcasts', icon: Gamepad2, description: 'Learning from industry experts' }
      ],
      color: 'emerald'
    }
  ];

  const languages = [
    { name: 'Bengali', level: 'Native', proficiency: 100, description: 'Mother tongue, fluent in all aspects' },
    { name: 'English', level: 'Fluent', proficiency: 95, description: 'Excellent in speaking, writing, and technical communication' }
  ];

  const achievements = [
    { name: 'Academic Excellence', description: 'Consistent high performance (CGPA 3.81)', icon: Award },
    { name: 'Merit Scholarships', description: 'Two consecutive 100% tuition scholarships', icon: Star },
    { name: 'Teaching Experience', description: '4 semesters as teaching assistant', icon: BookOpen },
    { name: 'Student Mentoring', description: 'Successfully guided 100+ students', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              Skills & <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Interests</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              A comprehensive overview of my technical expertise, professional capabilities, and personal interests that drive my passion for technology.
            </p>
          </div>
{/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back</span>
          </button>
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">{category.label}</span>
                  <span className="xs:hidden">{category.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Technical Skills */}
          {activeCategory === 'technical' && (
            <div className="space-y-8">
              {technicalSkills.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className={`text-2xl font-bold text-${category.color}-400 mb-6`}>{category.category}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <div 
                          key={skillIndex} 
                          className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                          onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 rounded-lg flex items-center justify-center`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-semibold">{skill.name}</h3>
                              <p className="text-gray-400 text-sm">{skill.experience}</p>
                            </div>
                            <span className={`text-${category.color}-400 font-bold text-lg`}>{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 h-2 rounded-full transition-all duration-1000 ${
                                hoveredSkill === `${index}-${skillIndex}` ? 'animate-pulse' : ''
                              }`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
 
          {/* Tools & Platforms */}
          {activeCategory === 'tools' && (
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-blue-400 mb-6">Development Tools & Platforms</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {toolsPlatforms.map((tool, index) => {
                    const IconComponent = tool.icon;
                    return (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">{tool.category}</p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-bold">
                            {tool.level}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-emerald-400 mb-6">Languages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {languages.map((lang, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-semibold">
                          {lang.level}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{lang.description}</p>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full"
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {activeCategory === 'soft' && (
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-pink-400 mb-6">Professional Soft Skills</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-white font-semibold">{skill.name}</h3>
                              <span className="text-pink-400 font-bold">{skill.level}%</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3">{skill.description}</p>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-pink-500 to-purple-400 h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6">Key Achievements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">{achievement.name}</h3>
                          <p className="text-gray-300 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Interests & Hobbies */}
          {activeCategory === 'interests' && (
            <div className="space-y-8">
              {interests.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className={`text-2xl font-bold text-${category.color}-400 mb-6`}>{category.category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={itemIndex} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                          <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-white font-semibold mb-3">{item.name}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Learning Goals */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning Goals</h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                    I believe in lifelong learning and constantly expanding my skill set. Currently focusing on advanced deep learning architectures, 
                    reinforcement learning, and staying updated with the latest developments in explainable AI and ethical machine learning practices.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Advanced Deep Learning', 'Reinforcement Learning', 'MLOps', 'Computer Vision', 'NLP', 'AI Ethics'].map((goal, index) => (
                      <span key={index} className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full font-semibold">
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsInterests;