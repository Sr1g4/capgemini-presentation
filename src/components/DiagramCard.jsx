import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

export default function DiagramCard({ 
  title, 
  description, 
  diagramType = "architecture", 
  interactive = true,
  className = "",
  src,
  alt,
  caption
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleClick = useCallback(() => {
    if (interactive) {
      setIsExpanded(!isExpanded);
    }
  }, [interactive, isExpanded]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  const getDiagramContent = () => {
    switch (diagramType) {
      case "contact-center-flow":
        return (
          <div className="relative w-full h-full p-4">
            {/* Contact Center AI Workflow Diagram */}
            <svg className="w-full h-full" viewBox="0 0 900 500" fill="none">
              {/* Background Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.3"/>
                </pattern>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                </marker>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <rect width="900" height="500" fill="url(#grid)"/>
              
              {/* Customer Entry Point */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <rect x="50" y="200" width="120" height="80" rx="12" className="fill-blue-500 stroke-blue-600 stroke-2" filter="url(#glow)"/>
                <text x="110" y="235" className="text-white font-bold text-sm" textAnchor="middle">👤</text>
                <text x="110" y="255" className="text-white font-bold text-xs" textAnchor="middle">Customer</text>
                <text x="110" y="270" className="text-white font-bold text-xs" textAnchor="middle">Call/Chat</text>
              </motion.g>
              
              {/* AI Voice Recognition */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <rect x="220" y="150" width="120" height="80" rx="12" className="fill-green-500 stroke-green-600 stroke-2" filter="url(#glow)"/>
                <text x="280" y="185" className="text-white font-bold text-sm" textAnchor="middle">🎤</text>
                <text x="280" y="205" className="text-white font-bold text-xs" textAnchor="middle">AI Voice</text>
                <text x="280" y="220" className="text-white font-bold text-xs" textAnchor="middle">Recognition</text>
              </motion.g>
              
              {/* Natural Language Processing */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <rect x="390" y="100" width="120" height="80" rx="12" className="fill-purple-500 stroke-purple-600 stroke-2" filter="url(#glow)"/>
                <text x="450" y="135" className="text-white font-bold text-sm" textAnchor="middle">🧠</text>
                <text x="450" y="155" className="text-white font-bold text-xs" textAnchor="middle">NLP</text>
                <text x="450" y="170" className="text-white font-bold text-xs" textAnchor="middle">Processing</text>
              </motion.g>
              
              {/* Intent Recognition */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <rect x="560" y="150" width="120" height="80" rx="12" className="fill-orange-500 stroke-orange-600 stroke-2" filter="url(#glow)"/>
                <text x="620" y="185" className="text-white font-bold text-sm" textAnchor="middle">🎯</text>
                <text x="620" y="205" className="text-white font-bold text-xs" textAnchor="middle">Intent</text>
                <text x="620" y="220" className="text-white font-bold text-xs" textAnchor="middle">Recognition</text>
              </motion.g>
              
              {/* Knowledge Base */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <rect x="730" y="200" width="120" height="80" rx="12" className="fill-indigo-500 stroke-indigo-600 stroke-2" filter="url(#glow)"/>
                <text x="790" y="235" className="text-white font-bold text-sm" textAnchor="middle">📚</text>
                <text x="790" y="255" className="text-white font-bold text-xs" textAnchor="middle">Knowledge</text>
                <text x="790" y="270" className="text-white font-bold text-xs" textAnchor="middle">Base</text>
              </motion.g>
              
              {/* Response Generation */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                <rect x="560" y="300" width="120" height="80" rx="12" className="fill-teal-500 stroke-teal-600 stroke-2" filter="url(#glow)"/>
                <text x="620" y="335" className="text-white font-bold text-sm" textAnchor="middle">💬</text>
                <text x="620" y="355" className="text-white font-bold text-xs" textAnchor="middle">Response</text>
                <text x="620" y="370" className="text-white font-bold text-xs" textAnchor="middle">Generation</text>
              </motion.g>
              
              {/* Human Agent (if needed) */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <rect x="390" y="350" width="120" height="80" rx="12" className="fill-pink-500 stroke-pink-600 stroke-2" filter="url(#glow)"/>
                <text x="450" y="385" className="text-white font-bold text-sm" textAnchor="middle">👨‍💼</text>
                <text x="450" y="405" className="text-white font-bold text-xs" textAnchor="middle">Human</text>
                <text x="450" y="420" className="text-white font-bold text-xs" textAnchor="middle">Agent</text>
              </motion.g>
              
              {/* Customer Satisfaction */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <rect x="220" y="300" width="120" height="80" rx="12" className="fill-emerald-500 stroke-emerald-600 stroke-2" filter="url(#glow)"/>
                <text x="280" y="335" className="text-white font-bold text-sm" textAnchor="middle">😊</text>
                <text x="280" y="355" className="text-white font-bold text-xs" textAnchor="middle">Customer</text>
                <text x="280" y="370" className="text-white font-bold text-xs" textAnchor="middle">Satisfaction</text>
              </motion.g>
              
              {/* Analytics Dashboard */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 }}
              >
                <rect x="50" y="350" width="120" height="80" rx="12" className="fill-cyan-500 stroke-cyan-600 stroke-2" filter="url(#glow)"/>
                <text x="110" y="385" className="text-white font-bold text-sm" textAnchor="middle">📊</text>
                <text x="110" y="405" className="text-white font-bold text-xs" textAnchor="middle">Analytics</text>
                <text x="110" y="420" className="text-white font-bold text-xs" textAnchor="middle">Dashboard</text>
              </motion.g>
              
              {/* Flow Arrows */}
              <motion.path
                d="M 170 240 L 220 190"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
              
              <motion.path
                d="M 340 190 L 390 140"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              
              <motion.path
                d="M 510 140 L 560 190"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
              
              <motion.path
                d="M 680 190 L 730 240"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
              
              <motion.path
                d="M 730 280 L 680 300"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
              
              <motion.path
                d="M 560 380 L 510 350"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              
              <motion.path
                d="M 390 430 L 340 380"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              />
              
              <motion.path
                d="M 220 380 L 170 390"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              />
              
              {/* Performance Metrics */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              >
                <rect x="50" y="50" width="800" height="30" rx="6" className="fill-blue-50 stroke-blue-200 stroke-1"/>
                <text x="450" y="70" className="text-blue-800 font-bold text-sm" textAnchor="middle">⚡ 90% Faster Resolution • 💰 80% Cost Reduction • 😊 +90 NPS</text>
              </motion.g>
            </svg>
          </div>
        );
      
      case "flow":
        return (
          <div className="relative w-full h-full">
            {/* Flow Diagram */}
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              {/* Start Node */}
              <motion.rect
                x="50" y="180" width="120" height="40" rx="8"
                className="fill-blue-500 stroke-blue-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              />
              <text x="110" y="205" className="text-white font-bold text-sm" textAnchor="middle">Start</text>
              
              {/* Arrow 1 */}
              <motion.path
                d="M 170 200 L 250 200"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
              
              {/* Process Node */}
              <motion.rect
                x="250" y="180" width="120" height="40" rx="8"
                className="fill-green-500 stroke-green-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              />
              <text x="310" y="205" className="text-white font-bold text-sm" textAnchor="middle">Process</text>
              
              {/* Arrow 2 */}
              <motion.path
                d="M 370 200 L 450 200"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              
              {/* Decision Node */}
              <motion.rect
                x="450" y="180" width="120" height="40" rx="8"
                className="fill-yellow-500 stroke-yellow-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              />
              <text x="510" y="205" className="text-white font-bold text-sm" textAnchor="middle">Decision</text>
              
              {/* Arrow 3 */}
              <motion.path
                d="M 570 200 L 650 200"
                stroke="#3B82F6" strokeWidth="3" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
              
              {/* End Node */}
              <motion.rect
                x="650" y="180" width="120" height="40" rx="8"
                className="fill-red-500 stroke-red-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0 }}
              />
              <text x="710" y="205" className="text-white font-bold text-sm" textAnchor="middle">End</text>
              
              {/* Arrowhead marker */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      case "comparison":
        return (
          <div className="grid grid-cols-3 gap-4 w-full h-full">
            <motion.div
              className="bg-blue-100 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-bold text-blue-800 mb-2">Our Solution</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced AI</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Multi-Cloud</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Compliance</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-bold text-gray-800 mb-2">Competitor A</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Basic AI</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Single Cloud</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">~</span>
                  <span>Limited</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="font-bold text-gray-800 mb-2">Competitor B</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">~</span>
                  <span>Medium AI</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">~</span>
                  <span>Basic</span>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case "architecture":
        return (
          <div className="relative w-full h-full">
            {/* Architecture Diagram */}
            <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
              {/* Cloud Layer */}
              <motion.rect
                x="50" y="50" width="700" height="100" rx="10"
                className="fill-blue-100 stroke-blue-300 stroke-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              />
              <text x="400" y="80" className="text-blue-800 font-bold text-lg" textAnchor="middle">Cloud Infrastructure</text>
              
              {/* Services */}
              <motion.rect x="100" y="70" width="80" height="60" rx="5" className="fill-blue-500 stroke-blue-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <text x="140" y="105" className="text-white font-bold text-xs" textAnchor="middle">API</text>
              
              <motion.rect x="220" y="70" width="80" height="60" rx="5" className="fill-green-500 stroke-green-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
              <text x="260" y="105" className="text-white font-bold text-xs" textAnchor="middle">AI/ML</text>
              
              <motion.rect x="340" y="70" width="80" height="60" rx="5" className="fill-purple-500 stroke-purple-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              />
              <text x="380" y="105" className="text-white font-bold text-xs" textAnchor="middle">Database</text>
              
              <motion.rect x="460" y="70" width="80" height="60" rx="5" className="fill-orange-500 stroke-orange-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <text x="500" y="105" className="text-white font-bold text-xs" textAnchor="middle">Analytics</text>
              
              <motion.rect x="580" y="70" width="80" height="60" rx="5" className="fill-red-500 stroke-red-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              />
              <text x="620" y="105" className="text-white font-bold text-xs" textAnchor="middle">Security</text>
              
              {/* Connection Lines */}
              <motion.path d="M 180 100 L 220 100" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              />
              <motion.path d="M 300 100 L 340 100" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              />
              <motion.path d="M 420 100 L 460 100" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 0.3 }}
              />
              <motion.path d="M 540 100 L 580 100" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.3 }}
              />
              
              {/* Client Layer */}
              <motion.rect
                x="50" y="400" width="700" height="80" rx="10"
                className="fill-gray-100 stroke-gray-300 stroke-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              />
              <text x="400" y="430" className="text-gray-800 font-bold text-lg" textAnchor="middle">Client Applications</text>
              
              {/* Client Apps */}
              <motion.rect x="150" y="420" width="60" height="40" rx="5" className="fill-gray-500 stroke-gray-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              />
              <text x="180" y="445" className="text-white font-bold text-xs" textAnchor="middle">Web</text>
              
              <motion.rect x="250" y="420" width="60" height="40" rx="5" className="fill-gray-500 stroke-gray-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              />
              <text x="280" y="445" className="text-white font-bold text-xs" textAnchor="middle">Mobile</text>
              
              <motion.rect x="350" y="420" width="60" height="40" rx="5" className="fill-gray-500 stroke-gray-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
              />
              <text x="380" y="445" className="text-white font-bold text-xs" textAnchor="middle">Desktop</text>
              
              <motion.rect x="450" y="420" width="60" height="40" rx="5" className="fill-gray-500 stroke-gray-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <text x="480" y="445" className="text-white font-bold text-xs" textAnchor="middle">API</text>
              
              <motion.rect x="550" y="420" width="60" height="40" rx="5" className="fill-gray-500 stroke-gray-600 stroke-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
              />
              <text x="580" y="445" className="text-white font-bold text-xs" textAnchor="middle">Voice</text>
              
              {/* Connection to Cloud */}
              <motion.path d="M 400 400 L 400 150" stroke="#3B82F6" strokeWidth="3" strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              />
              
              {/* Arrowhead marker */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                </marker>
              </defs>
            </svg>
          </div>
        );
      
      default:
        return (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* Main Diagram Card */}
      <motion.div
        className={`relative rounded-lg border-2 shadow-md transition-all duration-300 cursor-pointer bg-white hover:bg-gray-50 ${className}`}
        whileHover={{ scale: interactive ? 1.02 : 1 }}
        whileTap={{ scale: interactive ? 0.98 : 1 }}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={interactive ? 0 : -1}
        role={interactive ? "button" : "img"}
        aria-label={interactive ? `View ${title} diagram` : title}
      >
        {/* Diagram Container */}
        <div className="relative overflow-hidden rounded-md p-4" style={{ minHeight: "300px" }}>
          {src ? (
            <img
              src={src}
              alt={alt || title}
              className={`w-full h-auto object-contain transition-transform duration-300 ${
                isHovered && interactive ? "scale-105" : "scale-100"
              }`}
              style={{ minHeight: "250px" }}
            />
          ) : (
            getDiagramContent()
          )}
          
          {/* Interactive Overlay */}
          {interactive && (
            <motion.div
              className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Title and Description */}
        <div className="p-4">
          <motion.h3
            className="text-lg font-semibold text-gray-900 mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Interactive Indicator */}
        {interactive && (
          <motion.div
            className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" clipRule="evenodd" />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="relative max-w-7xl max-h-full overflow-auto bg-white rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Close diagram"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Full Diagram */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                  <p className="text-gray-600">{description}</p>
                </div>
                
                <div className="w-full h-auto" style={{ minHeight: "500px" }}>
                  {src ? (
                    <img
                      src={src}
                      alt={alt || title}
                      className="w-full h-auto object-contain"
                    />
                  ) : (
                    <div className="w-full h-full" style={{ minHeight: "500px" }}>
                      {getDiagramContent()}
                    </div>
                  )}
                </div>
                
                {caption && (
                  <div className="mt-4 text-center">
                    <p className="text-lg font-medium text-gray-700">{caption}</p>
                  </div>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white transition-colors"
                >
                  Close
                </button>
                {src && (
                  <button
                    onClick={() => window.open(src, '_blank')}
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Open in New Tab
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}