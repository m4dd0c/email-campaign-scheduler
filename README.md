# 📧 Email Campaign Scheduler (ECS)

A minimal email campaign scheduling system built with **Node.js**, **Express**, **MongoDB**, and **Handlebars**. Schedule your email campaigns, manage recipients, and track delivery — all from a simple UI.

## 🚀 Features

- 📬 Create email campaigns with **HTML or plain text** messages
- ⏰ Schedule emails to be sent at a **future time**
- 📨 Auto-sends emails using **nodemailer + SMTP**
- 📊 Track delivery status for each recipient
- 🖥️ Clean UI using **Express-Handlebars + Bulma CSS**
- 🛠️ Fully extensible with **cron-based job scheduler**

## 🏗️ Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Backend      | Node.js, Express, TypeScript  |
| Database     | MongoDB (Mongoose)            |
| Scheduler    | node-cron                     |
| Email Sender | nodemailer + SMTP             |
| Frontend     | Express-Handlebars, Bulma CSS |
| Logging      | MongoDB logs collection       |

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/email-campaign-scheduler.git
cd email-campaign-scheduler
npm install
```

### 🔧 Environment Setup

Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/ecs
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=yourpassword
```

### ▶️ Run the Application

```bash
# Build TypeScript
npm run build

# Start development server (with auto-restart)
npm run dev

# Or start compiled server
npm start
```

The application will be available at: **http://localhost:4000**

## 🖥️ API Endpoints

- `GET /campaigns` → View all campaigns
- `GET /campaigns/api` → List all campaigns JSON
- `POST /campaigns/new/api` → Create new campaign
- `GET /campaigns/new` → View Create new compaign form
- `GET /campaigns/get/:id` → View campaign in UI

## 🧪 Sample API Usage

### Create Campaign

```json
POST /api/v1/campaign
Content-Type: application/json

{
  "title": "New Feature Drop!",
  "message": "<h1>We're live 🚀</h1><p>Check out the new stuff.</p>",
  "recipients": ["test@example.com", "other@example.com"],
  "scheduledTime": "2025-07-01T10:00:00Z"
}
```

## 📂 Project Structure

```
email-campaign-scheduler/
├── src/
│   ├── app.ts              # Express application setup
│   ├── server.ts           # Application entry point
│   ├── cron/
│   │   └── index.ts        # Cron job scheduler
│   ├── models/             # Mongoose data models
│   │   ├── Campaign.ts
│   │   └── Log.ts
│   ├── routes/             # Express route handlers
│   │   ├── api.ts
│   │   └── web.ts
│   ├── views/              # Handlebars templates
│   │   ├── layouts/
│   │   └── campaigns/
│   └── public/             # Static assets (CSS, JS, images)
├── dist/                   # Compiled TypeScript output
├── .env                    # Environment variables
├── package.json
└── README.md
```

## 🔧 Development Scripts

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build TypeScript
npm run build

# Start production server
npm start

# Run tests (if available)
npm test
```

## 📋 Dependencies

### Core Dependencies

- **express** - Web application framework
- **mongoose** - MongoDB object modeling
- **nodemailer** - Email sending functionality
- **node-cron** - Task scheduling
- **express-handlebars** - Template engine
- **dotenv** - Environment variable management

### Development Dependencies

- **typescript** - Type safety
- **@types/node** - Node.js type definitions

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/ecs
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-production-email@gmail.com
SMTP_PASS=your-app-specific-password
```

## 🧠 Future Improvements

- [ ] Add email template previews
- [ ] Implement BullMQ for advanced job queues
- [ ] Add user authentication and authorization
- [ ] Track email open and click rates
- [ ] Integration with SendGrid/Mailgun
- [ ] Add email campaign analytics dashboard
- [ ] Implement A/B testing for campaigns
- [ ] Add recipient list management
- [ ] Email template builder with drag-and-drop

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error**

- Ensure MongoDB is running locally or check your connection string
- Verify network access for MongoDB Atlas connections

**SMTP Authentication Failed**

- Use app-specific passwords for Gmail
- Check SMTP settings with your email provider
- Ensure less secure app access is enabled (if applicable)

**Emails Not Sending**

- Check cron job execution in logs
- Verify scheduled time format (ISO 8601)
- Check spam folder for test emails

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manish Kumar** 

- GitHub: [@m4dd0c](https://github.com/m4dd0c)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/m4dd0c)
- Email: manishsuthar078@gmail.com

---

⭐ **Star this repository if you found it helpful!**
