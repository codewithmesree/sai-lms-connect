import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { AuthModal } from "@/components/AuthModal";
import { Dashboard } from "@/pages/Dashboard";
import { GraduationCap, Users, BookOpen, Target, LogIn, UserPlus } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; role: 'admin' | 'professor' | 'student' } | null>(null);

  const handleLogin = (email: string, role: 'admin' | 'professor' | 'student') => {
    setUser({ email, role });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div>
        <header className="bg-card border-b border-border p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  SaiU LMS
                </h1>
                <p className="text-sm text-muted-foreground capitalize">{user.role} Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user.email}</span>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </header>
        <Dashboard userRole={user.role} userEmail={user.email} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-5xl font-bold">SaiU LMS</h1>
          </div>
          
          <p className="text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Welcome to SaiU LMS! An initiative for SaiU by SaiU students
          </p>
          
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            A comprehensive Learning Management System designed to enhance education 
            through seamless collaboration between students, professors, and administrators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white/20 hover:bg-white/30 border border-white/30"
            >
              <LogIn className="w-5 h-5" />
              Login to Your Account
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white hover:text-white"
            >
              <UserPlus className="w-5 h-5" />
              Admin Registration
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Designed for Every Learning Role
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Administrators</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Register students and professors</li>
                <li>• Track course performance</li>
                <li>• Generate student transcripts</li>
                <li>• Manage system analytics</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-academic-gradient rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Professors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Create and manage courses</li>
                <li>• Post assignments and quizzes</li>
                <li>• Track student performance</li>
                <li>• Schedule classes and announcements</li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 border border-border">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">For Students</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access course materials</li>
                <li>• Submit assignments online</li>
                <li>• Track academic progress</li>
                <li>• Calculate CGPA automatically</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Education?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the SaiU community and experience the future of learning management.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => setIsAuthModalOpen(true)}
          >
            <GraduationCap className="w-5 h-5" />
            Get Started Today
          </Button>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
