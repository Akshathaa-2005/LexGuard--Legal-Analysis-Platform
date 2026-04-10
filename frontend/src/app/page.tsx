// 'use client'

// import { useState, useEffect } from 'react'
// import { Upload, FileText, Search, AlertCircle, CheckCircle, TrendingUp, Shield, Scale, Download, BarChart3, PieChart, MessageSquare, Send, X, Plus, RotateCcw, Copy, FileUp, Folder, File, ChevronRight, MessageCircle, Terminal, Database, Globe, Briefcase, Zap, FileText as FileIcon, Filter, Grid, List, Eye, DownloadCloud, FileDown, Loader2, RefreshCw, ExternalLink } from 'lucide-react'
// import axios from 'axios'

// interface PolicyDocument {
//   document_id: string
//   country: string
//   publish_date: string
//   sections: string[]
//   relevance_score?: number
// }

// interface AnalysisResult {
//   executive_summary?: string
//   validity_score?: number
//   risk_level?: string
//   risk_analysis?: string
//   recommendations?: string[]
//   policy_relevance?: PolicyDocument[]
//   compliance_scores?: {
//     data_privacy?: number
//     financial_regulation?: number
//     ai_regulation?: number
//     consumer_protection?: number
//   }
// }

// export default function LexGuardDashboard() {
//   const [description, setDescription] = useState('')
//   const [file, setFile] = useState<File | null>(null)
//   const [selectedCountry, setSelectedCountry] = useState('')
//   const [selectedDomain, setSelectedDomain] = useState('')
//   const [browseCountry, setBrowseCountry] = useState('')
//   const [browseDomain, setBrowseDomain] = useState('')
//   const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
//   const [policies, setPolicies] = useState<PolicyDocument[]>([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [isBrowsing, setIsBrowsing] = useState(false)
//   const [error, setError] = useState('')

//   const countries = ['Europe', 'Australia', 'USA', 'India']
//   const domains = ['AI', 'Healthcare', 'Fintech', 'Crypto', 'Biotech', 'Consumer Apps', 'Insurance']

//   useEffect(() => {
//     setError('')
//   }, [description, file, selectedCountry, selectedDomain])

//   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFile = e.target.files?.[0]
//     if (uploadedFile) {
//       setFile(uploadedFile)
//       setError('')
      
//       const formData = new FormData()
//       formData.append('file', uploadedFile)

//       try {
//         const response = await axios.post('http://localhost:5000/upload', formData, {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         })
        
//         if (response.data.extracted_text) {
//           setDescription(response.data.extracted_text)
//         }
//       } catch (error) {
//         console.error('Upload error:', error)
//         setError('Failed to upload file. Please try again.')
//       }
//     }
//   }

//   const handleAnalyze = async () => {
//     if (!description.trim()) {
//       setError('Please provide a product description')
//       return
//     }

//     setIsAnalyzing(true)
//     setError('')

//     try {
//       const response = await axios.post('http://localhost:5000/analyze', {
//         product_description: description,
//         country: selectedCountry,
//         domain: selectedDomain
//       })

//       setAnalysisResult(response.data)
//     } catch (error: any) {
//       console.error('Analysis error:', error)
//       setError(error.response?.data?.error || 'Analysis failed. Please try again.')
//     } finally {
//       setIsAnalyzing(false)
//     }
//   }

//   const handleBrowsePolicies = async () => {
//     if (!browseCountry && !browseDomain) {
//       setError('Please select at least a country or domain')
//       return
//     }

//     setIsBrowsing(true)
//     setError('')

//     try {
//       const params = new URLSearchParams()
//       if (browseCountry) params.append('country', browseCountry)
//       if (browseDomain) params.append('domain', browseDomain)

//       const response = await axios.get(`http://localhost:5000/policies?${params}`)
//       setPolicies(response.data.documents || [])
//     } catch (error: any) {
//       console.error('Browse error:', error)
//       setError(error.response?.data?.error || 'Failed to browse policies. Please try again.')
//     } finally {
//       setIsBrowsing(false)
//     }
//   }

//   const getRiskColor = (level: string) => {
//     switch (level?.toLowerCase()) {
//       case 'high': return 'text-red-500'
//       case 'medium': return 'text-yellow-500'
//       case 'low': return 'text-green-500'
//       default: return 'text-gray-500'
//     }
//   }

