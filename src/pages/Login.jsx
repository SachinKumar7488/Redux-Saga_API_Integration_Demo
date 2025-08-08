// src/pages/Login.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../features/auth/authSlice';
import { motion, AnimatePresence } from 'framer-motion';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (user) {
      setIsSuccess(true);
      setStatusMessage('Login successful!');

      // Note: localStorage usage removed for Claude.ai compatibility
      // In production, you can uncomment the localStorage code below:
      // if (rememberMe) {
      //   localStorage.setItem('rememberedEmail', email);
      // } else {
      //   localStorage.removeItem('rememberedEmail');
      // }

      setTimeout(() => {
        setStatusMessage(null);
        navigate('/dashboard');
      }, 2000);
    } else if (error) {
      setIsSuccess(false);
      setStatusMessage('Login failed!');
      setTimeout(() => setStatusMessage(null), 3000);
    }
  }, [user, error, navigate, email, rememberMe]);

  useEffect(() => {
    // Auto-fill remembered email (localStorage removed for Claude.ai compatibility)
    // In production, uncomment:
    // const rememberedEmail = localStorage.getItem('rememberedEmail');
    // if (rememberedEmail) {
    //   setEmail(rememberedEmail);
    //   setRememberMe(true);
    // }
  }, []);

  return (
    <div className="login-container">
      {/* Floating 3D Elements */}
      <div className="floating-shapes">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-shape shape-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="login-wrapper"
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOutCubic",
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div 
          className="login-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <div className="logo">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.8,
                type: "spring",
                stiffness: 200
              }}
            >
              Jankoti
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Welcome back to your account
            </motion.p>
          </div>
        </motion.div>
        
        <motion.form 
          className="login-card" 
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <AnimatePresence>
            {statusMessage && (
              <motion.div 
                className={`alert ${isSuccess ? 'alert-success' : 'alert-error'}`}
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div 
                  className="alert-content"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <motion.span 
                    className="alert-icon"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                  >
                    {isSuccess ? '✓' : '⚠'}
                  </motion.span>
                  {statusMessage}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.label 
              htmlFor="email"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Email Address
            </motion.label>
            <div className="input-wrapper">
              <motion.span 
                className="input-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3, type: "spring" }}
              >
                📧
              </motion.span>
              <motion.input
                id="email"
                type="email"
                className="login-input"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="form-group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.label 
              htmlFor="password"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Password
            </motion.label>
            <div className="input-wrapper password-wrapper">
              <motion.span 
                className="input-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
              >
                🔒
              </motion.span>
              <motion.input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="login-input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                whileFocus={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="toggle-password"
                onClick={() => setShowPassword(prev => !prev)}
                title="Toggle password visibility"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            className="login-options"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.label 
              className="checkbox-wrapper"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <motion.span 
                className="checkmark"
                animate={rememberMe ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              />
              Remember me
            </motion.label>
            <motion.a 
              href="#forgot" 
              className="forgot-password"
              whileHover={{ 
                scale: 1.05,
                color: "#5a67d8"
              }}
              transition={{ duration: 0.2 }}
            >
              Forgot Password?
            </motion.a>
          </motion.div>

          <motion.button 
            className="login-button" 
            type="submit" 
            disabled={loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="loading-content"
              >
                <motion.span 
                  className="spinner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Logging in...
              </motion.div>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Sign In
              </motion.span>
            )}
          </motion.button>

          <motion.div 
            className="login-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <p>
              Don't have an account? 
              <motion.a 
                href="#signup"
                whileHover={{ 
                  scale: 1.05,
                  color: "#5a67d8"
                }}
                transition={{ duration: 0.2 }}
              >
                Sign up
              </motion.a>
            </p>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Login;