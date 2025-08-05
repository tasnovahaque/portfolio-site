import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Calendar, 
  MapPin, 
  BookOpen, 
  ArrowLeft,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Clock,
 
  Star
} from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState('current');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 'current',
      title: 'Graduate Teaching Assistant',
      department: 'Department of Computer Science and Engineering',
      institution: 'East West University',
      location: 'Dhaka, Bangladesh',
      period: 'Fall 2024 - Present',
      duration: '4+ months',
      type: 'Current Position',
      description: 'Currently mentoring students in advanced computing topics and research, focusing on computer science fundamentals and emerging technologies.',
      responsibilities: [
        'Assist students with complex programming assignments and projects',
        'Conduct tutorial sessions on operating System',
        'Guide students in Autocad concepts',
        'Support faculty in grading and evaluation processes',
        'Mentor junior students in research methodologies',
        'Facilitate lab sessions and practical demonstrations'
      ],
      skills: ['Teaching', 'Mentoring', 'Python', 'Machine Learning', 'Research Guidance'],
      achievements: [
        'Successfully guided 100+ students in CSE fundamentals',
        'Developed supplementary learning materials',
        'Maintained 95% student satisfaction rate'
      ],
      color: 'from-purple-500 to-blue-500',
      icon: Users
    },
    {
      id: 'previous',
      title: 'Undergraduate Teaching Assistant',
      department: 'Department of Mathematical and Physical Sciences and Department of Computer Science And Engineering ' ,
      institution: 'East West University',
      location: 'Dhaka, Bangladesh',
      period: 'Summer 2023 Fall 2024',
      duration: '1 year (4 consecutive semesters)',
      type: 'Completed',
      description: 'Served for three consecutive semesters, supporting students in mathematical and statistical concepts crucial for data science and machine learning applications.',
      responsibilities: [
        'Assisted students with mathematical problem-solving',
        'Conducted review sessions for calculus and statistics',
        'Helped students understand probability and statistical inference',
        'Supported laboratory work in Electrical Circuit',
        'Graded assignments and provided constructive feedback',
        'Organized study groups for challenging topics'
      ],
      skills: ['Mathematics', 'Statistics', 'Problem Solving', 'Academic Support', 'Communication'],
      achievements: [
        'Helped improve overall class performance by 15%',
        'Created visual aids for complex mathematical concepts',
        'Received positive feedback from faculty and students',
        'Completed full academic year commitment'
      ],
      color: 'from-emerald-500 to-teal-500',
      icon: BookOpen
    }
  ];

  const professionalSkills = [
    {
      category: 'Teaching & Mentoring',
      skills: [
        { name: 'Student Guidance', level: 95 },
        { name: 'Curriculum Support', level: 90 },
        { name: 'Academic Mentoring', level: 88 },
        { name: 'Research Supervision', level: 85 }
      ],
      color: 'purple'
    },
    {
      category: 'Technical Skills',
      skills: [
        { name: 'Python Programming', level: 92 },
        { name: 'Machine Learning', level: 88 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Mathematical Modeling', level: 87 }
      ],
      color: 'blue'
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Time Management', level: 92 }
      ],
      color: 'emerald'
    }
  ];

  const impact = [
    {
      metric: '100+',
      label: 'Students Mentored',
      description: 'Across both departments',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: '5',
      label: 'Semesters',
      description: 'Teaching experience',
      icon: Calendar,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      metric: '95%',
      label: 'Satisfaction Rate',
      description: 'Student feedback',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      metric: '15%',
      label: 'Performance Boost',
      description: 'Class improvement',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const currentRole = experiences.find(exp => exp.id === activeExperience);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
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
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              Building expertise through hands-on teaching, mentoring, and academic support across multiple disciplines.
            </p>
          </div>

          {/* Experience Toggle */}
          <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={`flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeExperience === exp.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span>{exp.type}</span>
                {exp.id === 'current' && <Clock className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Detailed Experience */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Header Info */}
                <div className="lg:w-1/3">
                  <div className={`w-16 h-16 bg-gradient-to-r ${currentRole.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <currentRole.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-2">{currentRole.title}</h2>
                  <p className="text-purple-300 text-lg mb-2">{currentRole.department}</p>
                  <p className="text-gray-300 mb-4">{currentRole.institution}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{currentRole.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Clock className="w-4 h-4" />
                      <span>{currentRole.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400">
                      <MapPin className="w-4 h-4" />
                      <span>{currentRole.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentRole.skills.map((skill, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="lg:w-2/3">
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{currentRole.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-400" />
                      Key Responsibilities
                    </h3>
                    <div className="space-y-3">
                      {currentRole.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      {currentRole.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Professional <span className="text-emerald-400">Impact</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impact.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.metric}</div>
                    <div className="text-purple-300 font-semibold mb-1">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Professional <span className="text-blue-400">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {professionalSkills.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className={`text-xl font-bold text-${category.color}-400 mb-6`}>{category.category}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className={`text-${category.color}-400 font-semibold`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Looking Forward</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                My teaching and mentoring experience has strengthened my communication skills and deepened my understanding of complex concepts. 
                I'm now seeking to transition into research-intensive or engineering-focused roles where I can apply my academic knowledge 
                and teaching experience to solve real-world problems in AI and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;