//   const getRiskBgColor = (level: string) => {
//     switch (level?.toLowerCase()) {
//       case 'high': return 'bg-red-100 border-red-200'
//       case 'medium': return 'bg-yellow-100 border-yellow-200'
//       case 'low': return 'bg-green-100 border-green-200'
//       default: return 'bg-gray-100 border-gray-200'
//     }
//   }

//   const getComplianceColor = (score: number) => {
//     if (score >= 80) return 'bg-green-500'
//     if (score >= 60) return 'bg-yellow-500'
//     return 'bg-red-500'
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">LexGuard Legal Compliance Dashboard</h1>
//           <p className="text-gray-600">Analyze your product's legal feasibility and explore relevant policies</p>
//         </div>

//         {/* Error Message */}
//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
//             <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
//             <span className="text-red-700">{error}</span>
//           </div>
//         )}

//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Left Column - Input Section */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Upload Project Section */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                 <Upload className="w-5 h-5 mr-2 text-blue-600" />
//                 Upload Project
//               </h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Product Description
//                   </label>
//                   <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Describe your product, its functionality, target users, and business model..."
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                     rows={4}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Upload Document (Optional)
//                   </label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
//                     <input
//                       type="file"
//                       accept=".pdf,.docx,.doc"
//                       onChange={handleFileUpload}
//                       className="hidden"
//                       id="file-upload"
//                     />
//                     <label htmlFor="file-upload" className="cursor-pointer">
//                       <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                       <span className="text-sm text-gray-600">
//                         {file ? file.name : 'Click to upload PDF or DOCX'}
//                       </span>
//                     </label>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Target Country
//                   </label>
//                   <select
//                     value={selectedCountry}
//                     onChange={(e) => setSelectedCountry(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Select Country</option>
//                     {countries.map(country => (
//                       <option key={country} value={country}>{country}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Business Domain
//                   </label>
//                   <select
//                     value={selectedDomain}
//                     onChange={(e) => setSelectedDomain(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Select Domain</option>
//                     {domains.map(domain => (
//                       <option key={domain} value={domain}>{domain}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <button
//                   onClick={handleAnalyze}
//                   disabled={isAnalyzing || !description.trim()}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {isAnalyzing ? (
//                     <>
//                       <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                       Analyzing...
//                     </>
//                   ) : (
//                     'Analyze Legal Feasibility'
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Explore Policy Section */}
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                 <Search className="w-5 h-5 mr-2 text-blue-600" />
//                 Explore Policy
//               </h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Country
//                   </label>
//                   <select
//                     value={browseCountry}
//                     onChange={(e) => setBrowseCountry(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">All Countries</option>
//                     {countries.map(country => (
//                       <option key={country} value={country}>{country}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Domain
//                   </label>
//                   <select
//                     value={browseDomain}
//                     onChange={(e) => setBrowseDomain(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">All Domains</option>
//                     {domains.map(domain => (
//                       <option key={domain} value={domain}>{domain}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <button
//                   onClick={handleBrowsePolicies}
//                   disabled={isBrowsing}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {isBrowsing ? (
//                     <>
//                       <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                       Browsing...
//                     </>
//                   ) : (
//                     'Browse Policies'
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Results */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Policy Preview */}
//             {policies.length > 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                   <FileText className="w-5 h-5 mr-2 text-blue-600" />
//                   Policy Preview
//                 </h2>
//                 <div className="space-y-3 max-h-64 overflow-y-auto">
//                   {policies.map((policy, index) => (
//                     <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-medium text-gray-900">{policy.document_id}</h3>
//                           <p className="text-sm text-gray-600">{policy.country} - {policy.publish_date}</p>
//                           <div className="mt-2">
//                             <span className="text-xs text-gray-500">Sections: {policy.sections.length}</span>
//                           </div>
//                         </div>
//                         <ExternalLink className="w-4 h-4 text-gray-400" />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Analysis Results */}
//             {analysisResult && (
//               <>
//                 {/* Compliance Report */}
//                 <div className="bg-white rounded-xl shadow-lg p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                     <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
//                     Compliance Report
//                   </h2>
                  
