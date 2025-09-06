import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Globe, 
  Microscope,
  Heart,
  MessageSquare,
  Calendar,
  ArrowLeft,
  Zap,
  Smartphone,
  Music,
  Car,
  DollarSign,
  Network,
  Cpu,
  
  Github,
  
  Star,
  TrendingUp,
  Target,

  Lightbulb,
  ChevronRight,
  Filter,
  Search,
} from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectCategories = [
    { id: 'all', label: 'All Projects', count: 13 },
    { id: 'ai-ml', label: 'AI & Machine Learning', count: 6 },
    { id: 'web', label: 'Web Development', count: 2 },
    { id: 'mobile', label: 'Mobile Development', count: 1 },
    { id: 'systems', label: 'Systems & OS', count: 1 },
    { id: 'networking', label: 'Networking', count: 1 },
    { id: 'hardware', label: 'Hardware & Electronics', count: 2 }
  ];

  const projects = [
    {
      id: 'xdetech',
      title: 'XDetech – TB Detection',
      category: 'ai-ml',
      featured: true,
      shortDescription: 'AI-powered tuberculosis detection from chest X-rays using CNNs and Grad-CAM explainability.',
      description: 'Developed an advanced deep learning system for tuberculosis detection using chest X-ray images. Implemented and compared multiple CNN architectures, with ShuffleNet v2 achieving the best performance. Integrated Grad-CAM for model interpretability, allowing medical professionals to understand decision-making processes. Created an interactive web application (XDetech) for real-time diagnosis.',
      technologies: ['Python', 'TensorFlow', 'ShuffleNet v2', 'Grad-CAM', 'Web Development', 'Medical AI'],
      features: [
        'Multiple CNN architecture comparison',
        'ShuffleNet v2 optimization for mobile deployment',
        'Grad-CAM visualization for explainable AI',
        'Interactive web-based diagnostic tool',
        'Real-time chest X-ray analysis',
        'Medical-grade accuracy validation'
      ],
      impact: 'Potential to assist healthcare professionals in early TB detection, especially in resource-limited settings.',
      icon: Microscope,
      color: 'from-emerald-500 to-teal-500',
      status: 'Completed',
      duration: '6 months',
      complexity: 'High',
      githubUrl: 'https://github.com/tasnovahaque/TB_Detection'
    },
    {
      id: 'anemia-analysis',
      title: 'Anemia CBC Analysis',
      category: 'ai-ml',
      shortDescription: 'Machine learning system for anemia detection using Complete Blood Count data.',
      description: 'Developed a comprehensive machine learning-based system to detect anemia using Complete Blood Count (CBC) data. Performed extensive data preprocessing and exploratory data analysis to identify key health indicators. Implemented and compared multiple models including Logistic Regression and Random Forest for accurate anemia classification.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Medical Data Analysis'],
      features: [
        'Comprehensive CBC data preprocessing',
        'Detailed exploratory data analysis',
        'Multiple ML model comparison',
        'Health indicator identification',
        'Cost-effective diagnostic approach',
        'Early detection capabilities'
      ],
      impact: 'Enables early and cost-effective anemia diagnosis through routine blood test analysis.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      status: 'Completed',
      duration: '4 months',
      complexity: 'Medium',
      githubUrl: 'https://github.com/tasnovahaque/Anemia-CBC-Analysis'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis Using ML & NLP',
      category: 'ai-ml',
      shortDescription: 'Advanced sentiment classification system using NLP techniques and machine learning.',
      description: 'Built a comprehensive sentiment analysis system to classify textual data as positive, negative, or neutral. Implemented advanced NLP techniques including tokenization, TF-IDF vectorization, and multiple machine learning algorithms. The system processes raw text data and provides accurate sentiment predictions for various applications.',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Logistic Regression', 'SVM', 'Naive Bayes'],
      features: [
        'Multi-class sentiment classification',
        'Advanced text preprocessing pipeline',
        'TF-IDF feature extraction',
        'Multiple algorithm comparison',
        'Social media text compatibility',
        'Real-time sentiment prediction'
      ],
      impact: 'Applicable to social media monitoring, customer feedback analysis, and opinion mining.',
      icon: MessageSquare,
      color: 'from-blue-500 to-indigo-500',
      status: 'Completed',
      duration: '3 months',
      complexity: 'Medium',
      githubUrl: 'https://github.com/tasnovahaque/Sentiment_analysiss'
    },
    {
      id: 'loan-approval',
      title: 'Loan Approval Prediction Using Ensemble Methods',
      category: 'ai-ml',
      shortDescription: 'Advanced ensemble learning models for loan approval prediction with explainability.',
      description: 'Developed a comprehensive predictive modeling project using ensemble methods to predict loan approval statuses. Applied advanced machine learning techniques including bagging, boosting, stacking, and voting classifiers on a synthetic dataset with 45,000 records. Integrated SHAP and LIME for model explainability.',
      technologies: ['Python', 'XGBoost', 'Random Forest', 'SHAP', 'LIME', 'Ensemble Methods', 'SMOTENC'],
      features: [
        'Multiple ensemble learning techniques',
        'Bagging: Random Forest, Bagging Classifier',
        'Boosting: Gradient Boosting, XGBoost',
        'Stacking and Voting Classifiers',
        'SHAP and LIME explainability',
        'Synthetic data generation with SMOTENC'
      ],
      impact: 'Enables financial institutions to make data-driven loan approval decisions with transparent reasoning.',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      status: 'Completed',
      duration: '5 months',
      complexity: 'High',
      githubUrl: 'https://github.com/Dilrubakter/AI-XAI-object-detection/tree/main/Assignment_1'
    },
    {
      id: 'co2-prediction',
      title: 'CO2 Emission Prediction',
      category: 'ai-ml',
      shortDescription: 'Machine learning models for vehicle CO2 emission prediction with feature interpretability.',
      description: 'Developed machine learning models to predict CO2 emissions from vehicle data. Achieved exceptional performance with Random Forest model (R² = 0.9964). Implemented SHAP and LIME for feature importance analysis and model interpretability, providing insights into key factors affecting vehicle emissions.',
      technologies: ['Python', 'Random Forest', 'SHAP', 'LIME', 'Scikit-learn', 'Environmental Data'],
      features: [
        'High-accuracy prediction (R² = 0.9964)',
        'Random Forest optimization',
        'SHAP feature importance analysis',
        'LIME local interpretability',
        'Environmental impact assessment',
        'Vehicle data preprocessing'
      ],
      impact: 'Contributes to environmental monitoring and vehicle emission control strategies.',
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      status: 'Completed',
      duration: '3 months',
      complexity: 'Medium',
      githubUrl: 'https://github.com/tasnovahaque/carbon_emission_prediction'
    },
    {
      id: 'acoustic-classification',
      title: 'Acoustic Environment Classification',
      category: 'ai-ml',
      shortDescription: 'Environmental sound classification using MFCC features and exploratory data analysis.',
      description: 'Conducted comprehensive exploratory data analysis on the TUT Acoustic Scenes 2016 dataset. Extracted MFCC (Mel-Frequency Cepstral Coefficients) features to explore patterns and trends in environmental sound classifications. Analyzed acoustic patterns across different environmental contexts.',
      technologies: ['Python', 'MFCC', 'Audio Processing', 'EDA', 'Pattern Recognition', 'TUT Dataset'],
      features: [
        'TUT Acoustic Scenes 2016 dataset analysis',
        'MFCC feature extraction',
        'Comprehensive exploratory data analysis',
        'Environmental sound pattern recognition',
        'Acoustic feature visualization',
        'Statistical trend analysis'
      ],
      impact: 'Advances understanding of acoustic environments for smart city and IoT applications.',
      icon: Music,
      color: 'from-purple-500 to-indigo-500',
      status: 'Completed',
      duration: '2 months',
      complexity: 'Medium',
      githubUrl: 'https://github.com/tasnovahaque/Acoustic-Environment-Classification'
    },
    {
      id: 'ewu-portal',
      title: 'EWU Portal',
      category: 'web',
      featured: true,
      shortDescription: 'Comprehensive university portal web application built with Laravel framework.',
      description: 'Developed a comprehensive web application for Eastern Washington University using the Laravel framework. Created an interactive and user-friendly platform supporting various university functionalities. Focused on scalability, robustness, and modern web development practices.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'User authentication and authorization',
        'Student information management',
        'Course registration system',
        'Grade management interface',
        'Administrative dashboard',
        'Responsive design implementation'
      ],
      impact: 'Streamlines university operations and improves student experience through digital transformation.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      status: 'Completed',
      duration: '4 months',
      complexity: 'High',
      githubUrl: 'https://github.com/tasnovahaque/Ewu_portal'
    },
    {
      id: 'healbee-app',
      title: 'Healbee: A Comprehensive Healthcare Service Application',
      category: 'mobile',
      featured: true,
      shortDescription: 'Android healthcare application providing integrated healthcare services and seamless healthcare management.',
      description: 'Developed Healbee, a comprehensive Android healthcare application using Java to address the problem of fragmented healthcare services. The app provides an integrated platform for seamless healthcare management, improving accessibility and efficiency of healthcare services. The application offers a unified solution to connect patients with healthcare providers, manage appointments, access medical records, and streamline healthcare processes.',
      technologies: ['Java', 'Android SDK', 'XML', 'SQLite', 'Android Studio', 'Material Design', 'Healthcare APIs'],
      features: [
        'Integrated healthcare service platform',
        'Patient-provider connectivity',
        'Appointment scheduling system',
        'Medical records management',
        'Healthcare service discovery',
        'User-friendly interface design',
        'Secure data handling',
        'Real-time healthcare updates',
        'Multi-service integration',
        'Accessibility optimization'
      ],
      impact: 'Significantly improves healthcare accessibility and efficiency by providing a unified platform for healthcare management, reducing service fragmentation.',
      icon: Smartphone,
      color: 'from-green-500 to-blue-500',
      status: 'Completed',
      duration: '5 months',
      complexity: 'High'
    },
    {
      id: 'dental-clinic',
      title: 'Dental Clinic Appointment Scheduling System',
      category: 'systems',
      shortDescription: 'Linux-based appointment scheduling system with advanced OS concepts implementation.',
      description: 'Developed a comprehensive appointment scheduling system for a dental clinic implemented on Linux. Applied advanced operating system concepts including process coordination, inter-process communication, and resource management. Implemented synchronization techniques to handle concurrent booking requests and avoid scheduling conflicts.',
      technologies: ['Linux', 'C/C++', 'Shell Scripting', 'System Calls', 'Process Management', 'IPC'],
      features: [
        'Concurrent booking request handling',
        'Priority-based urgent case scheduling',
        'Process synchronization mechanisms',
        'Inter-process communication',
        'Resource conflict prevention',
        'Linux system optimization'
      ],
      impact: 'Demonstrates practical application of OS principles in healthcare service optimization.',
      icon: Calendar,
      color: 'from-teal-500 to-green-500',
      status: 'Completed',
      duration: '3 months',
      complexity: 'High',
      githubUrl: 'https://github.com/tasnovahaque/Dental-Clinic-Problem'
    },
    {
      id: 'network-infrastructure',
      title: 'Multi-Campus Network Infrastructure Design',
      category: 'networking',
      shortDescription: 'University network architecture design using OSPF routing protocol with centralized DHCP and DNS.',
      description: 'Designed and implemented a comprehensive network architecture for university campuses using advanced networking protocols. The project involved configuring OSPF routing protocol for efficient inter-campus communication and implementing centralized DHCP and DNS servers for dynamic IP management across multiple campus locations.',
      technologies: ['Cisco Packet Tracer', 'OSPF Protocol', 'DHCP Server', 'DNS Server', 'Network Architecture', 'Campus Networking'],
      features: [
        'Multi-campus network topology design',
        'OSPF routing protocol implementation',
        'Centralized DHCP server configuration',
        'DNS server setup and management',
        'Dynamic IP address management',
        'Inter-campus connectivity optimization',
        'Network security implementation',
        'Scalable infrastructure design'
      ],
      impact: 'Provides efficient and scalable network infrastructure for educational institutions with multiple campus locations.',
      icon: Network,
      color: 'from-cyan-500 to-blue-500',
      status: 'Completed',
      duration: '3 months',
      complexity: 'High',
      githubUrl: 'https://github.com/tasnovahaque/CSE405_project'
    },
    {
      id: 'parity-code-converter',
      title: '4-bit Odd Parity Code Converter',
      category: 'hardware',
      shortDescription: 'Digital logic circuit design for 4-bit to 5-bit odd parity code conversion.',
      description: 'Designed and implemented a 4-bit code converter that generates odd parity for error detection in digital communication systems. The circuit converts a 4-bit input to a 5-bit output by adding a parity bit that ensures an odd number of 1s in the output. This project demonstrates practical application of digital logic design principles for data integrity in transmission systems.',
      technologies: ['Digital Logic Design', 'Boolean Algebra', 'Logic Gates', 'Circuit Design', 'Parity Generation', 'Error Detection'],
      features: [
        '4-bit to 5-bit code conversion',
        'Odd parity bit generation',
        'Error detection capability',
        'Boolean logic implementation',
        'Truth table optimization',
        'Hardware circuit design',
        'Data integrity assurance',
        'Transmission error identification'
      ],
      impact: 'Essential for reliable digital data transmission and error detection in communication systems.',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      status: 'Completed',
      duration: '2 months',
      complexity: 'Medium'
    },
    {
      id: 'voltage-divider',
      title: 'Multi-Output Voltage Divider Circuit',
      category: 'hardware',
      shortDescription: 'Voltage divider circuit design providing 10V, 5V, and 3V outputs from a single 10V DC supply.',
      description: 'Designed and built a practical voltage divider circuit that converts a single 10V DC supply into multiple voltage levels (10V, 5V, and 3V) for low current electrical applications. The project involved calculating appropriate resistor values, implementing switching mechanisms for voltage selection, and validating the design through practical measurements using multimeters and voltmeters.',
      technologies: ['Analog Electronics', 'Circuit Design', 'Voltage Division', 'Resistor Networks', 'DC Analysis', 'Multimeter Testing'],
      features: [
        'Multi-voltage output generation',
        'Voltage division rule implementation',
        'Switch-based voltage selection',
        '10V, 5V, and 3V output levels',
        'Low current circuit compatibility',
        'Practical circuit validation',
        'Resistor network optimization',
        'Measurement and testing procedures'
      ],
      impact: 'Provides cost-effective solution for multiple voltage requirements in electronic circuits and prototyping.',
      icon: Zap,
      color: 'from-yellow-500 to-red-500',
      status: 'Completed',
      duration: '1 month',
      complexity: 'Low'
    }
  ];

  const stats = [
    { label: 'Total Projects', value: '13', icon: Code, color: 'from-purple-500 to-blue-500' },
    { label: 'AI/ML Projects', value: '6', icon: Brain, color: 'from-emerald-500 to-teal-500' },
    { label: 'Technologies Used', value: '40+', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { label: 'Featured Projects', value: '3', icon: Star, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;
    return (
      <div 
        className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer ${
          project.featured ? 'ring-2 ring-purple-500/50' : ''
        }`}
        onClick={() => setSelectedProject(project)}
      >
        {project.featured && (
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">Featured Project</span>
          </div>
        )}
        
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{project.shortDescription}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              {project.complexity}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.duration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Github className="w-4 h-4 text-gray-400" />
            )}
            <ChevronRight className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    
    const IconComponent = project.icon;
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
        <div className="bg-slate-900 border border-white/20 rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Header - Mobile Optimized */}
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4 flex-1">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 sm:px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                    <span>{project.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{project.complexity} Complexity</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2 touch-manipulation"
              >
                <span className="text-xl sm:text-2xl">✕</span>
              </button>
            </div>

            {/* Description */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Key Features</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0 mt-2"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                Project Impact
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.impact}</p>
            </div>

            {/* GitHub Repository Link */}
            {project.githubUrl && (
              <div className="flex justify-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center gap-3 text-sm sm:text-base border border-gray-600 hover:border-gray-500"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 left-4 w-32 h-32 sm:w-40 sm:h-40 md:top-20 md:left-20 md:w-64 md:h-64 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 right-4 w-40 h-40 sm:w-48 sm:h-48 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 py-6 sm:py-8 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Button - Enhanced Mobile */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium text-sm sm:text-base">Back</span>
          </button>
          
          {/* Header - Enhanced Mobile */}
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2">
              My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
              A comprehensive showcase of my academic and personal projects spanning AI/ML, web development, and systems programming.
            </p>
          </div>

          {/* Statistics - Enhanced Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Filters and Search - Enhanced Mobile */}
          <div className="flex flex-col gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm touch-manipulation ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">{category.label}</span>
                  <span className="xs:hidden">{category.label.split(' ')[0]}</span>
                  <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Projects Grid - Enhanced Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers and researchers. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/tasnovahaque"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;