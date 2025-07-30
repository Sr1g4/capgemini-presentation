import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import MetricCard from "../components/MetricCard";
import MetricGrid from "../components/MetricGrid";
import ImageCard from "../components/ImageCard";
import DiagramCard from "../components/DiagramCard";
import IconGrid from "../components/IconGrid";

// Import actual images - using proper imports
import awsDiagram from "../assets/images/AWSDiagramCap.png";
import aws2Cap from "../assets/images/AWS2Cap.png";
import aws3Cap from "../assets/images/AWS3Cap.png";
import gcpDiagram from "../assets/images/GCPDiagramCap.jpg";
import diagramForCap from "../assets/images/DiagramForCap.jpg";
import aiBlueprint from "../assets/images/Ai Contact Center Blueprint.pdf";

// Import company logos
import capgeminiLogo from "../assets/images/capgemini-logo.svg";
import morganStanleyLogo from "../assets/images/morgan-stanley-logo.svg";
import healthcareLogo from "../assets/images/healthcare-provider-logo.svg";
import insuranceLogo from "../assets/images/global-insurance-logo.svg";

const slides = [
  // Slide 1: Title Slide - Capgemini Enterprise AI
  {
    content: (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="text-center text-white p-8 relative z-10">
          {/* Capgemini Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={capgeminiLogo} alt="Capgemini" className="mx-auto h-16" />
          </motion.div>
          
        <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            Get the Future You Want
        </motion.h1>
          
        <motion.p 
            className="text-2xl mb-8 text-orange-200 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
        >
            Capgemini's Enterprise Contact Center AI Solution
        </motion.p>

        <motion.p 
            className="text-lg mb-12 text-orange-100 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            Transforming Global Enterprises with AI-Powered Innovation
        </motion.p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-orange-500/20 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation & Technology</h3>
              <p className="text-orange-100">Capgemini's cutting-edge AI solutions driving digital transformation across industries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-orange-500/20 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Expertise</h3>
              <p className="text-orange-100">50+ countries, 340,000+ team members, serving Fortune 500 enterprises worldwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-orange-500/20 transition-colors">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Invent the Future</h3>
              <p className="text-orange-100">Capgemini's promise: Technology, innovation, and expertise to shape tomorrow's enterprises</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-200 text-sm">#1 in AI & Data Services</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-200 text-sm">Leader in Banking & Capital Markets</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-orange-200 text-sm">Global Technology Partner</span>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 2: Executive Summary
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-xl text-gray-600">Transforming Enterprise Contact Centers with AI</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-4">The Enterprise Challenge</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">$</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">$2.3M Monthly Operational Cost</h4>
                    <p className="text-gray-600 text-sm">Contact centers represent 15-25% of total operational expense</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance Complexity</h4>
                    <p className="text-gray-600 text-sm">SOC2 Type II, GDPR Article 32, HIPAA 164.312, FINRA Rule 4511, SOX Section 404 requirements increasing audit complexity by 40% annually</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Expectations</h4>
                    <p className="text-gray-600 text-sm">Sub-30-second response times with 24/7 availability across 15+ languages and 50+ countries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 text-sm font-bold">👥</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Agent Challenges</h4>
                    <p className="text-gray-600 text-sm">35% annual turnover rate with 6-8 weeks training per agent, costing $15,000-25,000 per replacement</p>
                  </div>
                </div>
              </div>
          </motion.div>

            {/* Right Column - Solutions */}
          <motion.div
              initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Capgemini's Solution</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Voice & Chat</h4>
                    <p className="text-gray-600 text-sm">BERT-based language models with custom training on 2M+ enterprise conversations, supporting 15 languages with real-time sentiment analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">☁️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Cloud Architecture</h4>
                    <p className="text-gray-600 text-sm">AWS Connect + Lex + Bedrock, GCP Dialogflow + Vertex AI, Azure Bot Framework + OpenAI with 99.99% uptime SLA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Compliance & Audit</h4>
                    <p className="text-gray-600 text-sm">End-to-end encryption (AES-256), zero-trust architecture, SOC2 Type II certified, with real-time compliance monitoring</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Resolution Times</h4>
                    <p className="text-gray-600 text-sm">ML-powered call routing with 87% accuracy, reducing average handle time from 4m 32s to 2m 34s</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Performance Metrics</h3>
            <MetricGrid
              metrics={[
                { value: "2m 34s", label: "Average Handle Time", icon: "⏱️", variant: "success" },
                { value: "$1.2M", label: "Annual Cost Savings", icon: "💰", variant: "success" },
                { value: "99.99%", label: "Uptime SLA", icon: "🔒", variant: "primary" },
                { value: "4.8/5.0", label: "Customer Satisfaction", icon: "😃", variant: "success" },
                { value: "78.3%", label: "AI Resolution Rate", icon: "🤖", variant: "primary" },
                { value: "47/50", label: "Agent Utilization", icon: "👥", variant: "info" }
              ]}
              columns={3}
              className="mt-6"
            />
          </motion.div>

          {/* Capgemini Leadership Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-bold mb-4">Capgemini Banking & Capital Markets Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">🏆 #1 in the world six consecutive times - Capgemini Research Institute</p>
                <p className="font-semibold">🏆 Leader in Core Banking - NelsonHall NEAT Assessment</p>
                <p className="font-semibold">🏆 Global Sales Partner of the Year - Temenos</p>
        </div>
              <div>
                <p className="font-semibold">🏆 Leader in Open Banking IT Services - Everest Group 2024</p>
                <p className="font-semibold">🏆 Leader in Capital Markets IT Services - Everest Group 2024</p>
                <p className="font-semibold">🏆 Horizon 3 Market Leader - HFS AWM Report 2024</p>
      </div>
            </div>
          </motion.div>

          {/* Real Backlinks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            <p>Learn more about our <a href="https://www.capgemini.com/industries/banking-and-capital-markets/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 underline">Banking & Capital Markets expertise</a> | 
            <a href="https://www.capgemini.com/services/data-and-artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 underline ml-2">AI & Data Services</a> | 
            <a href="https://www.capgemini.com/services/cloud-services/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 underline ml-2">Cloud Services</a></p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 text-xs text-gray-500 text-center"
          >
            <p>* Performance metrics based on industry research and typical enterprise implementations. Results may vary based on specific implementation and organizational factors.</p>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 3: What the Client Wants
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Requirements</h2>
            <p className="text-xl text-gray-600">Understanding Your Contact Center Transformation Needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Requirements</h3>
              <div className="space-y-4">
            <FeatureCard
                  title="✓ Real-time Analytics"
                  description="Live dashboards and predictive insights for immediate decision making"
                  variant="success"
            />
            <FeatureCard
                  title="✓ AI-Powered Automation"
                  description="Intelligent workflows that reduce manual tasks and improve efficiency"
                  variant="success"
                />
            <FeatureCard
                  title="✓ Multi-Channel Support"
                  description="Seamless integration across voice, chat, email, and social media"
                  variant="success"
            />
            <FeatureCard
                  title="✓ Enterprise Security"
                  description="Full audit trail with explainability and compliance frameworks"
                  variant="success"
            />
          </div>
        </div>
            
            <div>
              <ImageCard
                src={awsDiagram}
                alt="AWS Contact Center Architecture"
                caption="AWS-based Contact Center Architecture"
                className="h-full"
                interactive={true}
                showFullImage={true}
          />
      </div>
        </div>
      </div>
      </div>
    )
  },

  // Slide 4: Use Case Story - Technical Deep Dive
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Contact Center Transformation</h2>
            <p className="text-xl text-gray-600">Technical Deep Dive: CEO Address Change Use Case</p>
          </motion.div>

          {/* Technical Architecture Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Architecture & Implementation</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
                             {/* AWS Stack */}
               <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">🟧 AWS Implementation Stack</h4>
                 <div className="space-y-3 text-sm">
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>Amazon Connect:</strong> Cloud contact center with intelligent routing</span>
              </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>Amazon Lex:</strong> Natural language understanding and processing</span>
        </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>Amazon Bedrock:</strong> Foundation models for AI applications</span>
        </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>OpenSearch:</strong> Search and analytics engine</span>
      </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>Lambda:</strong> Serverless compute for event-driven applications</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                     <span><strong>DynamoDB:</strong> NoSQL database for high-performance applications</span>
                   </div>
                 </div>
               </div>

                             {/* Technical Process Flow */}
               <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">🔄 Technical Process Flow</h4>
                 <div className="space-y-3 text-sm">
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>1. Voice Authentication:</strong> Multi-factor verification and identity validation</span>
        </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>2. Intent Recognition:</strong> Natural language processing and understanding</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>3. Knowledge Retrieval:</strong> Information search and context gathering</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>4. Backend Integration:</strong> API-based system connectivity</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>5. Compliance Validation:</strong> Regulatory requirement verification</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                     <span><strong>6. Audit Logging:</strong> Comprehensive activity tracking and recording</span>
                   </div>
                 </div>
               </div>

                             {/* Performance Metrics */}
               <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">📊 Performance Metrics</h4>
                 <div className="space-y-3 text-sm">
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Response Time:</strong> Improved processing efficiency</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Accuracy Rate:</strong> Enhanced intent recognition capabilities</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Uptime SLA:</strong> Enterprise-grade availability</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Cost Reduction:</strong> Operational efficiency improvements</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Scalability:</strong> High-performance concurrent processing</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     <span><strong>Compliance:</strong> Comprehensive audit trail capabilities</span>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Detailed Technical Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Implementation Details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Before vs After Technical Comparison */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Architecture Evolution</h4>
                <div className="space-y-4">
                                     <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                     <h5 className="font-semibold text-red-800 mb-2">Legacy System (Before)</h5>
                     <ul className="text-red-700 space-y-1 text-sm">
                       <li>• <strong>Manual Routing:</strong> Human agents with extended wait times</li>
                       <li>• <strong>Basic IVR:</strong> Limited menu options and functionality</li>
                       <li>• <strong>On-Premise:</strong> Single point of failure, limited scalability</li>
                       <li>• <strong>Limited Analytics:</strong> Basic reporting capabilities</li>
                       <li>• <strong>Manual Compliance:</strong> Traditional audit trail methods</li>
                       <li>• <strong>High Operational Costs:</strong> Significant per-call expenses</li>
                     </ul>
                   </div>
                   <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                     <h5 className="font-semibold text-green-800 mb-2">AI-Powered System (After)</h5>
                     <ul className="text-green-700 space-y-1 text-sm">
                       <li>• <strong>Intelligent Routing:</strong> Machine learning-based routing</li>
                       <li>• <strong>Advanced NLP:</strong> Natural language processing capabilities</li>
                       <li>• <strong>Multi-Cloud:</strong> High availability with auto-scaling</li>
                       <li>• <strong>Real-Time Analytics:</strong> Advanced insights and dashboards</li>
                       <li>• <strong>Automated Compliance:</strong> Digital audit trail capabilities</li>
                       <li>• <strong>Cost Optimization:</strong> Improved operational efficiency</li>
                     </ul>
                   </div>
                </div>
              </div>

              {/* Technical Diagram */}
              <div>
                <DiagramCard
                  title="AI-Powered Contact Center Architecture"
                  description="Complete technical workflow from voice input to backend integration"
                  diagramType="contact-center-flow"
                  interactive={true}
                  className="h-full"
          />
        </div>
      </div>
          </motion.div>

          {/* Security & Compliance Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Security & Compliance Framework</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
                             <div className="bg-white rounded-xl p-6 shadow-lg">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">🔐 Security Implementation</h4>
                 <div className="space-y-3 text-sm">
                   <div><strong>Encryption:</strong> Industry-standard encryption protocols</div>
                   <div><strong>Authentication:</strong> Multi-factor authentication systems</div>
                   <div><strong>Authorization:</strong> Role-based access control (RBAC)</div>
                   <div><strong>Network:</strong> Secure network architecture and segmentation</div>
                   <div><strong>Data Protection:</strong> Data masking and privacy controls</div>
                   <div><strong>Threat Detection:</strong> Advanced security monitoring</div>
                 </div>
               </div>

                             <div className="bg-white rounded-xl p-6 shadow-lg">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">📋 Compliance Framework</h4>
                 <div className="space-y-3 text-sm">
                   <div><strong>SOC2 Type II:</strong> Annual security and availability audits</div>
                   <div><strong>GDPR:</strong> European data protection compliance</div>
                   <div><strong>HIPAA:</strong> Healthcare data privacy standards</div>
                   <div><strong>FINRA:</strong> Financial industry record retention</div>
                   <div><strong>SOX:</strong> Financial reporting and controls</div>
                   <div><strong>PCI-DSS:</strong> Payment card industry standards</div>
                 </div>
               </div>

                             <div className="bg-white rounded-xl p-6 shadow-lg">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">🔍 Audit & Monitoring</h4>
                 <div className="space-y-3 text-sm">
                   <div><strong>Real-Time Logging:</strong> Comprehensive audit trail capabilities</div>
                   <div><strong>Performance Monitoring:</strong> Application performance monitoring</div>
                   <div><strong>Compliance Dashboards:</strong> Real-time compliance tracking</div>
                   <div><strong>Alert System:</strong> Automated monitoring and response</div>
                   <div><strong>Data Retention:</strong> Automated data retention policies</div>
                   <div><strong>Forensic Analysis:</strong> Advanced investigation capabilities</div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* ROI & Business Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Business Impact & ROI Analysis</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="text-center">
                 <div className="text-3xl font-bold mb-2">Significant</div>
                 <div className="text-sm">Cost Reduction</div>
                 <div className="text-xs opacity-75">Operational efficiency gains</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold mb-2">Enhanced</div>
                 <div className="text-sm">Accuracy Rate</div>
                 <div className="text-xs opacity-75">Improved intent recognition</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold mb-2">Improved</div>
                 <div className="text-sm">Response Time</div>
                 <div className="text-xs opacity-75">Faster processing capabilities</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold mb-2">Substantial</div>
                 <div className="text-sm">Annual Savings</div>
                 <div className="text-xs opacity-75">For enterprise deployments</div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 5: Solution Overview
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solution Overview</h2>
            <p className="text-xl text-gray-600">Comprehensive AI & Analytics Platform</p>
          </motion.div>

          <IconGrid
            icons={[
              { icon: "🤖", name: "AI/ML", description: "Natural Language Processing & Machine Learning" },
              { icon: "📊", name: "Analytics", description: "Real-time dashboards & predictive insights" },
              { icon: "🔒", name: "Security", description: "Enterprise-grade security & compliance" },
              { icon: "☁️", name: "Cloud", description: "Multi-cloud architecture & scalability" },
              { icon: "🔄", name: "Automation", description: "Intelligent workflow automation" },
              { icon: "📱", name: "Multi-Channel", description: "Omnichannel customer experience" },
              { icon: "📈", name: "Performance", description: "High availability & performance optimization" },
              { icon: "🔍", name: "Monitoring", description: "Comprehensive monitoring & alerting" }
            ]}
            columns={4}
            className="mt-8"
          />
        </div>
      </div>
    )
  },

  // Slide 6: Architecture Options
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Architecture Options</h2>
            <p className="text-xl text-gray-600">Multi-Cloud & Hybrid Solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cloud Platforms</h3>
              <div className="space-y-4">
          <FeatureCard
                  title="AWS Architecture"
                  description="Amazon Connect with Lambda, DynamoDB, and AI services"
                  variant="primary"
          />
          <FeatureCard
                  title="GCP Architecture"
                  description="Google Cloud Contact Center AI with BigQuery analytics"
                  variant="success"
          />
          <FeatureCard
                  title="Azure Architecture"
                  description="Microsoft Azure with Cognitive Services and Power BI"
                  variant="warning"
          />
        </div>
      </div>
            
            <div>
              <ImageCard
                src={aws2Cap}
                alt="AWS Contact Center Architecture"
                caption="AWS Contact Center Implementation"
                className="h-full"
                interactive={true}
                showFullImage={true}
              />
            </div>
      </div>
        </div>
      </div>
    )
  },

  // Slide 7: Build Strategy
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Strategy: Enterprise-Grade Technical Implementation</h2>
            <p className="text-xl text-gray-600">Tiered, Modular, and Secure by Design</p>
          </motion.div>

          {/* Technical Build Strategy Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full text-sm text-left border border-gray-200 rounded-xl bg-white shadow-lg">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="px-4 py-3 font-bold">Tier</th>
                  <th className="px-4 py-3 font-bold">Scope</th>
                  <th className="px-4 py-3 font-bold">Stack</th>
                  <th className="px-4 py-3 font-bold">Time</th>
                  <th className="px-4 py-3 font-bold">Cost</th>
                  <th className="px-4 py-3 font-bold">Who It's For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="px-4 py-3 font-semibold">Basic</td>
                  <td className="px-4 py-3">FAQ & call deflection</td>
                  <td className="px-4 py-3">AWS Lex / GCP Dialogflow + RAG</td>
                  <td className="px-4 py-3">2–4 weeks</td>
                  <td className="px-4 py-3">Low</td>
                  <td className="px-4 py-3">Startups, Pilots</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="px-4 py-3 font-semibold">Intermediate</td>
                  <td className="px-4 py-3">Full voice/chat + agent assist</td>
                  <td className="px-4 py-3">LLM + OpenSearch + CRM</td>
                  <td className="px-4 py-3">6–8 weeks</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Mid-market</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-3 font-semibold">Advanced</td>
                  <td className="px-4 py-3">Omni-channel + deep analytics</td>
                  <td className="px-4 py-3">AI + RAG + WFM + Compliance Cloud</td>
                  <td className="px-4 py-3">8–12 weeks</td>
                  <td className="px-4 py-3">High</td>
                  <td className="px-4 py-3">Regulated & Global Orgs</td>
                </tr>
              </tbody>
            </table>
              </div>

          {/* Technical Stack Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">AWS Enterprise Stack</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li><b>Amazon Connect:</b> Contact routing & management</li>
                <li><b>Amazon Lex:</b> NLP & conversation management</li>
                <li><b>Amazon Bedrock:</b> LLM integration & fine-tuning</li>
                <li><b>OpenSearch:</b> Vector search & RAG implementation</li>
                <li><b>Lambda Functions:</b> Serverless workflow orchestration</li>
                <li><b>Compliance:</b> SOC2, GDPR, HIPAA, FINRA, SOX</li>
                <li><b>Performance:</b> ≤200ms response, 10,000+ concurrent calls, 99.99% uptime</li>
              </ul>
              </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-900 mb-4">GCP Enterprise Stack</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li><b>Dialogflow CX:</b> Advanced conversation AI</li>
                <li><b>Contact Center AI:</b> Enterprise contact center platform</li>
                <li><b>Vertex AI:</b> ML model hosting & training</li>
                <li><b>Matching Engine:</b> High-scale vector similarity search</li>
                <li><b>Cloud Functions:</b> Event-driven serverless compute</li>
                <li><b>Compliance:</b> SOC2, GDPR, HIPAA, FINRA, SOX</li>
                <li><b>Performance:</b> 15+ languages, dynamic auto-scaling, zero-trust security</li>
              </ul>
              </div>
        </div>

          {/* Implementation Phases */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Phases</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-semibold">Discovery & Planning</h4>
                <p className="text-sm text-gray-600">Current state assessment, requirements, architecture</p>
      </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-semibold">Core Development</h4>
                <p className="text-sm text-gray-600">Infrastructure, AI model training, integration, security</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-semibold">Testing & Validation</h4>
                <p className="text-sm text-gray-600">Performance, security, UAT, compliance verification</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                <h4 className="font-semibold">Deployment & Go-Live</h4>
                <p className="text-sm text-gray-600">Production deployment, training, go-live support</p>
              </div>
            </div>
          </div>

          {/* Enterprise Build Practices */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Enterprise Build Practices</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              <li>Agile methodology with 2-week sprints and measurable milestones</li>
              <li>Automated CI/CD pipelines (GitHub Actions, AWS CodePipeline, GCP Cloud Build)</li>
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>Comprehensive security: end-to-end encryption, zero-trust, regular audits</li>
              <li>Performance monitoring, auto-scaling, and real-time analytics</li>
              <li>Compliance guardrails: SOC2, GDPR, HIPAA, FINRA, SOX</li>
              <li>Modular, microservices-based architecture for scalability</li>
              <li>Full documentation, knowledge transfer, and enterprise support</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Core Features
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">Advanced AI & Analytics Capabilities</p>
          </motion.div>

          <IconGrid
            icons={[
              { icon: "🎯", name: "Intent Recognition", description: "Advanced NLU for customer intent detection" },
              { icon: "📞", name: "Voice Analytics", description: "Real-time speech analytics & sentiment analysis" },
              { icon: "🤖", name: "Chatbots", description: "Intelligent conversational AI agents" },
              { icon: "📊", name: "Predictive Analytics", description: "ML-powered forecasting & insights" },
              { icon: "🔄", name: "Workflow Automation", description: "Intelligent process automation" },
              { icon: "📱", name: "Omnichannel", description: "Seamless multi-channel experience" },
              { icon: "🔍", name: "Quality Monitoring", description: "Automated quality assurance" },
              { icon: "📈", name: "Performance Analytics", description: "Real-time KPI monitoring" }
            ]}
            columns={4}
            className="mt-8"
          />
        </div>
      </div>
    )
  },

  // Slide 9: Security & Compliance
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
            <p className="text-xl text-gray-600">Enterprise-Grade Security Framework</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Security Features</h3>
              <div className="space-y-4">
          <FeatureCard
                  title="🔒 Data Encryption"
                  description="End-to-end encryption for data at rest and in transit"
                  variant="danger"
          />
          <FeatureCard
                  title="🛡️ Access Control"
                  description="Role-based access control with multi-factor authentication"
                  variant="danger"
          />
          <FeatureCard
                  title="📋 Audit Trail"
                  description="Comprehensive logging and audit capabilities"
                  variant="danger"
          />
          <FeatureCard
                  title="🔐 Compliance"
                  description="SOC2, GDPR, HIPAA, FINRA, SOX compliance"
                  variant="danger"
          />
        </div>
      </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Compliance Framework</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• GDPR compliance for EU data protection</li>
                    <li>• HIPAA compliance for healthcare data</li>
                    <li>• FINRA compliance for financial services</li>
                    <li>• SOX compliance for corporate governance</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Privacy Controls</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Data anonymization and pseudonymization</li>
                    <li>• Right to be forgotten implementation</li>
                    <li>• Consent management system</li>
                    <li>• Data retention policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Platform Comparison
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We're Better</h2>
            <p className="text-xl text-gray-600">Competitive Advantages & Differentiators</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Differentiators</h3>
              <div className="space-y-4">
          <FeatureCard
                  title="🎯 Advanced AI"
                  description="State-of-the-art NLP and machine learning capabilities"
                  variant="primary"
          />
          <FeatureCard
                  title="⚡ Performance"
                  description="Sub-second response times with 99.9% uptime"
                  variant="success"
          />
          <FeatureCard
                  title="🔧 Customization"
                  description="Tailored solutions for specific industry requirements"
                  variant="warning"
          />
          <FeatureCard
                  title="💰 Cost-Effective"
                  description="40% lower total cost of ownership vs competitors"
                  variant="danger"
          />
        </div>
      </div>
            
                <div>
                <DiagramCard
                  title="Competitive Analysis"
                  description="Market positioning and feature comparison"
                  diagramType="comparison"
                  interactive={true}
                  className="h-full"
                />
              </div>
        </div>
      </div>
      </div>
    )
  },

  // Slide 11: Real Case Studies
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Case Studies</h2>
            <p className="text-xl text-gray-600">Proven Results Across Financial Services</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Financial Services Example */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <img src={morganStanleyLogo} alt="Financial Services" className="w-12 h-8 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Financial Services Example</h3>
                  <p className="text-sm text-gray-600">Investment Banking & Trading</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">2,500+ daily calls with strict FINRA compliance requirements, high-value trading desk support, and real-time market data integration needs</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">AWS Connect + Lex + Bedrock with custom compliance guardrails, real-time market data integration, and advanced fraud detection</p>
          </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 78.3% AI resolution rate</li>
                    <li>• 2m 34s average handle time (down from 4m 56s)</li>
                    <li>• 100% compliance maintained</li>
                    <li>• $1.2M annual savings</li>
                  </ul>
        </div>
              </div>
            </motion.div>

            {/* Healthcare Provider Example */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center mb-4">
                <img src={healthcareLogo} alt="Healthcare Provider" className="w-12 h-8 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Healthcare Provider Example</h3>
                  <p className="text-sm text-gray-600">Multi-State Hospital System</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">15 hospitals, 3,500+ daily calls requiring HIPAA 164.312 compliance, patient information updates, and appointment scheduling</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">Azure Bot Framework + OpenAI with end-to-end encryption, HIPAA-compliant data handling, and secure patient portal integration</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 82.1% AI resolution rate</li>
                    <li>• 1m 48s average handle time</li>
                    <li>• Zero HIPAA violations</li>
                    <li>• 67% reduction in patient wait times</li>
                  </ul>
          </div>
        </div>
            </motion.div>

            {/* Global Insurance Example */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-center mb-4">
                <img src={insuranceLogo} alt="Global Insurance" className="w-12 h-8 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Global Insurance Example</h3>
                  <p className="text-sm text-gray-600">Multi-Country Operations</p>
      </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">25 countries, 12 languages, 8,000+ daily interactions, complex claims processing, and regulatory compliance across jurisdictions</p>
        </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">Multi-cloud deployment (AWS + GCP + Azure) with localized AI models, regional compliance modules, and real-time translation</p>
      </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Results</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 75.6% AI resolution rate</li>
                    <li>• 2m 12s average handle time</li>
                    <li>• 24/7 global coverage</li>
                    <li>• 45% cost reduction across regions</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capgemini Banking Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Capgemini Banking & Capital Markets Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Core Banking Transformation</h4>
                <ul className="text-sm space-y-2">
                  <li>• Legacy system modernization</li>
                  <li>• Digital banking platforms</li>
                  <li>• Open banking APIs</li>
                  <li>• Real-time payment systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">Capital Markets Innovation</h4>
                <ul className="text-sm space-y-2">
                  <li>• Trading platform optimization</li>
                  <li>• Risk management systems</li>
                  <li>• Regulatory compliance automation</li>
                  <li>• Market data integration</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Real Backlinks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            <p>Learn more about our <a href="https://www.capgemini.com/industries/banking-and-capital-markets/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Banking & Capital Markets solutions</a> | 
            <a href="https://www.capgemini.com/services/data-and-artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">AI & Analytics services</a></p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 text-xs text-gray-500 text-center"
          >
            <p>* Case studies represent industry examples and typical implementation results. Actual results may vary based on specific requirements and implementation approach.</p>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 12: Why Capgemini
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Capgemini</h2>
            <p className="text-xl text-gray-600">Global Banking & Capital Markets Leadership</p>
          </motion.div>

          {/* Leadership Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Capgemini Banking Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-lg mb-2">Manish Chopra</h4>
                <p className="text-blue-100">Global Head, Risk and Financial Crime Compliance</p>
                <p className="text-xs mt-1">EVP and Global Head for Risk and Financial Crime Compliance for Financial Services Business</p>
        </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Sudhir Pai</h4>
                <p className="text-blue-100">CTIO, Financial Services</p>
                <p className="text-xs mt-1">EVP and Chief Technology & Innovation Officer for Global Financial Services Business</p>
      </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Ian Campos</h4>
                <p className="text-blue-100">Global Head of Financial Services Applications</p>
                <p className="text-xs mt-1">Global Head of Financial Services Applications Business Line</p>
              </div>
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Leader in Core Banking</p>
                    <p className="text-sm text-gray-600">NelsonHall NEAT Assessment for AI & Analytics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Global Sales Partner of the Year</p>
                    <p className="text-sm text-gray-600">Temenos for driving client success worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Leader in Open Banking IT Services</p>
                    <p className="text-sm text-gray-600">Everest Group 2024 Assessment</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Leader in Capital Markets IT Services</p>
                    <p className="text-sm text-gray-600">Everest Group 2024 Assessment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">Horizon 3 Market Leader</p>
                    <p className="text-sm text-gray-600">HFS AWM Report 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="font-semibold">2024 Partner of the Year</p>
                    <p className="text-sm text-gray-600">Pega for digital transformation excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Partners</h3>
            <p className="text-gray-600 mb-4">We collaborate with leading technology companies to drive business transformation in banking</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">AWS</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">Google Cloud</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">Microsoft</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">Salesforce</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">SAP</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">☁️</div>
                <p className="text-sm font-semibold">ServiceNow</p>
              </div>
            </div>
          </motion.div>

          {/* Global Scale */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Global Scale & Expertise</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Countries</span>
                  <span className="font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Professionals</span>
                  <span className="font-semibold">300,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Banking Clients</span>
                  <span className="font-semibold">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years Experience</span>
                  <span className="font-semibold">20+</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔧 Technical Excellence</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">AWS, GCP, Azure certified teams</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Proprietary AI frameworks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Enterprise integration expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">24/7 global support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real Backlinks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            <p>Connect with our experts on <a href="https://www.linkedin.com/company/capgemini/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">LinkedIn</a> | 
            Learn more about our <a href="https://www.capgemini.com/industries/banking-and-capital-markets/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-2">Banking expertise</a></p>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 13: Roadmap & Governance
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Roadmap & Governance</h2>
            <p className="text-xl text-gray-600">Structured Implementation & Management</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Roadmap</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900">Phase 1: Foundation (Months 1-3)</h4>
                  <p className="text-sm text-gray-600">Core infrastructure and basic AI features</p>
        </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900">Phase 2: Enhancement (Months 4-6)</h4>
                  <p className="text-sm text-gray-600">Advanced analytics and automation</p>
      </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900">Phase 3: Optimization (Months 7-9)</h4>
                  <p className="text-sm text-gray-600">Full AI platform with predictive capabilities</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Governance Framework</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Management</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Agile methodology with 2-week sprints</li>
                    <li>• Weekly stakeholder meetings</li>
                    <li>• Monthly progress reviews</li>
                    <li>• Risk management and mitigation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Comprehensive testing strategy</li>
                    <li>• Performance monitoring</li>
                    <li>• Security audits</li>
                    <li>• User acceptance testing</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Change Management</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Training and enablement programs</li>
                    <li>• Change communication strategy</li>
                    <li>• User adoption monitoring</li>
                    <li>• Continuous improvement process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14: Final Ask - Billion Dollar Opportunity
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-orange-700 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <img src={capgeminiLogo} alt="Capgemini" className="mx-auto h-20" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Contact Center?</h2>
            <p className="text-2xl text-orange-200">Join the Enterprise AI Revolution</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pilot Program */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">🎯 Pilot Program</h3>
              <div className="space-y-4 text-lg text-orange-100">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-white">4-Week Proof of Concept</h4>
                    <p>Risk-free evaluation with measurable results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-white">Highest-Impact Use Case</h4>
                    <p>Focused on your biggest pain point</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-white">Measurable Success Metrics</h4>
                    <p>ROI calculation and performance tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">🔧</div>
                  <div>
                    <h4 className="font-semibold text-white">Full Technical Support</h4>
                    <p>Dedicated team throughout implementation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">📞 Next Steps</h3>
              <div className="space-y-4 text-lg text-orange-100">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">1️⃣</div>
                  <div>
                    <h4 className="font-semibold text-white">Technical Discovery Call</h4>
                    <p>1-hour deep dive into your requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">2️⃣</div>
                  <div>
                    <h4 className="font-semibold text-white">Pilot Scope Definition</h4>
                    <p>2-hour session to define success criteria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">3️⃣</div>
                  <div>
                    <h4 className="font-semibold text-white">Pilot Kickoff</h4>
                    <p>Implementation begins within 2 weeks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">4️⃣</div>
                  <div>
                    <h4 className="font-semibold text-white">Full Implementation</h4>
                    <p>Scale to enterprise-wide deployment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Our Enterprise Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">Global Contact Center</h4>
                <p className="text-orange-200 mb-2">Capgemini Contact Center</p>
                <a 
                  href="mailto:contact.center@capgemini.com?subject=Enterprise Contact Center AI Inquiry"
                  className="text-orange-200 mb-2 hover:text-white transition-colors"
                >
                  contact.center@capgemini.com
                </a>
                <a 
                  href="tel:+18002274364"
                  className="text-orange-200 hover:text-white transition-colors"
                >
                  +1 (800) 227-4364
                </a>
                <a 
                  href="https://www.capgemini.com/contact-us/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-white font-medium block mt-3"
                >
                  Contact Us →
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">AI & Data Services</h4>
                <p className="text-orange-200 mb-2">Capgemini AI Solutions</p>
                <a 
                  href="mailto:ai.solutions@capgemini.com?subject=AI Solutions Inquiry"
                  className="text-orange-200 mb-2 hover:text-white transition-colors"
                >
                  ai.solutions@capgemini.com
                </a>
                <a 
                  href="tel:+18002274364"
                  className="text-orange-200 hover:text-white transition-colors"
                >
                  +1 (800) 227-4364
                </a>
                <a 
                  href="https://www.capgemini.com/services/data-and-artificial-intelligence/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-white font-medium block mt-3"
                >
                  AI Services →
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-3">Banking & Capital Markets</h4>
                <p className="text-orange-200 mb-2">Financial Services Team</p>
                <a 
                  href="mailto:banking@capgemini.com?subject=Banking Solutions Inquiry"
                  className="text-orange-200 mb-2 hover:text-white transition-colors"
                >
                  banking@capgemini.com
                </a>
                <a 
                  href="tel:+18002274364"
                  className="text-orange-200 hover:text-white transition-colors"
                >
                  +1 (800) 227-4364
                </a>
                <a 
                  href="https://www.capgemini.com/industries/banking-and-capital-markets/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-300 hover:text-white font-medium block mt-3"
                >
                  Banking Solutions →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Resources</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.capgemini.com/services/data-and-artificial-intelligence/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-white font-medium"
              >
                AI & Data Services →
              </a>
              <a 
                href="https://www.capgemini.com/case-studies/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-white font-medium"
              >
                Case Studies →
              </a>
              <a 
                href="https://www.capgemini.com/insights/research/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-white font-medium"
              >
                Research & Insights →
              </a>
              <a 
                href="https://www.capgemini.com/about-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-300 hover:text-white font-medium"
              >
                About Capgemini →
              </a>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 inline-block">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-xl text-white mb-6">Contact Capgemini to explore AI solutions for your enterprise</p>
              <div className="space-x-4">
                <a 
                  href="mailto:contact.center@capgemini.com?subject=Enterprise Contact Center AI - Interest" 
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
            Schedule Discovery Call
                </a>
                <a 
                  href="https://www.capgemini.com/contact-us/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-block"
                >
                  Contact Us
                </a>
        </div>
        </div>
          </motion.div>
      </div>
      </div>
    )
  },

  // Slide 15: Real-Time Analytics Dashboard
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Real-Time Analytics Dashboard</h2>
            <p className="text-2xl text-blue-200">Live Enterprise Performance Metrics</p>
          </motion.div>

          {/* Live Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Active Calls */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Active Calls</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>
              <div className="text-4xl font-bold text-green-400 mb-2">1,247</div>
              <div className="text-sm text-blue-200">+12% from yesterday</div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">AI Handled:</span>
                  <span className="text-green-400">892 (71.5%)</span>
      </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Human Agents:</span>
                  <span className="text-yellow-400">355 (28.5%)</span>
                </div>
              </div>
            </motion.div>

            {/* Average Handle Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Avg Handle Time</h3>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2m 34s</div>
              <div className="text-sm text-green-400">↓ 18% improvement</div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">AI Calls:</span>
                  <span className="text-blue-400">1m 12s</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Human Calls:</span>
                  <span className="text-blue-400">4m 56s</span>
                </div>
              </div>
            </motion.div>

            {/* Customer Satisfaction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">CSAT Score</h3>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">4.8/5.0</div>
              <div className="text-sm text-green-400">↑ 0.3 from last week</div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">AI Interactions:</span>
                  <span className="text-purple-400">4.9/5.0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Human Interactions:</span>
                  <span className="text-purple-400">4.7/5.0</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Call Volume Trends */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Call Volume Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Peak Hour (2-3 PM):</span>
                  <span className="text-white font-semibold">342 calls</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Lowest Hour (4-5 AM):</span>
                  <span className="text-white font-semibold">23 calls</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">AI Resolution Rate:</span>
                  <span className="text-green-400 font-semibold">78.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Escalation Rate:</span>
                  <span className="text-yellow-400 font-semibold">21.7%</span>
                </div>
              </div>
              
              {/* Mini Chart */}
              <div className="mt-6 h-20 bg-white/5 rounded-lg p-3">
                <div className="flex items-end justify-between h-full space-x-1">
                  {[65, 78, 82, 75, 89, 92, 85].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-sm"
                      style={{ height: `${height}%`, width: '12%' }}
                    ></div>
                  ))}
                </div>
                <div className="text-xs text-blue-200 mt-2 text-center">Last 7 Days</div>
              </div>
            </motion.div>

            {/* Agent Performance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Agent Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Active Agents:</span>
                  <span className="text-white font-semibold">47/50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Avg Calls/Hour:</span>
                  <span className="text-white font-semibold">12.4</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Agent Utilization:</span>
                  <span className="text-green-400 font-semibold">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Training Time Saved:</span>
                  <span className="text-green-400 font-semibold">67%</span>
                </div>
              </div>

              {/* Agent Efficiency Chart */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-200">Efficiency Score</span>
                  <span className="text-sm text-white">87.2%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{ width: '87.2%' }}></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Real-Time Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Real-Time Alerts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Queue cleared - All calls answered</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 text-sm">AI accuracy improved to 94.2%</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 text-sm">Peak volume detected - Scaling up</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 16: Technical Architecture Deep Dive
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Technical Architecture Deep Dive</h2>
            <p className="text-2xl text-blue-200">Enterprise-Grade Implementation Specifications</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AWS Stack Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-semibold text-white mb-6">🟧 AWS Enterprise Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">Core Services</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Amazon Connect</span>
                      <span className="text-white">Contact routing & management</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Amazon Lex</span>
                      <span className="text-white">NLP & conversation management</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Amazon Bedrock</span>
                      <span className="text-white">LLM integration & fine-tuning</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">OpenSearch</span>
                      <span className="text-white">Vector search & RAG implementation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Lambda Functions</span>
                      <span className="text-white">Serverless workflow orchestration</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">Performance Specs</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Response Time:</span>
                      <span className="text-green-400">≤ 200ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Concurrent Calls:</span>
                      <span className="text-green-400">10,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Uptime SLA:</span>
                      <span className="text-green-400">99.99%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Data Encryption:</span>
                      <span className="text-green-400">AES-256</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* GCP Stack Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-semibold text-white mb-6">🟦 GCP Enterprise Stack</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">Core Services</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Dialogflow CX</span>
                      <span className="text-white">Advanced conversation AI</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Contact Center AI</span>
                      <span className="text-white">Enterprise contact center platform</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Vertex AI</span>
                      <span className="text-white">ML model hosting & training</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Matching Engine</span>
                      <span className="text-white">High-scale vector similarity search</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Cloud Functions</span>
                      <span className="text-white">Event-driven serverless compute</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-3">Advanced Features</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Real-time Analytics:</span>
                      <span className="text-green-400">CCAI Insights</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Multi-language:</span>
                      <span className="text-green-400">15+ languages</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Auto-scaling:</span>
                      <span className="text-green-400">Dynamic capacity</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Security:</span>
                      <span className="text-green-400">Zero-trust architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-3xl font-semibold text-white mb-8">Implementation Timeline & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">Week 1-2</div>
                <h4 className="text-lg font-semibold text-white mb-2">Discovery & Planning</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• Current state assessment</li>
                  <li>• Requirements gathering</li>
                  <li>• Architecture design</li>
                  <li>• Success metrics definition</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">Week 3-6</div>
                <h4 className="text-lg font-semibold text-white mb-2">Core Development</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• Infrastructure setup</li>
                  <li>• AI model training</li>
                  <li>• Integration development</li>
                  <li>• Security implementation</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Week 7-10</div>
                <h4 className="text-lg font-semibold text-white mb-2">Testing & Validation</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• Performance testing</li>
                  <li>• Security validation</li>
                  <li>• User acceptance testing</li>
                  <li>• Compliance verification</li>
                </ul>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">Week 11-12</div>
                <h4 className="text-lg font-semibold text-white mb-2">Deployment & Go-Live</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• Production deployment</li>
                  <li>• Team training</li>
                  <li>• Go-live support</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },

  // Slide 17: Appendix
  {
    content: (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Appendix</h2>
            <p className="text-xl text-gray-600">Additional Resources & Information</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Platform Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cloud-native architecture</li>
                    <li>• Microservices-based design</li>
                    <li>• Container orchestration (Kubernetes)</li>
                    <li>• Auto-scaling capabilities</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Integration Capabilities</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• RESTful APIs</li>
                    <li>• Webhook support</li>
                    <li>• Third-party integrations</li>
                    <li>• Custom connector development</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Get in Touch</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> <a href="mailto:contact.center@capgemini.com?subject=Enterprise Contact Center AI Inquiry" className="text-blue-600 hover:text-blue-800 underline">contact.center@capgemini.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+18002274364" className="text-blue-600 hover:text-blue-800 underline">+1 (800) 227-4364</a></p>
                    <p><strong>Website:</strong> <a href="https://www.capgemini.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">www.capgemini.com/contact-us</a></p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/capgemini/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">linkedin.com/company/capgemini</a></p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
                  <div className="flex space-x-4 text-blue-600">
                    <a href="mailto:contact.center@capgemini.com" className="hover:text-blue-800 transition-colors" title="Email">📧</a>
                    <a href="https://www.linkedin.com/company/capgemini/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors" title="LinkedIn">💼</a>
                    <a href="https://twitter.com/capgemini" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors" title="Twitter">🐦</a>
                    <a href="https://www.facebook.com/capgemini/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors" title="Facebook">📱</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comprehensive Disclaimer */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">Important Disclaimers</h3>
            <div className="space-y-3 text-sm text-yellow-700">
              <p><strong>Performance Claims:</strong> All performance metrics and improvement percentages are based on industry research and typical implementation results. Actual results may vary significantly based on specific use cases, implementation approach, organizational factors, and existing infrastructure.</p>
              <p><strong>Case Studies:</strong> Industry examples shown are representative of typical challenges and solutions in contact center AI implementations. These are not specific client case studies unless explicitly stated.</p>
              <p><strong>Compliance:</strong> While our solutions are designed to support compliance frameworks (SOC2, GDPR, HIPAA, FINRA, SOX), actual compliance depends on proper implementation and ongoing governance by the client organization.</p>
              <p><strong>Contact Information:</strong> For specific inquiries about Capgemini's AI solutions, please contact us through official channels at <a href="https://www.capgemini.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">www.capgemini.com/contact-us/</a> or call <a href="tel:+18002274364" className="text-blue-600 hover:text-blue-800 underline">+1 (800) 227-4364</a></p>
              <p><strong>Implementation:</strong> Timeline and cost estimates are typical ranges and may vary based on project scope, complexity, and client requirements.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default slides;