//                   <div className="mb-6">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-lg font-medium text-gray-900">Overall Score</span>
//                       <span className="text-2xl font-bold text-blue-600">{analysisResult.validity_score || 0}/100</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3">
//                       <div 
//                         className={`h-3 rounded-full transition-all ${getComplianceColor(analysisResult.validity_score || 0)}`}
//                         style={{ width: `${analysisResult.validity_score || 0}%` }}
//                       />
//                     </div>
//                   </div>

//                   {analysisResult.compliance_scores && (
//                     <div className="space-y-4">
//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-700">Data Privacy</span>
//                           <span className="text-sm font-medium">{analysisResult.compliance_scores.data_privacy || 0}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className={`h-2 rounded-full ${getComplianceColor(analysisResult.compliance_scores.data_privacy || 0)}`}
//                             style={{ width: `${analysisResult.compliance_scores.data_privacy || 0}%` }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-700">Financial Regulation</span>
//                           <span className="text-sm font-medium">{analysisResult.compliance_scores.financial_regulation || 0}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className={`h-2 rounded-full ${getComplianceColor(analysisResult.compliance_scores.financial_regulation || 0)}`}
//                             style={{ width: `${analysisResult.compliance_scores.financial_regulation || 0}%` }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-700">AI Regulation</span>
//                           <span className="text-sm font-medium">{analysisResult.compliance_scores.ai_regulation || 0}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className={`h-2 rounded-full ${getComplianceColor(analysisResult.compliance_scores.ai_regulation || 0)}`}
//                             style={{ width: `${analysisResult.compliance_scores.ai_regulation || 0}%` }}
//                           />
//                         </div>
//                       </div>

//                       <div>
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm text-gray-700">Consumer Protection</span>
//                           <span className="text-sm font-medium">{analysisResult.compliance_scores.consumer_protection || 0}%</span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div 
//                             className={`h-2 rounded-full ${getComplianceColor(analysisResult.compliance_scores.consumer_protection || 0)}`}
//                             style={{ width: `${analysisResult.compliance_scores.consumer_protection || 0}%` }}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Risk Analysis */}
//                 <div className="bg-white rounded-xl shadow-lg p-6">
//                   <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                     <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
//                     Risk Analysis
//                   </h2>
                  
//                   <div className={`p-4 rounded-lg border ${getRiskBgColor(analysisResult.risk_level || '')}`}>
//                     <div className="flex items-center mb-2">
//                       <TrendingUp className={`w-5 h-5 mr-2 ${getRiskColor(analysisResult.risk_level || '')}`} />
//                       <span className={`font-semibold ${getRiskColor(analysisResult.risk_level || '')}`}>
//                         Risk Level: {analysisResult.risk_level || 'Unknown'}
//                       </span>
//                     </div>
//                     <p className="text-gray-700">
//                       {analysisResult.risk_analysis || 'Risk analysis not available.'}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Legal Recommendations */}
//                 {analysisResult.recommendations && analysisResult.recommendations.length > 0 && (
//                   <div className="bg-white rounded-xl shadow-lg p-6">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                       <Scale className="w-5 h-5 mr-2 text-blue-600" />
//                       Legal Recommendations
//                     </h2>
                    
//                     <div className="space-y-4">
//                       {analysisResult.recommendations.map((recommendation, index) => (
//                         <div key={index} className="flex">
//                           <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold mr-4">
//                             {index + 1}
//                           </div>
//                           <div className="flex-1">
//                             <p className="text-gray-700">{recommendation}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Relevant Policies */}
//                 {analysisResult.policy_relevance && analysisResult.policy_relevance.length > 0 && (
//                   <div className="bg-white rounded-xl shadow-lg p-6">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                       <FileText className="w-5 h-5 mr-2 text-blue-600" />
//                       Relevant Policies
//                     </h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {analysisResult.policy_relevance.map((policy, index) => (
//                         <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
//                           <div className="flex justify-between items-start mb-2">
//                             <h3 className="font-medium text-gray-900">{policy.policy_name || policy.document_id}</h3>
//                             <span className="text-sm text-blue-600 font-medium">
//                               {Math.round((policy.relevance_score || 0) * 100)}%
//                             </span>
//                           </div>
//                           <p className="text-sm text-gray-600 mb-2">{policy.country}</p>
//                           <div className="flex flex-wrap gap-1">
//                             {policy.sections?.slice(0, 3).map((section, i) => (
//                               <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                                 {section}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Executive Summary */}
//                 {analysisResult.executive_summary && (
//                   <div className="bg-white rounded-xl shadow-lg p-6">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
//                       <PieChart className="w-5 h-5 mr-2 text-blue-600" />
//                       Executive Summary
//                     </h2>
                    
