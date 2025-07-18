# jynx-saas
AI-powered live chat platform with bot-to-human handoff, real-time messaging, and website integration capabilities.



# **Live Chat Bot SaaS**  

🚀 **A scalable, AI-powered live chat solution** that integrates with any website via metadata, featuring:  
- **AI chatbot** (Deepseek API) + **human agent handoff**  
- **VoIP calling** (Twilio) for premium users  
- **Multi-role dashboards** (User, Agent, Admin, Super Admin)  
- **Free & Premium subscriptions** with flutterwave/paystack  

![Demo Screenshot](https://via.placeholder.com/800x400?text=Chat+Demo)  

---

## **✨ Features**  

### **Core Functionality**  
✅ **One-line website integration** (metadata script)  
✅ **Real-time chat** with Socket.io  
✅ **AI responses** (Deepseek API) + **pre-programmed FAQs**  
✅ **Live agent support** with mobile app notifications  
✅ **VoIP calls** directly from chat (Twilio integration)  

### **User Roles**  
👑 **Super Admin** – Manages businesses/platform settings  
🏢 **Business Admin** – Manages agents & analytics  
💬 **Agents** – Respond via mobile app (React Native)  
👥 **End Users** – Chat on client websites  

### **Subscription Tiers**  
| Feature               | Free           | Starter ($19) | Pro ($49)      |  
|-----------------------|----------------|---------------|----------------|  
| AI Chatbot            | ✅ 50 msg/day  | ✅ 500 msg/day| ✅ Unlimited   |  
| Live Agents           | ❌             | ✅ 1 agent    | ✅ 5 agents    |  
| VoIP Calls            | ❌             | ❌            | ✅ Included    |  
| Analytics             | Basic          | Advanced      | Premium        |  

---

## **🛠 Tech Stack**  

### **Backend**  
- **Node.js** (Express)  
- **PostgreSQL** (Database)  
- **Redis** (Caching)  
- **Socket.io** (Real-time chat)  

### **Frontend**  
- **React.js** (Dashboard & Website)  
- **React Native** (Mobile App)  
- **Tailwind CSS** (Styling)  

### **APIs & Services**  
- **Deepseek AI** (Chatbot)  
- **Twilio** (VoIP calls)  
- **Self-hosted SMTP** (Email)  

### **Infrastructure**  
- **Venihost VPS** (Hosting)  
- **Docker** (Containerization)  

---

## **🚀 Quick Start**  

### **Prerequisites**  
- Node.js v18+  
- PostgreSQL 14+  
- Redis  

### **Backend Setup**  
```bash
# Clone repo
git clone https://github.com/yourusername/live-chat-saas.git
cd live-chat-saas/backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
nano .env  # Fill in your keys

# Start the server
npm run dev
```

### **Frontend Setup**  
```bash
cd ../frontend
npm install
npm start  # Runs on http://localhost:3000
```

### **Mobile App Setup**  
```bash
cd ../mobile
npm install
npx expo start
```

---

## **📂 Project Structure**  

```
backend/           # Node.js API
├── controllers/   # Route handlers
├── models/        # Database models
├── services/      # Twilio/Deepseek integrations
└── routes/        # API endpoints

frontend/          # React Dashboard
├── public/        # Static files
└── src/           # Components & pages

mobile/            # React Native App
├── screens/       # Agent chat/call UI
└── services/      # Socket.io client
```

---


---

## **📜 License**  
MIT © [Your Name]([https://github.com/mickythegeek/jynx-saas/])  

---

## **💬 Support**  
For issues, email **sirmisell@gmail.com** or open a [GitHub Issue](https://github.com/mickythegeek/jynx-saas/issues).  
