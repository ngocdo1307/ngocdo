body {
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  background-color: #fffbe7;
  margin: 0;
  padding: 0;
}

.gift-image {
  width: 200px;
  height: auto;
  margin-top: 100px;
  cursor: pointer;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.card {
  margin-top: 50px;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  overflow: visible;
  min-height: 300px;
}

.gif {
  width: 200px;
  border-radius: 12px;
  margin-bottom: 20px;
}

#loveMsg {
  font-size: 18px;
  color: #ff4081;
  line-height: 1.5;
  white-space: pre-line;
}

#fromTag {
  display: block !important;
  opacity: 1 !important;
  color: #000000 !important;
  font-size: 1.2em;
  margin-top: 20px;
  text-align: center;
  position: relative;
  z-index: 10;
  transition: opacity 1s ease;
}

#loveStage {
  margin-top: 50px;
  padding: 20px;
  display: none;
  transition: opacity 1s ease;
}

#loveStage.hidden {
  opacity: 0;
}

#lovePrompt {
  font-size: 20px;
  color: #ff4081;
  margin-bottom: 20px;
}

#loveIcons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.love-icon {
  font-size: 40px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.love-icon.tapped {
  opacity: 0.7;
  transform: scale(1.2);
  animation: sparkle 0.5s ease;
}

@keyframes sparkle {
  0% { transform: scale(1.2); }
  50% { transform: scale(1.4); text-shadow: 0 0 10px #ff4081, 0 0 20px #ff4081; }
  100% { transform: scale(1.2); }
}