//                     <div className="prose prose-gray max-w-none">
//                       <p className="text-gray-700 leading-relaxed">{analysisResult.executive_summary}</p>
//                     </div>
                    
//                     <div className="mt-6 flex gap-4">
//                       <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                         <Download className="w-4 h-4 mr-2" />
//                         Download Report
//                       </button>
//                       <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
//                         <RefreshCw className="w-4 h-4 mr-2" />
//                         Regenerate
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Empty State */}
//             {!analysisResult && policies.length === 0 && (
//               <div className="bg-white rounded-xl shadow-lg p-12 text-center">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Search className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Yet</h3>
//                 <p className="text-gray-600 mb-4">
//                   Upload your project details and analyze legal feasibility, or browse policies to get started.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import { useState, useRef, useEffect } from 'react'
import { Upload, FileText, Search, AlertCircle, CheckCircle, TrendingUp, Shield, Scale, Download, BarChart3, PieChart, MessageSquare, Send, X, Plus, RotateCcw, Copy, FileUp } from 'lucide-react'
import axios from 'axios'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ConversationState {
  description?: string
  file?: File
  country?: string
  domain?: string
  analysis?: any
  policies?: any[]
}

export default function LegalCopilotDashboard() {
  const [productDescription, setProductDescription] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedDomain, setSelectedDomain] = useState('')
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [legalReport, setLegalReport] = useState<any>(null)
  const [error, setError] = useState('')

  // Browse Policy state
  const [browseCountry, setBrowseCountry] = useState('')
  const [browseDomain, setBrowseDomain] = useState('')
  const [browseResults, setBrowseResults] = useState<any[]>([])
  const [isBrowsing, setIsBrowsing] = useState(false)
  const [browseError, setBrowseError] = useState('')

  // Chat state
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<{role:'user'|'assistant', content:string}[]>([])
  const [chatInput, setChatInput] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const countries = ['Europe', 'Australia', 'USA', 'India']
  const domains = ['AI', 'Healthcare', 'Fintech', 'Crypto', 'Biotech', 'Consumer Apps', 'Insurance']

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [chatMessages])

  const handleBrowse = async () => {
    if (!browseCountry && !browseDomain) { setBrowseError('Select at least a country or domain'); return }
    setIsBrowsing(true); setBrowseError(''); setBrowseResults([])
    try {
      const params: any = {}
      if (browseCountry) params.country = browseCountry
      if (browseDomain) params.domain = browseDomain
      const res = await axios.get('http://localhost:5000/policies', { params })
      setBrowseResults(res.data.documents || [])
      if ((res.data.documents || []).length === 0) setBrowseError('No policies found for this selection')
    } catch (err: any) {
      setBrowseError(err.response?.data?.error || 'Failed to fetch policies')
    } finally {
      setIsBrowsing(false)
    }
  }

  const sendChat = async () => {
    if (!chatInput.trim() || isChatLoading) return
    const userMsg = chatInput.trim()
    setChatInput('')
    const newHistory = [...chatMessages, { role: 'user' as const, content: userMsg }]
    setChatMessages(newHistory)
    setIsChatLoading(true)
    try {
      const res = await axios.post('http://localhost:5000/chat', {
        message: userMsg,
        context: legalReport || {},
        product_description: productDescription,
        history: newHistory.slice(-10),
      })
      setChatMessages(prev => [...prev, { role: 'assistant' as const, content: res.data.reply }])
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant' as const, content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsChatLoading(false)
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadedFile(file)
    setError('')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://localhost:5000/upload', formData)
      setExtractedText(response.data.extracted_text)
      setProductDescription(response.data.extracted_text)
    } catch (err) {
      setError('Failed to extract text from file')
      console.error(err)
    }
  }

  const handleAnalyze = async () => {
    if (!productDescription.trim()) {
      setError('Please provide a product description')
      return
    }

    setIsAnalyzing(true)
    setError('')

    try {
      const response = await axios.post('http://localhost:5000/analyze', {
        product_description: productDescription,
        country: selectedCountry,
        domain: selectedDomain
      })

      setLegalReport(response.data)
      setChatMessages([{
        role: 'assistant',
        content: `I've completed the legal analysis. Validity score: ${response.data.validity_score}/100, Risk: ${response.data.risk_level}.\n\n${response.data.executive_summary}\n\nAsk me anything about legal requirements or how to address risks.` 
      }])
    } catch (err: any) {
      setError(err.response?.data?.error || 'Analysis failed')
      console.error(err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const downloadPolicy = async (documentId: string, policyName: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/policy/${documentId}`, {
        responseType: 'blob'
      })
      
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `policy_${policyName.replace(/\s+/g, '_')}.txt`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      setError('Failed to download policy document')
      console.error(err)
    }
  }

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-400'
      case 'Medium': return 'text-yellow-400'
      case 'High': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-blue-400">LexGuard</h1>
          <p className="text-gray-400">AI-Powered Legal Feasibility Analysis for Startup Founders</p>
        </header>

        {/* Top Row - Upload and Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Upload Project */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Upload className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Upload Project</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Description</label>
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="w-full h-32 p-3 bg-slate-700 border border-slate-600 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Describe your product idea..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Document (PDF/DOCX)</label>
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleFileUpload}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Country</label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Domain</label>
                  <select
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Domain</option>
                    {domains.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Legal Feasibility'}
              </button>

              {error && (
                <div className="flex items-center p-3 bg-red-900/50 border border-red-500 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
                  <span className="text-red-400 text-sm">{error}</span>
                </div>
              )}
            </div>
          </div>

          {/* Explore Policy */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Search className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Explore Policy</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Country</label>
                <select value={browseCountry} onChange={e => setBrowseCountry(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">All Countries</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Domain</label>
                <select value={browseDomain} onChange={e => setBrowseDomain(e.target.value)}
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">All Domains</option>
                  {domains.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <button onClick={handleBrowse} disabled={isBrowsing}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors disabled:opacity-50">
                {isBrowsing ? 'Searching…' : 'Browse Policies'}
              </button>
              {browseError && <p className="text-red-400 text-sm">{browseError}</p>}
              {browseResults.length > 0 && (
                <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                  <p className="text-xs text-gray-400">{browseResults.length} document(s) found</p>
                  {browseResults.map((doc, i) => (
                    <div key={i} className="bg-slate-700 rounded-lg p-3">
                      <p className="text-sm font-medium text-white mb-1 leading-tight">{doc.document_name || doc.document_id}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{doc.country} · {doc.publish_date}</span>
                        <button onClick={() => downloadPolicy(doc.document_id, doc.document_name || doc.document_id)}
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                          <Download className="w-3 h-3" /> Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Policy Preview */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 mr-2 text-blue-400" />
              <h2 className="text-xl font-semibold">Policy Preview</h2>
            </div>
            {legalReport?.policy_relevance?.length > 0 ? (
              <div className="space-y-3">
                {legalReport.policy_relevance.slice(0, 3).map((policy: any, index: number) => (
                  <div key={index} className="p-3 bg-slate-700 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{policy.policy_name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{policy.country} • Relevance: {(policy.relevance_score * 100).toFixed(1)}%</p>
                    <button
                      onClick={() => downloadPolicy(policy.document_id, policy.policy_name)}
                      className="text-xs text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      View Full Document
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 text-center py-8">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No policies analyzed yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Legal Report Results */}
        {legalReport && (
          <div className="space-y-6">
            {/* Second Row - Compliance Report */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Compliance Report */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 mr-2 text-blue-400" />
                  <h2 className="text-xl font-semibold">Compliance Report</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{legalReport.validity_score}/100</div>
                    <p className="text-sm text-gray-400">Validity Score</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Data Privacy</span>
                      <span className="text-sm font-medium">{legalReport.compliance_scores.data_privacy}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full" 
                        style={{ width: `${legalReport.compliance_scores.data_privacy}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Financial Regulation</span>
                      <span className="text-sm font-medium">{legalReport.compliance_scores.financial_regulation}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full" 
                        style={{ width: `${legalReport.compliance_scores.financial_regulation}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AI Regulation</span>
                      <span className="text-sm font-medium">{legalReport.compliance_scores.ai_regulation}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full" 
                        style={{ width: `${legalReport.compliance_scores.ai_regulation}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Consumer Protection</span>
                      <span className="text-sm font-medium">{legalReport.compliance_scores.consumer_protection}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-400 h-2 rounded-full" 
                        style={{ width: `${legalReport.compliance_scores.consumer_protection}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Checklist */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 mr-2 text-blue-400" />
                  <h2 className="text-xl font-semibold">Risk Analysis</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${getRiskLevelColor(legalReport.risk_level)}`}>
                      {legalReport.risk_level}
                    </div>
                    <p className="text-sm text-gray-400">Risk Level</p>
                  </div>
                  
                  <div className="space-y-3 max-h-72 overflow-y-auto">
                    <div>
                      <h4 className="font-medium text-green-400 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-1">
                        {legalReport.pros.map((pro: string, index: number) => (
                          <li key={index} className="text-sm text-gray-300 pl-6">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-400 mb-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Challenges
                      </h4>
                      <ul className="space-y-1">
                        {legalReport.cons.map((con: string, index: number) => (
                          <li key={index} className="text-sm text-gray-300 pl-6">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategy Architecture */}
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-blue-400" />
                    <h2 className="text-xl font-semibold">Legal Recommendations</h2>
                  </div>
                  {legalReport && (
                    <button onClick={() => setChatOpen(true)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">
                      <MessageSquare className="w-4 h-4" /> Ask Lawyer
                    </button>
                  )}
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {legalReport.recommendations.map((rec: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-700 rounded-lg">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-200 leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Third Row - Relevant Policies */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <PieChart className="w-6 h-6 mr-2 text-blue-400" />
                <h2 className="text-xl font-semibold">Relevant Policies Retrieved</h2>
              </div>
              
              <div className="max-h-96 overflow-y-auto pr-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {legalReport.policy_relevance.map((policy: any, index: number) => (
                    <div key={index} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors">
                      <h3 className="font-medium mb-2">{policy.policy_name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-400">{policy.country}</span>
                        <span className="text-sm text-blue-400">{(policy.relevance_score * 100).toFixed(1)}% relevant</span>
                      </div>
                      <button
                        onClick={() => downloadPolicy(policy.document_id, policy.policy_name)}
                        className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded text-sm font-medium transition-colors flex items-center justify-center"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        View Full Document
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
              <p className="text-gray-300 leading-relaxed">{legalReport.executive_summary}</p>
            </div>
          </div>
        )}
      </div>

      {chatOpen && (
        <div className="fixed bottom-0 right-0 z-50 w-full max-w-lg flex flex-col" style={{ height: 'min(600px, 100dvh)' }}>
          <div className="w-full h-full bg-slate-800 border border-slate-600 rounded-t-2xl md:rounded-2xl md:m-6 shadow-2xl flex flex-col overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Legal Counsel</p>
                  <p className="text-xs text-green-400">● Online — Ask anything about your analysis</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' ? 'bg-blue-500 text-white rounded-br-sm' : 'bg-slate-700 text-gray-200 rounded-bl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            {chatMessages.length <= 1 && legalReport && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {['What are my biggest legal risks?', 'Which licenses do I need first?', 'What fines could I face?', 'How long will compliance take?'].map((q, i) => (
                    <button key={i} onClick={() => setChatInput(q)}
                      className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-gray-300 transition-colors">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-3">
                <input value={chatInput} onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendChat()}
                  placeholder="Ask your legal counsel..."
                  className="flex-1 p-3 bg-slate-700 border border-slate-600 rounded-xl text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button onClick={sendChat} disabled={isChatLoading || !chatInput.trim()}
                  className="px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors disabled:opacity-50">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!chatOpen && legalReport && (
        <button onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg font-semibold transition-all hover:scale-105">
          <MessageSquare className="w-5 h-5" /> Ask Legal Counsel
        </button>
      )}
    </div>
  )
}
