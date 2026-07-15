# Intelligent News Summarization and Sentiment Analysis System

A production-ready full-stack application that leverages AI to analyze news articles, providing intelligent summarization and sentiment analysis using Google Gemini 2.5 Flash API.

## Tech Stack

### Frontend
- **React.js** - Modern UI library built with Vite for fast development
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API communication

### Backend
- **FastAPI** - Modern, fast web framework for building APIs with Python
- **Python** - Backend programming language
- **Pydantic** - Data validation using Python type annotations

### AI Services
- **Google Gemini 2.5 Flash API** - Advanced AI model for text analysis and generation

## Project Structure

```
.
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── main.jsx         # Application entry point
│   │   └── index.css        # Tailwind CSS imports
│   ├── index.html           # HTML template
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── postcss.config.js    # PostCSS configuration
├── backend/                 # FastAPI backend application
│   ├── main.py             # Application entry point
│   ├── requirements.txt     # Python dependencies
│   ├── config/             # Configuration files
│   │   ├── settings.py     # Application settings
│   │   └── __init__.py
│   ├── routes/             # API route handlers
│   │   ├── health.py       # Health check endpoint
│   │   └── __init__.py
│   ├── services/           # Business logic
│   │   └── __init__.py
│   └── utils/              # Utility functions
│       └── __init__.py
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md              # Project documentation
```

## Features

- **Health Check Endpoint** - Monitor system status at `/api/health`
- **CORS Configuration** - Secure cross-origin resource sharing
- **Clean Architecture** - Separated concerns with dedicated folders for routes, services, config, and utils
- **Environment Configuration** - Secure management of API keys and settings
- **Modern UI** - Responsive React frontend with Tailwind CSS

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Unix/MacOS: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create a `.env` file from the example:
```bash
cp ../.env.example .env
```

6. Update the `.env` file with your Google Gemini API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

7. Run the backend server:
```bash
python main.py
```

The backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns system health status and timestamp

### Root
- **GET** `/`
- Returns API information and version

## Development

### Running the Application

1. Start the backend server (from backend directory):
```bash
python main.py
```

2. Start the frontend development server (from frontend directory):
```bash
npm run dev
```

3. Access the application at `http://localhost:3000`

### Building for Production

Frontend:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Environment Variables

Create a `.env` file in the backend directory based on `.env.example`:

- `GEMINI_API_KEY` - Your Google Gemini API key (required for AI functionality)
- `ALLOWED_ORIGINS` - Comma-separated list of allowed CORS origins

## Future Enhancements

- News article summarization endpoint
- Sentiment analysis endpoint
- User authentication
- Article history and favorites
- Real-time news feed integration
- Advanced filtering and search capabilities
- Multi-language support

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
