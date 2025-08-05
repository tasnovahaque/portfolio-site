import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  ArrowLeft,
  BookOpen, 
  Calendar,
  MapPin,
  Star,
  Trophy,
  Target,
  CheckCircle,
  
} from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationData = [
    {
      id: 'bachelor',
      period: '2021 – 2025',
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'East West University',
      location: 'Dhaka, Bangladesh',
      cgpa: '3.81/4.00',
      credits: '140/140',
      status: 'Completed',
      highlights: [
        'Specialized in Machine Learning and AI',
        'Focus on Explainable AI and Deep Learning',
        'Research in Medical AI Applications',
        'Advanced courses in Data Structures & Algorithms'
      ],
      color: 'from-purple-500 to-blue-500',
      icon: GraduationCap
    },
    {
      id: 'hsc',
      period: '2017 – 2019',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Comilla Govt. Women\'s College',
      location: 'Cumilla, Bangladesh',
      cgpa: '4.67/5.00',
      status: 'Completed',
      highlights: [
        'Science Group specialization',
        'Strong foundation in Mathematics & Physics',
        'Excellent academic performance',
        'Leadership in academic activities'
      ],
      color: 'from-emerald-500 to-teal-500',
      icon: BookOpen
    },
    {
      id: 'ssc',
      period: '2014 – 2017',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Amratali C.Ali High School',
      location: 'Cumilla, Bangladesh',
      cgpa: '4.58/5.00',
      status: 'Completed',
      highlights: [
        'Science Group with Mathematics',
        'Active participation in science fairs',
        'Strong analytical thinking development',
        'Foundation for STEM education'
      ],
      color: 'from-orange-500 to-red-500',
      icon: Target
    }
  ];

  const scholarships = [
    {
      year: '2024',
      title: '100% Tuition Free Merit Scholarship',
      institution: 'East West University',
      achievement: 'CGPA 3.94 (3 consecutive semesters)',
      description: 'Awarded for exceptional academic performance and demonstrated commitment to excellence',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2023',
      title: '100% Tuition Free Merit Scholarship',
      institution: 'East West University',
      achievement: 'CGPA 4.00 (3 consecutive semesters)',
      description: 'Recognition of outstanding academic excellence and consistent high performance',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const keySubjects = [
    { name: 'Machine Learning', grade: 'A+', category: 'AI/ML' },
    { name: 'Deep Learning', grade: 'A', category: 'AI/ML' },
    { name: 'Data Structures & Algorithms', grade: 'A+', category: 'Core CS' },
    { name: 'Database Management Systems', grade: 'A', category: 'Core CS' },
    { name: 'Software Engineering', grade: 'A+', category: 'Engineering' },
    { name: 'Web Technologies', grade: 'A', category: 'Development' },
    { name: 'Computer Networks', grade: 'A', category: 'Systems' },
    { name: 'Operating Systems', grade: 'A+', category: 'Systems' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-64 md:h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
              Educational <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              A foundation built on academic excellence, continuous learning, and a passion for computer science and artificial intelligence.
            </p>
          </div>

          {/* Academic Timeline */}
          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Academic Timeline</h2>
            
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={edu.id}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] ${
                    activeCard === edu.id ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(edu.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Icon and Period */}
                    <div className="flex flex-col items-center lg:items-start">
                      <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 text-purple-400 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-xl text-purple-300 mb-4">{edu.institution}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg font-semibold">
                            CGPA: {edu.cgpa}
                          </span>
                          {edu.credits && (
                            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-semibold">
                              Credits: {edu.credits}
                            </span>
                          )}
                          <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg font-semibold">
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scholarships & Awards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Scholarships & <span className="text-yellow-400">Awards</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {scholarships.map((scholarship, index) => {
                const IconComponent = scholarship.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${scholarship.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
                            {scholarship.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{scholarship.title}</h3>
                        <p className="text-purple-300 font-semibold mb-2">{scholarship.institution}</p>
                        <p className="text-emerald-400 font-semibold mb-3">{scholarship.achievement}</p>
                        <p className="text-gray-300 leading-relaxed">{scholarship.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Subjects */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Key <span className="text-blue-400">Subjects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keySubjects.map((subject, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center">
                    <h4 className="text-white font-semibold mb-2">{subject.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-bold">
                        {subject.grade}
                      </span>
                    </div>
                    <span className="text-purple-300 text-sm">{subject.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Stats */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Academic Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3.81</div>
                <div className="text-gray-300">Overall CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">140</div>
                <div className="text-gray-300">Credits Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
                <div className="text-gray-300">Merit Scholarships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300">Years of Study</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;