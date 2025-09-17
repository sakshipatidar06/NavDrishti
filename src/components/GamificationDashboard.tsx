import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Award,
  BookOpen,
  Users,
  TrendingUp,
  Brain,
  Clock,
  CheckCircle,
  Crown,
  Medal,
  Flame
} from "lucide-react";

export function GamificationDashboard({ user }) {
  const [currentLevel, setCurrentLevel] = useState(7);
  const [currentXP, setCurrentXP] = useState(2840);
  const [nextLevelXP] = useState(3000);
  const [streak, setStreak] = useState(12);

  // Mock user achievements and progress
  const achievements = [
    {
      id: 'first-steps',
      title: 'First Steps',
      description: 'Complete your profile',
      icon: Users,
      earned: true,
      earnedDate: '2024-01-15',
      xp: 50,
      rarity: 'common'
    },
    {
      id: 'assessment-master',
      title: 'Assessment Master',
      description: 'Complete all 4 assessment types',
      icon: Brain,
      earned: true,
      earnedDate: '2024-01-18',
      xp: 200,
      rarity: 'rare'
    },
    {
      id: 'roadmap-explorer',
      title: 'Roadmap Explorer',
      description: 'View 3 different career roadmaps',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-20',
      xp: 100,
      rarity: 'common'
    },
    {
      id: 'streak-warrior',
      title: 'Streak Warrior',
      description: 'Maintain a 7-day learning streak',
      icon: Flame,
      earned: true,
      earnedDate: '2024-01-22',
      xp: 150,
      rarity: 'uncommon'
    },
    {
      id: 'skill-builder',
      title: 'Skill Builder',
      description: 'Complete 10 skill assessments',
      icon: BookOpen,
      earned: false,
      earnedDate: null,
      xp: 300,
      rarity: 'rare'
    },
    {
      id: 'mentor-connector',
      title: 'Mentor Connector',
      description: 'Connect with 3 mentors',
      icon: Users,
      earned: false,
      earnedDate: null,
      xp: 250,
      rarity: 'uncommon'
    },
    {
      id: 'goal-crusher',
      title: 'Goal Crusher',
      description: 'Complete your first milestone',
      icon: Trophy,
      earned: false,
      earnedDate: null,
      xp: 500,
      rarity: 'legendary'
    },
    {
      id: 'career-ready',
      title: 'Career Ready',
      description: 'Complete 80% of your roadmap',
      icon: Crown,
      earned: false,
      earnedDate: null,
      xp: 1000,
      rarity: 'legendary'
    }
  ];

  const careerReadinessMetrics = {
    overall: 78,
    technical: 85,
    soft: 72,
    experience: 65,
    networking: 80
  };

  const weeklyProgress = [
    { day: 'Mon', xp: 120 },
    { day: 'Tue', xp: 200 },
    { day: 'Wed', xp: 80 },
    { day: 'Thu', xp: 150 },
    { day: 'Fri', xp: 180 },
    { day: 'Sat', xp: 100 },
    { day: 'Sun', xp: 90 }
  ];

  const leaderboard = [
    { rank: 1, name: 'Arjun Kumar', xp: 8940, level: 15, avatar: 'AK' },
    { rank: 2, name: 'Priya Sharma', xp: 7820, level: 13, avatar: 'PS' },
    { rank: 3, name: 'Rahul Patel', xp: 6750, level: 12, avatar: 'RP' },
    { rank: 4, name: user?.name || 'You', xp: currentXP, level: currentLevel, avatar: user?.name?.charAt(0) || 'U' },
    { rank: 5, name: 'Sneha Reddy', xp: 5420, level: 10, avatar: 'SR' }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'uncommon': return 'border-green-300 bg-green-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityBadgeColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'uncommon': return 'bg-green-100 text-green-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const earnedAchievements = achievements.filter(a => a.earned);
  const nextAchievement = achievements.find(a => !a.earned);

  return (
    <div className="space-y-6">
      {/* Level and XP Progress */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              Level {currentLevel} • Career Explorer
            </CardTitle>
            <CardDescription>Keep learning to unlock new achievements and levels!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress to Level {currentLevel + 1}</span>
              <span className="text-sm text-gray-600">{currentXP}/{nextLevelXP} XP</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentXP / nextLevelXP) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Progress value={(currentXP / nextLevelXP) * 100} className="h-3" />
            </motion.div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">{currentXP} XP</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">{streak} day streak</span>
                </div>
              </div>
              <span className="text-gray-600">{nextLevelXP - currentXP} XP to next level</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Career Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-blue-600 mb-1">
                {careerReadinessMetrics.overall}%
              </div>
              <p className="text-sm text-gray-600">Overall Readiness</p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Progress value={careerReadinessMetrics.overall} className="h-2 mb-4" />
            </motion.div>
            <div className="space-y-2 text-xs">
              {Object.entries(careerReadinessMetrics).slice(1).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="font-medium">{value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Achievements */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                Achievements ({earnedAchievements.length}/{achievements.length})
              </CardTitle>
              <CardDescription>
                Unlock achievements by completing various activities and milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => {
                  const AchievementIcon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative p-4 rounded-lg border-2 text-center ${
                        achievement.earned 
                          ? getRarityColor(achievement.rarity)
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-white shadow-md'
                          : 'bg-gray-200'
                      }`}>
                        <AchievementIcon className={`w-6 h-6 ${
                          achievement.earned ? 'text-blue-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <h4 className="font-medium text-sm mb-1">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                      
                      {achievement.earned ? (
                        <div className="space-y-1">
                          <Badge variant="secondary" className={getRarityBadgeColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                          <div className="text-xs text-gray-500">
                            +{achievement.xp} XP
                          </div>
                        </div>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          {achievement.xp} XP
                        </Badge>
                      )}

                      {achievement.earned && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Weekly Activity
              </CardTitle>
              <CardDescription>Your XP gained over the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-32 gap-2">
                {weeklyProgress.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ height: 0 }}
                    animate={{ height: `${(day.xp / 200) * 100}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex-1 bg-blue-500 rounded-t flex flex-col justify-end items-center text-white text-xs font-medium relative"
                    style={{ minHeight: '20px' }}
                  >
                    <span className="absolute -top-6 text-gray-600">{day.xp}</span>
                    <span className="p-1">{day.day}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Next Achievement */}
          {nextAchievement && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Achievement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <nextAchievement.icon className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="font-medium mb-1">{nextAchievement.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{nextAchievement.description}</p>
                <Badge variant="outline" className={getRarityBadgeColor(nextAchievement.rarity)}>
                  +{nextAchievement.xp} XP • {nextAchievement.rarity}
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Leaderboard
              </CardTitle>
              <CardDescription>Top performers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-2 rounded ${
                      user.name === (user?.name || 'You') ? 'bg-blue-50 border border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {user.rank === 1 && <Crown className="w-4 h-4 text-yellow-500" />}
                      {user.rank === 2 && <Medal className="w-4 h-4 text-gray-400" />}
                      {user.rank === 3 && <Medal className="w-4 h-4 text-orange-400" />}
                      <span className="text-sm font-medium">#{user.rank}</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">{user.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">Level {user.level} • {user.xp} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Quest */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-500" />
                Daily Quest
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">Today's Challenge</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Complete 2 skill assessment questions
                  </p>
                  <div className="flex justify-between items-center">
                    <Progress value={50} className="h-2 flex-1 mr-2" />
                    <span className="text-xs text-gray-600">1/2</span>
                  </div>
                  <div className="text-xs text-purple-600 mt-1">
                    +100 XP reward
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}