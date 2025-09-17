import { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  BookOpen, 
  Award, 
  Target,
  TrendingUp,
  Code,
  Users,
  Brain,
  Star,
  Play,
  ExternalLink
} from "lucide-react";

export function InteractiveRoadmap({ selectedCareer }) {
  const [selectedNode, setSelectedNode] = useState(null);
  const [completedNodes, setCompletedNodes] = useState([
    'html-css', 'javascript', 'git', 'react-basics'
  ]);

  const roadmapData = {
    "software-engineer": {
      title: "Software Engineer Career Path",
      totalDuration: "18-24 months",
      nodes: [
        {
          id: 'html-css',
          title: 'HTML & CSS',
          type: 'foundation',
          duration: '3 weeks',
          position: { x: 100, y: 50 },
          prerequisites: [],
          skills: ['HTML5', 'CSS3', 'Responsive Design'],
          resources: ['FreeCodeCamp', 'MDN Docs'],
          difficulty: 'Beginner'
        },
        {
          id: 'javascript',
          title: 'JavaScript Fundamentals',
          type: 'foundation',
          duration: '6 weeks',
          position: { x: 300, y: 50 },
          prerequisites: ['html-css'],
          skills: ['ES6+', 'DOM Manipulation', 'Async Programming'],
          resources: ['JavaScript.info', 'Eloquent JavaScript'],
          difficulty: 'Beginner'
        },
        {
          id: 'git',
          title: 'Version Control (Git)',
          type: 'tool',
          duration: '2 weeks',
          position: { x: 200, y: 150 },
          prerequisites: ['javascript'],
          skills: ['Git Commands', 'GitHub', 'Collaboration'],
          resources: ['Pro Git Book', 'GitHub Guides'],
          difficulty: 'Beginner'
        },
        {
          id: 'react-basics',
          title: 'React.js Basics',
          type: 'framework',
          duration: '8 weeks',
          position: { x: 500, y: 50 },
          prerequisites: ['javascript', 'git'],
          skills: ['Components', 'Hooks', 'State Management'],
          resources: ['React.dev', 'React Course'],
          difficulty: 'Intermediate'
        },
        {
          id: 'backend-node',
          title: 'Node.js & Express',
          type: 'backend',
          duration: '6 weeks',
          position: { x: 400, y: 200 },
          prerequisites: ['react-basics'],
          skills: ['RESTful APIs', 'Middleware', 'Authentication'],
          resources: ['Node.js Docs', 'Express Guide'],
          difficulty: 'Intermediate'
        },
        {
          id: 'database',
          title: 'Database Design',
          type: 'data',
          duration: '4 weeks',
          position: { x: 600, y: 200 },
          prerequisites: ['backend-node'],
          skills: ['SQL', 'MongoDB', 'Data Modeling'],
          resources: ['PostgreSQL Tutorial', 'MongoDB University'],
          difficulty: 'Intermediate'
        },
        {
          id: 'full-stack-project',
          title: 'Full-Stack Project',
          type: 'project',
          duration: '6 weeks',
          position: { x: 500, y: 350 },
          prerequisites: ['backend-node', 'database'],
          skills: ['System Integration', 'Deployment', 'Testing'],
          resources: ['Project Ideas', 'Deployment Guides'],
          difficulty: 'Advanced'
        },
        {
          id: 'advanced-concepts',
          title: 'Advanced Concepts',
          type: 'advanced',
          duration: '8 weeks',
          position: { x: 300, y: 450 },
          prerequisites: ['full-stack-project'],
          skills: ['Microservices', 'Docker', 'CI/CD'],
          resources: ['System Design Primer', 'DevOps Bootcamp'],
          difficulty: 'Advanced'
        },
        {
          id: 'job-ready',
          title: 'Job Application Ready',
          type: 'career',
          duration: '4 weeks',
          position: { x: 500, y: 550 },
          prerequisites: ['advanced-concepts'],
          skills: ['Portfolio', 'Interview Prep', 'Networking'],
          resources: ['LeetCode', 'Interview Guides'],
          difficulty: 'Advanced'
        }
      ]
    }
  };

  const currentRoadmap = roadmapData[selectedCareer as keyof typeof roadmapData] || roadmapData["software-engineer"];

  const getNodeTypeIcon = (type: string) => {
    switch (type) {
      case 'foundation': return BookOpen;
      case 'framework': return Code;
      case 'backend': return TrendingUp;
      case 'data': return Brain;
      case 'project': return Target;
      case 'advanced': return Award;
      case 'career': return Users;
      case 'tool': return Star;
      default: return Circle;
    }
  };

  const getNodeTypeColor = (type) => {
    switch (type) {
      case 'foundation': return 'bg-blue-500';
      case 'framework': return 'bg-green-500';
      case 'backend': return 'bg-purple-500';
      case 'data': return 'bg-orange-500';
      case 'project': return 'bg-red-500';
      case 'advanced': return 'bg-indigo-500';
      case 'career': return 'bg-pink-500';
      case 'tool': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'border-green-300 text-green-700';
      case 'Intermediate': return 'border-yellow-300 text-yellow-700';
      case 'Advanced': return 'border-red-300 text-red-700';
      default: return 'border-gray-300 text-gray-700';
    }
  };

  const isNodeCompleted = (nodeId) => completedNodes.includes(nodeId);
  const isNodeUnlocked = (node) => {
    return node.prerequisites.every((prereq) => completedNodes.includes(prereq));
  };

  const toggleNodeCompletion = (nodeId) => {
    if (completedNodes.includes(nodeId)) {
      setCompletedNodes(prev => prev.filter(id => id !== nodeId));
    } else {
      setCompletedNodes(prev => [...prev, nodeId]);
    }
  };

  const calculateProgress = () => {
    return Math.round((completedNodes.length / currentRoadmap.nodes.length) * 100);
  };

  const selectedNodeData = selectedNode ? currentRoadmap.nodes.find(n => n.id === selectedNode) : null;

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>{currentRoadmap.title}</CardTitle>
              <CardDescription>Interactive learning path with {currentRoadmap.nodes.length} milestones</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{calculateProgress()}%</div>
              <p className="text-sm text-gray-600">Complete</p>
            </div>
          </div>
          <Progress value={calculateProgress()} className="h-3" />
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Interactive Roadmap Visualization */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Career Roadmap
              </CardTitle>
              <CardDescription>Click on nodes to see details and mark as complete</CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden">
                <svg className="absolute inset-0 w-full h-full">
                  {/* Connection Lines */}
                  {currentRoadmap.nodes.map(node => 
                    node.prerequisites.map(prereqId => {
                      const prereqNode = currentRoadmap.nodes.find(n => n.id === prereqId);
                      if (!prereqNode) return null;
                      
                      return (
                        <line
                          key={`${prereqId}-${node.id}`}
                          x1={prereqNode.position.x + 40}
                          y1={prereqNode.position.y + 40}
                          x2={node.position.x + 40}
                          y2={node.position.y + 40}
                          stroke={isNodeCompleted(prereqId) && isNodeCompleted(node.id) ? "#10b981" : "#e5e7eb"}
                          strokeWidth="2"
                          strokeDasharray={isNodeCompleted(prereqId) ? "0" : "5,5"}
                        />
                      );
                    })
                  )}
                </svg>

                {/* Nodes */}
                {currentRoadmap.nodes.map(node => {
                  const NodeIcon = getNodeTypeIcon(node.type);
                  const completed = isNodeCompleted(node.id);
                  const unlocked = isNodeUnlocked(node);
                  
                  return (
                    <div
                      key={node.id}
                      className={`absolute cursor-pointer transform transition-all duration-200 hover:scale-110 ${
                        selectedNode === node.id ? 'z-20' : 'z-10'
                      }`}
                      style={{
                        left: node.position.x,
                        top: node.position.y,
                      }}
                      onClick={() => setSelectedNode(node.id)}
                    >
                      <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
                        completed 
                          ? 'bg-green-500 border-green-600 shadow-lg shadow-green-200' 
                          : unlocked
                          ? `${getNodeTypeColor(node.type)} border-white shadow-lg`
                          : 'bg-gray-300 border-gray-400'
                      }`}>
                        {completed ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          <NodeIcon className={`w-8 h-8 ${unlocked ? 'text-white' : 'text-gray-500'}`} />
                        )}
                      </div>
                      <div className="text-center mt-2 max-w-20">
                        <p className="text-xs font-medium text-gray-700 truncate">{node.title}</p>
                        <p className="text-xs text-gray-500">{node.duration}</p>
                      </div>
                      
                      {/* Completion Badge */}
                      {completed && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Node Details Panel */}
        <div className="space-y-6">
          {selectedNodeData ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{selectedNodeData.title}</CardTitle>
                  <Badge variant="outline" className={getDifficultyColor(selectedNodeData.difficulty)}>
                    {selectedNodeData.difficulty}
                  </Badge>
                </div>
                <CardDescription>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    {selectedNodeData.duration}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Skills You'll Learn</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNodeData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Resources</h4>
                  <div className="space-y-2">
                    {selectedNodeData.resources.map((resource, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        size="sm" 
                        className="w-full justify-between"
                      >
                        {resource}
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>

                {selectedNodeData.prerequisites.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Prerequisites</h4>
                    <div className="space-y-1">
                      {selectedNodeData.prerequisites.map((prereqId, index) => {
                        const prereq = currentRoadmap.nodes.find(n => n.id === prereqId);
                        const completed = isNodeCompleted(prereqId);
                        return (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            {completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-400" />
                            )}
                            <span className={completed ? 'text-green-700' : 'text-gray-600'}>
                              {prereq?.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t">
                  {isNodeCompleted(selectedNodeData.id) ? (
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => toggleNodeCompletion(selectedNodeData.id)}
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      Completed
                    </Button>
                  ) : isNodeUnlocked(selectedNodeData) ? (
                    <div className="space-y-2">
                      <Button className="w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => toggleNodeCompletion(selectedNodeData.id)}
                      >
                        Mark as Complete
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" disabled className="w-full">
                      Complete Prerequisites First
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-medium text-gray-900 mb-2">Select a Node</h3>
                <p className="text-sm text-gray-600">
                  Click on any node in the roadmap to see detailed information and resources.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Progress Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm">Completed</span>
                <span className="font-medium">{completedNodes.length}/{currentRoadmap.nodes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Next Milestone</span>
                <span className="font-medium text-blue-600">
                  {currentRoadmap.nodes.find(n => !isNodeCompleted(n.id) && isNodeUnlocked(n))?.title || 'All Complete!'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Estimated Time Left</span>
                <span className="font-medium">
                  {Math.max(0, currentRoadmap.nodes.length - completedNodes.length) * 4} weeks
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}