// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="dashboard-logo">Jankoti</h1>
            <span className="made-by">Made by Sachin</span>
          </div>
          <div className="user-section">
            <div className="time-display">
              <div className="time">{formatTime(currentTime)}</div>
              <div className="date">{formatDate(currentTime)}</div>
            </div>
            <div className="user-info">
              <div className="user-avatar">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <span className="user-name">
                {user?.name || user?.email || 'User'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="welcome-section">
          <div className="welcome-card">
            <div className="welcome-content">
              <h2 className="welcome-title">
                Welcome to Jankoti! 🎉
              </h2>
              <p className="welcome-subtitle">
                Your journey starts here. We're excited to have you on board.
              </p>
              <div className="creator-badge">
                <span className="badge-icon">👨‍💻</span>
                <div className="badge-text">
                  <div className="badge-title">Crafted with ❤️</div>
                  <div className="badge-subtitle">by Sachin</div>
                </div>
              </div>
            </div>
            <div className="welcome-illustration">
              <div className="floating-element element-1">🚀</div>
              <div className="floating-element element-2">⭐</div>
              <div className="floating-element element-3">💫</div>
              <div className="floating-element element-4">🌟</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>Dashboard</h3>
              <p>Your central hub</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <h3>Goals</h3>
              <p>Track progress</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <h3>Analytics</h3>
              <p>View insights</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔧</div>
            <div className="stat-content">
              <h3>Settings</h3>
              <p>Customize experience</p>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="features-section">
          <h3 className="section-title">What's Next?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">🎨</div>
                <h4>Customize</h4>
              </div>
              <p>Personalize your dashboard to match your workflow and preferences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">🔗</div>
                <h4>Connect</h4>
              </div>
              <p>Integrate with your favorite tools and services seamlessly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <div className="feature-icon">📱</div>
                <h4>Mobile Ready</h4>
              </div>
              <p>Access your dashboard from anywhere, on any device.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <p>&copy; 2025 Jankoti. Created with passion by Sachin.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;